// Szambo.js

import React from "react";
import s from "./szambo.module.scss";

const Szambo = () => {
  return (
    <div className={s.container}>
      <h2 className={s.title}>Zbiorniki na Szambo</h2>
      <p className={s.description}>
        Potrzebujesz solidnego i niezawodnego rozwiązania do gromadzenia i
        utylizacji ścieków? Nasze zbiorniki na szambo są idealnym rozwiązaniem
        dla Ciebie. Zbudowane z wytrzymałych materiałów i zaprojektowane z myślą
        o długotrwałym użytkowaniu, zapewniają nie tylko skuteczną utylizację,
        ale także ochronę dla środowiska i Twojej posesji.
      </p>
      <h3 className={s.subtitle}>Dlaczego warto wybrać nasze zbiorniki?</h3>
      <ul className={s.list}>
        <li>Solidna konstrukcja odporna na warunki atmosferyczne.</li>
        <li>Elastyczność pojemności, dostosowana do Twoich potrzeb.</li>
        <li>Łatwa w montażu i obsłudze.</li>
        <li>Bezpieczne dla środowiska i Twojej posesji.</li>
      </ul>
      <h3 className={s.subsubtitle}>Zastosowanie Zbiorników na Szambo</h3>
      <p className={s.text}>
        Nasze zbiorniki na szambo doskonale sprawdzają się w różnych warunkach,
        m.in. w gospodarstwach domowych, przedsiębiorstwach oraz instytucjach
        publicznych.
      </p>
      <p className={s.contact}>
        Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o naszych
        zbiornikach na szambo i znaleźć idealne rozwiązanie dla swojej posesji!
      </p>
    </div>
  );
};

export default Szambo;
