import React from "react";
import styles from "./rsm.module.scss";

export const RSM = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Zbiorniki na Roztwór Saletrzano-Mocznikowy (RSM)
      </h2>
      <p className={styles.description}>
        Nasze zbiorniki na RSM (Roztwór Saletrzano-Mocznikowy) to innowacyjne
        rozwiązanie dla rolnictwa i ogrodnictwa. Zapewniają one efektywne
        magazynowanie i dystrybucję nawozów, co przyczynia się do zwiększenia
        plonów i poprawy jakości gleby.
      </p>
      <h3 className={styles.subtitle}>
        Dlaczego warto wybrać nasze zbiorniki na RSM?
      </h3>
      <ul className={styles.list}>
        <li>Wysoka jakość materiałów odpornych na korozję.</li>
        <li>
          Bezpieczne przechowywanie i dystrybucja roztworu
          saletrzano-mocznikowego.
        </li>
        <li>Efektywne wykorzystanie zasobów wody i nawozów.</li>
        <li>
          Możliwość dostosowania pojemności zbiornika do indywidualnych potrzeb.
        </li>
      </ul>
      <p className={styles.contact}>
        Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o naszych
        zbiornikach na Roztwór Saletrzano-Mocznikowy (RSM) i zadbać o wydajność
        swoich upraw.
      </p>
    </div>
  );
};
