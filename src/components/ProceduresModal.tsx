"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowUpRight, MessageCircle, Sparkles, X } from "lucide-react";
import { procedures, procedureContactUrl } from "@/data/procedures";
import styles from "./ProceduresModal.module.css";

export function ProceduresModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;
    dialog.showModal();
    dialog.scrollTop = 0;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-labelledby="procedures-title"
      aria-describedby="procedures-intro"
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClose={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
    >
      <header className={styles.header}>
        <div><p><Sparkles size={12} /> SEU MOMENTO DE CUIDADO</p><h2 id="procedures-title">Conheça os procedimentos</h2></div>
        <button type="button" className={styles.close} onClick={onClose} aria-label="Fechar procedimentos" autoFocus><X size={20} /></button>
      </header>
      {open && <div className={styles.body}>
        <p id="procedures-intro" className={styles.intro}>Escolha o cuidado que você quer conhecer. Janaína te conta os detalhes, valores e horários pelo WhatsApp.</p>
        <div className={styles.grid}>
          {procedures.map((procedure, index) => (
            <article key={procedure.id} className={styles.card}>
              <div className={styles.photo}>
                <Image src={procedure.image} alt={procedure.alt} fill sizes="(max-width: 600px) calc(100vw - 64px), 310px" />
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                <span className={styles.imageLabel}>IMAGEM ILUSTRATIVA</span>
              </div>
              <div className={styles.copy}>
                <span className={styles.eyebrow}>{procedure.label}</span>
                <h3>{procedure.name}</h3>
                <p>{procedure.description}</p>
                <a href={procedureContactUrl(procedure.name)} target="_blank" rel="noopener noreferrer" aria-label={`Saber mais sobre ${procedure.name} pelo WhatsApp`}>
                  <MessageCircle size={15} /> Quero saber mais <ArrowUpRight size={17} />
                </a>
              </div>
            </article>
          ))}
          <div className={styles.help}>
            <Image src="/images/logo-janaina.png" alt="" width={43} height={42} />
            <h3>Qual cuidado combina com você?</h3>
            <p>Converse com Janaína e encontre seu próximo momento de cuidado.</p>
            <a href="https://wa.me/5582981513694?text=Ol%C3%A1%2C%20Jana%C3%ADna!%20Gostaria%20de%20ajuda%20para%20escolher%20um%20procedimento." target="_blank" rel="noopener noreferrer">Me ajude a escolher <ArrowUpRight size={17} /></a>
          </div>
        </div>
      </div>}
    </dialog>
  );
}
