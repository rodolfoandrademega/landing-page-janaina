"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { bioData } from "@/data/bioData";
import styles from "./SiteEntrance.module.css";

export function SiteEntrance() {
  const [leaving, setLeaving] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let disposed = false;
    let finished = false;
    let removal: ReturnType<typeof setTimeout> | undefined;
    const finish = () => {
      if (disposed || finished) return;
      finished = true;
      setLeaving(true);
      removal = setTimeout(() => setRemoved(true), 240);
    };
    let minimumTimer: ReturnType<typeof setTimeout>;
    const minimum = new Promise<void>(resolve => {
      minimumTimer = setTimeout(resolve, 900);
    });
    const portrait = document.querySelector<HTMLImageElement>("main img");
    const imageReady = portrait ? portrait.decode().catch(() => {}) : Promise.resolve();
    const deadline = setTimeout(finish, 1600);
    Promise.all([minimum, imageReady, document.fonts.ready]).then(finish, finish);
    return () => {
      disposed = true;
      clearTimeout(deadline);
      clearTimeout(minimumTimer);
      clearTimeout(removal);
    };
  }, []);

  if (removed) return null;

  return (
    <div className={`${styles.entrance} ${leaving ? styles.leaving : ""}`} aria-hidden="true">
      <div className={styles.brand}>
        <Image src={bioData.logoUrl} alt="" width={100} height={98} preload className={styles.logo} />
        <span className={styles.name}>{bioData.name}</span>
        <span className={styles.role}>{bioData.role}</span>
        <span className={styles.line} />
      </div>
    </div>
  );
}
