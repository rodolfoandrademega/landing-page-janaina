"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Camera, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { bioData } from "@/data/bioData";
import styles from "./bio.module.css";
import { LocationModal } from "@/components/LocationModal";
import { ProceduresModal } from "@/components/ProceduresModal";

export default function Home() {
  const [locationOpen, setLocationOpen] = useState(false);
  const [proceduresOpen, setProceduresOpen] = useState(false);

  return (
    <main className={styles.page}>
      <div className={styles.profile}>
        <div className={styles.photo}>
          <Image
            src={bioData.coverUrl}
            alt="Janaína Andrade"
            fill
            sizes="(max-width: 520px) 100vw, 480px"
            preload
            className={styles.portrait}
          />
          <div className={styles.photoFade} />
        </div>

        <div className={styles.content}>
          <div className={styles.logo}>
            <Image src={bioData.logoUrl} alt="Logo de Janaína Andrade" width={58} height={55} />
          </div>
          <header className={styles.intro}>
            <p className={styles.role}>{bioData.role}</p>
            <h1>{bioData.name}</h1>
            <p className={styles.bio}>{bioData.bio}</p>
          </header>

          <nav className={styles.links} aria-label="Links de Janaína Andrade">
            <a className={styles.featured} href={bioData.featuredLink.url} target="_blank" rel="noopener noreferrer">
              <span className={styles.featuredPhoto} aria-hidden="true">
                <Image src="/images/janaina-white.jpg" alt="" fill sizes="180px" />
              </span>
              <span className={styles.featuredCopy}>
                <span className={styles.cardEyebrow}><MessageCircle size={12} /> SEU MOMENTO DE CUIDADO</span>
                <strong>Vamos agendar<br />seu atendimento?</strong>
                <small>Fale comigo pelo WhatsApp</small>
              </span>
              <span className={styles.roundArrow}><ArrowUpRight size={19} /></span>
            </a>

            <button type="button" className={styles.procedures} onClick={() => setProceduresOpen(true)} aria-haspopup="dialog">
              <span className={styles.procedurePhoto}>
                <Image src="/images/janaina-treatment.jpg" alt="" fill sizes="110px" />
                <span><Sparkles size={15} /></span>
              </span>
              <span className={styles.procedureCopy}>
                <span className={styles.cardEyebrow}>ENCONTRE SEU CUIDADO</span>
                <strong>Conheça os<br />procedimentos</strong>
                <small>Explore os cuidados disponíveis</small>
              </span>
              <span className={styles.outlineArrow}><ArrowUpRight size={18} /></span>
            </button>

            <a className={styles.instagram} href={bioData.links[1].url} target="_blank" rel="noopener noreferrer">
              <span className={styles.socialPhoto} aria-hidden="true">
                <Image src="/images/janaina-smile.jpg" alt="" fill sizes="100px" />
              </span>
              <span className={styles.cardEyebrow}><Camera size={14} /> MAIS DE MIM</span>
              <span className={styles.socialCopy}>
                <strong>Meu universo<br />no Instagram</strong>
                <small>Dicas e novidades</small>
              </span>
              <ArrowUpRight size={18} className={styles.cornerArrow} />
            </a>

            <button type="button" className={styles.location} onClick={() => setLocationOpen(true)} aria-haspopup="dialog">
              <span className={styles.locationArt} aria-hidden="true">
                <span className={styles.mapLine} />
                <span className={styles.mapPin}><Image src={bioData.logoUrl} alt="" width={20} height={20} /></span>
              </span>
              <span className={styles.cardEyebrow}><MapPin size={14} /> NOSSO ENCONTRO</span>
              <span className={styles.locationCopy}>
                <strong>Como<br />chegar</strong>
                <small>Veja o mapa e sua rota</small>
              </span>
              <ArrowUpRight size={18} className={styles.cornerArrow} />
            </button>

            <a className={styles.rennove} href={bioData.rennove.url} target="_blank" rel="noopener noreferrer">
              <span className={styles.rennoveArt} aria-hidden="true">
                <Image src="/images/janaina-consult.jpg" alt="" fill sizes="90px" />
              </span>
              <span className={styles.rennoveCopy}>
                <span className={styles.cardEyebrow}>UM ESPAÇO PARA VOCÊ</span>
                <strong>{bioData.rennove.title}</strong>
                <small>{bioData.rennove.subtitle}</small>
              </span>
              <span className={styles.outlineArrow}><ArrowUpRight size={18} /></span>
            </a>
          </nav>
          <footer className={styles.footer}>
            <span>BELEZA COM CUIDADO. CUIDADO COM VOCÊ.</span>
            <a className={styles.credit} href="https://megaagencia.com.br" target="_blank" rel="noopener noreferrer">
              Desenvolvido por <strong>Mega Agência</strong>
            </a>
          </footer>
        </div>
      </div>
      <LocationModal open={locationOpen} onClose={() => setLocationOpen(false)} />
      <ProceduresModal open={proceduresOpen} onClose={() => setProceduresOpen(false)} />
    </main>
  );
}
