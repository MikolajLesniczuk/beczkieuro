import React from "react";
import s from "./ppoz.module.scss";

export const ZbiornikiPrzeciwpozarowe = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Zbiorniki Przeciwpożarowe</h1>
      <p className={s.description}>
        Nasze zbiorniki przeciwpożarowe to niezbędne rozwiązanie dla zapewnienia
        bezpieczeństwa w przypadku pożaru. Dzięki solidnej konstrukcji i
        wysokiej jakości materiałom, nasze zbiorniki gwarantują niezawodność i
        długowieczność.
      </p>
      <h2 className={s.subtitle}>
        Dlaczego warto wybrać nasze zbiorniki przeciwpożarowe?
      </h2>
      <p className={s.text}>
        Oferujemy szeroką gamę zbiorników przeciwpożarowych, które spełniają
        najwyższe standardy bezpieczeństwa. Oto kilka powodów, dla których warto
        wybrać nasze zbiorniki:
      </p>
      <ul className={s.list}>
        <li>Wysoka odporność na korozję i uszkodzenia mechaniczne.</li>
        <li>Różne pojemności, dostosowane do indywidualnych potrzeb.</li>
        <li>
          Łatwość instalacji i konserwacji, co zapewnia długotrwałe użytkowanie.
        </li>
        <li>
          Spełnienie rygorystycznych norm i standardów bezpieczeństwa
          przeciwpożarowego.
        </li>
        <li>
          Możliwość integracji z istniejącymi systemami przeciwpożarowymi.
        </li>
      </ul>
      <h3 className={s.subsubtitle}>
        Zastosowanie zbiorników przeciwpożarowych
      </h3>
      <p className={s.text}>
        Nasze zbiorniki przeciwpożarowe są idealne do zastosowania w
        różnorodnych miejscach, takich jak budynki mieszkalne, komercyjne i
        przemysłowe. Zapewniają one niezbędne wsparcie w sytuacjach awaryjnych,
        gwarantując dostępność wody do gaszenia pożarów.
      </p>
      <p className={s.text}>
        Wybierając nasze zbiorniki przeciwpożarowe, inwestujesz w bezpieczeńwość
        swojego obiektu oraz jego użytkowników. Skontaktuj się z nami, aby
        dowiedzieć się więcej o naszych produktach i uzyskać profesjonalne
        doradztwo.
      </p>
      <p className={s.contact}>
        Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o naszych
        zbiornikach przeciwpożarowych i zabezpieczyć swoje mienie przed
        zagrożeniem pożarowym.
      </p>
    </div>
  );
};
