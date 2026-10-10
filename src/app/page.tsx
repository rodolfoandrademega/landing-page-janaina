"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Camera, MapPin, MessageCircle, Share2, Sparkles } from "lucide-react";
import { bioData } from "@/data/bioData";
import styles from "./bio.module.css";

export default function Home() {
  const [shareStatus, setShareStatus] = useState("");

  async function handleShare() {
    try {
      if (navigator.share) {
        await navigator.share({ title: bioData.name, url: window.location.href });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShareStatus("Link copiado!");
      }
    } catch (error) {
      if (!(error instanceof DOMException && error.name === "AbortError")) {
        setShareStatus("Copie o endereço da página para compartilhar.");
      }
    }
  }

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
          <button className={styles.share} onClick={handleShare} aria-label="Compartilhar página">
            <Share2 size={17} />
          </button>
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
                <Image src={bioData.coverUrl} alt="" fill sizes="180px" />
              </span>
              <span className={styles.featuredCopy}>
                <span className={styles.cardEyebrow}><MessageCircle size={12} /> SEU MOMENTO DE CUIDADO</span>
                <strong>Vamos agendar<br />seu atendimento?</strong>
                <small>Fale comigo pelo WhatsApp</small>
              </span>
              <span className={styles.roundArrow}><ArrowUpRight size={19} /></span>
            </a>

            <a className={styles.procedures} href={bioData.links[0].url} target="_blank" rel="noopener noreferrer">
              <span className={styles.procedurePhoto}>
                <Image src="/images/cuidado-facial.jpg" alt="" fill sizes="110px" />
                <span><Sparkles size={15} /></span>
              </span>
              <span className={styles.procedureCopy}>
                <span className={styles.cardEyebrow}>ENCONTRE SEU CUIDADO</span>
                <strong>Conheça os<br />procedimentos</strong>
                <small>Protocolos e valores</small>
              </span>
              <span className={styles.outlineArrow}><ArrowUpRight size={18} /></span>
            </a>

            <a className={styles.instagram} href={bioData.links[1].url} target="_blank" rel="noopener noreferrer">
              <span className={styles.socialPhoto} aria-hidden="true">
                <Image src={bioData.coverUrl} alt="" fill sizes="100px" />
              </span>
              <span className={styles.cardEyebrow}><Camera size={14} /> MAIS DE MIM</span>
              <span className={styles.socialCopy}>
                <strong>Meu universo<br />no Instagram</strong>
                <small>Dicas e novidades</small>
              </span>
              <ArrowUpRight size={18} className={styles.cornerArrow} />
            </a>

            <a className={styles.location} href={bioData.links[2].url} target="_blank" rel="noopener noreferrer">
              <span className={styles.locationArt} aria-hidden="true">
                <span className={styles.mapLine} />
                <span className={styles.mapPin}><Image src={bioData.logoUrl} alt="" width={20} height={20} /></span>
              </span>
              <span className={styles.cardEyebrow}><MapPin size={14} /> NOSSO ENCONTRO</span>
              <span className={styles.locationCopy}>
                <strong>Como<br />chegar</strong>
                <small>Peça a localização</small>
              </span>
              <ArrowUpRight size={18} className={styles.cornerArrow} />
            </a>
          </nav>
          <p className={styles.status} role="status">{shareStatus}</p>
          <footer className={styles.footer}>
            <span>BELEZA COM CUIDADO. CUIDADO COM VOCÊ.</span>
          </footer>
        </div>
      </div>
    </main>
  );
}
