"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, LocateFixed, MapPin, Navigation, X } from "lucide-react";
import { bioData } from "@/data/bioData";
import { directionsUrl, type TravelMode } from "@/lib/directions";
import styles from "./LocationModal.module.css";

export function LocationModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const requestId = useRef(0);
  const [origin, setOrigin] = useState("");
  const [coordinates, setCoordinates] = useState("");
  const [mode, setMode] = useState<TravelMode>("driving");
  const [locating, setLocating] = useState(false);
  const [locationStatus, setLocationStatus] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      requestId.current += 1;
      setLocating(false);
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function locate() {
    setLocationStatus("");
    if (!navigator.geolocation) {
      setLocationStatus("Este navegador não oferece localização. Digite seu ponto de partida abaixo.");
      return;
    }
    const currentRequest = ++requestId.current;
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        if (currentRequest !== requestId.current) return;
        setCoordinates(`${coords.latitude},${coords.longitude}`);
        setOrigin("");
        setLocating(false);
        setLocationStatus("Localização atual encontrada. Agora você pode abrir sua rota.");
      },
      (error) => {
        if (currentRequest !== requestId.current) return;
        setLocating(false);
        setLocationStatus(error.code === 1
          ? "A permissão de localização não foi concedida. Digite seu ponto de partida ou escolha a origem no Google Maps."
          : "Não conseguimos localizar você. Tente novamente ou digite seu ponto de partida.");
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 60000 },
    );
  }

  async function copyAddress() {
    try {
      await navigator.clipboard.writeText(bioData.location.address);
      setCopyStatus("Endereço copiado!");
    } catch {
      setCopyStatus("Selecione o endereço acima para copiar.");
    }
  }

  const routeUrl = directionsUrl(bioData.location.destination, coordinates || origin.trim(), mode);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="location-title"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClose={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
    >
      <header className={styles.header}>
        <div><p>NOSSO ENCONTRO</p><h2 id="location-title">Seu caminho até aqui.</h2></div>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar localização" autoFocus><X size={20} /></button>
      </header>

      {open && <div className={styles.map}>
        <iframe
          src={bioData.location.embedUrl}
          title="Mapa do local de atendimento de Janaína Andrade"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a href={bioData.location.mapsUrl} target="_blank" rel="noopener noreferrer">Ver no Google Maps <ArrowUpRight size={13} /></a>
      </div>}

      <div className={styles.body}>
        <div className={styles.destination}>
          <span className={styles.destinationIcon}><MapPin size={20} /></span>
          <div><span>LOCAL DE ATENDIMENTO</span><h3>Janaína Andrade</h3><address>{bioData.location.address}</address></div>
          <button type="button" className={styles.copy} onClick={copyAddress} aria-label="Copiar endereço">{copyStatus === "Endereço copiado!" ? <Check size={17} /> : <Copy size={17} />}</button>
        </div>
        {copyStatus && <p className={styles.status} role="status">{copyStatus}</p>}

        <div className={styles.route}>
          <h3>De onde você está saindo?</h3>
          <button type="button" className={styles.locate} onClick={locate} disabled={locating}>
            <LocateFixed size={17} /> {locating ? "Encontrando sua localização…" : coordinates ? "Atualizar minha localização" : "Usar minha localização atual"}
          </button>
          {locationStatus && <p className={styles.status} role="status">{locationStatus}</p>}
          <label htmlFor="route-origin">Ou digite um endereço de partida</label>
          <div className={styles.originInput}>
            <MapPin size={16} />
            <input
              id="route-origin"
              type="text"
              value={origin}
              placeholder={coordinates ? "Sua localização atual está selecionada" : "Rua, bairro ou cidade"}
              maxLength={200}
              onChange={(event) => {
                requestId.current += 1;
                setLocating(false);
                setCoordinates("");
                setLocationStatus("");
                setOrigin(event.target.value);
              }}
            />
            {(origin || coordinates) && <button type="button" aria-label="Limpar ponto de partida" onClick={() => { requestId.current += 1; setLocating(false); setOrigin(""); setCoordinates(""); setLocationStatus(""); }}><X size={15} /></button>}
          </div>
          <fieldset className={styles.modes}>
            <legend>Como você vai?</legend>
            {([{ value: "driving", label: "De carro" }, { value: "walking", label: "A pé" }, { value: "transit", label: "Transporte público" }] as const).map((option) => (
              <label key={option.value}><input type="radio" name="travel-mode" value={option.value} checked={mode === option.value} onChange={() => setMode(option.value)} /><span>{option.label}</span></label>
            ))}
          </fieldset>
          <a className={styles.routeButton} href={routeUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir rota até o atendimento no Google Maps">
            <Navigation size={18} /> Ver rota no Google Maps <ArrowUpRight size={18} />
          </a>
          <p className={styles.help}>O Google Maps mostra o trajeto, a distância e o tempo estimado. Se você não informar a origem, poderá escolhê-la ao abrir a rota.</p>
          <p className={styles.privacy}>Sua localização só é solicitada ao tocar no botão e é enviada ao Google Maps quando você abre a rota.</p>
        </div>
      </div>
    </dialog>
  );
}
