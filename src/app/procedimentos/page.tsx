import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowDown, ArrowUpRight, Sparkles, Heart, MessageCircle } from "lucide-react";
import { procedures, procedureContactUrl } from "@/data/procedures";
import { bioData } from "@/data/bioData";
import styles from "./procedures.module.css";

export const metadata: Metadata = {
  title: "Procedimentos | Janaína Andrade",
  description: "Conheça os cuidados faciais e corporais de Janaína Andrade: limpeza de pele, Melan Off, drenagem, Método JA e Strioff. Converse e agende seu atendimento.",
};

const helpUrl = procedureContactUrl("uma avaliação para escolher meu procedimento");

export default function ProceduresPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="Janaína Andrade, voltar ao início">
          <Image src={bioData.logoUrl} alt="" width={36} height={35} />
          <span>Janaína Andrade<small>ESTETICISTA & COSMETÓLOGA</small></span>
        </Link>
        <Link href="/" className={styles.back}><ArrowLeft size={16} /> <span>Voltar aos links</span></Link>
      </header>
      <main>
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> CUIDADO QUE COMEÇA EM VOCÊ</p>
            <h1>Um tempo seu.<br />Um cuidado <em>único.</em></h1>
            <p className={styles.lead}>Cada pele, cada corpo, uma história. Conheça os procedimentos e encontre o próximo passo do seu autocuidado.</p>
            <a href="#cuidados" className={styles.primary}>Encontre seu cuidado <ArrowDown size={18} /></a>
            <div className={styles.signature}><span>JA</span><p>Técnica, acolhimento<br />e atenção a cada detalhe.</p></div>
          </div>
          <div className={styles.heroVisual}>
            <Image src="/images/limpeza-pele.jpg" alt="Aplicação delicada de máscara facial durante um cuidado estético" fill sizes="(max-width: 700px) 100vw, 50vw" preload />
            <div className={styles.visualCaption}><Sparkles size={18} /><span>Seu momento de cuidado.<br /><strong>Do seu jeito.</strong></span></div>
            <span className={styles.photoNote}>IMAGEM ILUSTRATIVA</span>
          </div>
        </section>
        <div className={styles.values}>
          <span><Sparkles size={16} /> Cuidados faciais e corporais</span>
          <span><Heart size={16} /> Atendimento individualizado</span>
          <span><MessageCircle size={16} /> Uma conversa é o primeiro passo</span>
        </div>
        <section id="cuidados" className={styles.catalog} aria-labelledby="catalog-title">
          <div className={styles.sectionHeading}>
            <div><p className={styles.eyebrow}>ESCOLHA SEU MOMENTO</p><h2 id="catalog-title">O que faz sentido<br />para <em>você hoje?</em></h2></div>
            <p>Explore os cuidados abaixo. Para saber mais sobre indicação, sessões e valores, fale diretamente comigo.</p>
          </div>
          <div className={styles.grid}>
            {procedures.map((procedure, index) => (
              <article className={styles.card} key={procedure.id} id={procedure.id}>
                <div className={styles.cardPhoto}>
                  <Image src={procedure.image} alt={procedure.alt} fill sizes="(max-width: 600px) 100vw, (max-width: 950px) 50vw, 360px" />
                  <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                  <span className={styles.photoNote}>IMAGEM ILUSTRATIVA</span>
                </div>
                <div className={styles.cardCopy}>
                  <p className={styles.eyebrow}>{procedure.label}</p>
                  <h3>{procedure.name}</h3>
                  <p>{procedure.description}</p>
                  <a href={procedureContactUrl(procedure.name)} target="_blank" rel="noopener noreferrer" aria-label={`Conversar sobre ${procedure.name} pelo WhatsApp`}>Quero conhecer <span><ArrowUpRight size={20} /></span></a>
                </div>
              </article>
            ))}
            <article className={styles.help}>
              <Image src={bioData.logoUrl} alt="" width={58} height={57} />
              <p className={styles.eyebrow}>PODEMOS DESCOBRIR JUNTAS</p>
              <h3>Seu cuidado começa<br />com uma <em>boa conversa.</em></h3>
              <p>Ainda não sabe qual escolher? Me conte o que você procura. Vamos entender o melhor caminho para o seu momento.</p>
              <a href={helpUrl} target="_blank" rel="noopener noreferrer">Me ajude a escolher <ArrowUpRight size={20} /></a>
            </article>
          </div>
          <p className={styles.imageCredit}>Fotografias ilustrativas de procedimentos · <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer">Pexels</a></p>
        </section>
        <section className={styles.invitation}>
          <div className={styles.invitationPhoto}><Image src="/images/janaina-white.jpg" alt="Janaína Andrade" fill sizes="(max-width: 700px) 100vw, 400px" /></div>
          <div className={styles.invitationCopy}>
            <p className={styles.eyebrow}>VAMOS CUIDAR DE VOCÊ?</p>
            <h2>Seu próximo cuidado<br />começa <em>aqui.</em></h2>
            <p>Um atendimento com escuta, atenção e espaço para tirar suas dúvidas. Reserve um momento para você.</p>
            <a className={styles.primary} href={bioData.featuredLink.url} target="_blank" rel="noopener noreferrer">Agendar meu atendimento <ArrowUpRight size={19} /></a>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <Link href="/">Janaína Andrade <span>ESTETICISTA & COSMETÓLOGA</span></Link>
        <p>BELEZA COM CUIDADO. CUIDADO COM VOCÊ.</p>
        <Link href="/" className={styles.footerBack}><ArrowLeft size={15} /> Voltar aos links</Link>
      </footer>
    </div>
  );
}
