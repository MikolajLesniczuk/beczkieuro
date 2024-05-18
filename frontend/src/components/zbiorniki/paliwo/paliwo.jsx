import React from "react";
import styles from "./paliwo.module.scss";

export const ZbiornikiNaPaliwo = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Zbiorniki na Paliwo</h2>
      <p className={styles.description}>
        Nasze zbiorniki na paliwo to niezawodne rozwiązanie dla magazynowania i
        dystrybucji różnych rodzajów paliw. Oferujemy wysokiej jakości
        zbiorniki, które spełniają najwyższe standardy bezpieczeństwa i
        wydajności.
      </p>
      <h3 className={styles.subtitle}>
        Dlaczego warto wybrać nasze zbiorniki na paliwo?
      </h3>
      <ul className={styles.list}>
        <li>Wytrzymała konstrukcja zapewniająca ochronę przed wyciekami.</li>
        <li>Bezpieczne przechowywanie różnych rodzajów paliw.</li>
        <li>
          Możliwość dostosowania pojemności zbiornika do indywidualnych potrzeb.
        </li>
        <li>Efektywne wykorzystanie miejsca dzięki kompaktowym rozmiarom.</li>
      </ul>
      <p className={styles.contact}>
        Skontaktuj się z nami już dziś, aby uzyskać więcej informacji o naszych
        zbiornikach na paliwo i zapewnić bezpieczne magazynowanie paliw.
      </p>
    </div>
  );
};
