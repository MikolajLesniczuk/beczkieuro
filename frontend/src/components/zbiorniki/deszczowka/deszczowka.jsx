import s from "./deszczowka.module.scss";

import React from "react";

export const ZbiornikiNaDeszczowke = () => {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Zbiorniki na deszczówkę</h1>
      <p className={s.description}>
        Oferujemy zbiorniki na deszczówkę, które są idealnym rozwiązaniem dla
        tych, którzy chcą oszczędzać wodę i dbać o środowisko. Nasze zbiorniki
        są dostępne w różnych pojemnościach, co pozwala na idealne dopasowanie
        do Twoich potrzeb.
      </p>
      <h2 className={s.subtitle}>Zalety naszych zbiorników na deszczówkę</h2>
      <p className={s.text}>
        Wykorzystanie zbiorników na deszczówkę to świetny sposób na zmniejszenie
        zużycia wody pitnej, co przekłada się na niższe rachunki oraz korzyści
        dla środowiska. Oto kilka zalet naszych zbiorników:
      </p>
      <ul className={s.list}>
        <li>
          Wysoka jakość materiałów zapewnia trwałość i odporność na uszkodzenia.
        </li>
        <li>
          Różnorodność pojemności pozwala na wybór odpowiedniego zbiornika do
          Twojego ogrodu lub domu.
        </li>
        <li>
          Łatwość instalacji i użytkowania, co umożliwia szybkie i bezproblemowe
          korzystanie ze zbiorników.
        </li>
        <li>
          Ekologiczne rozwiązanie, które pomaga w ochronie zasobów wodnych.
        </li>
        <li>Estetyczny design, który wpasuje się w wygląd każdego ogrodu.</li>
      </ul>
      <h3 className={s.subsubtitle}>
        Dlaczego warto wybrać nasze zbiorniki na deszczówkę?
      </h3>
      <p className={s.text}>
        Nasze zbiorniki na deszczówkę są projektowane z myślą o długotrwałym
        użytkowaniu i efektywności. Zapewniają nie tylko oszczędność wody, ale
        także pieniędzy. Dzięki nim możesz gromadzić wodę opadową i wykorzystać
        ją do podlewania ogrodu, mycia samochodu, a nawet do celów domowych.
      </p>
      <p className={s.text}>
        Skontaktuj się z nami, aby dowiedzieć się więcej o naszych zbiornikach
        na deszczówkę i uzyskać pomoc w wyborze najlepszego rozwiązania dla
        Ciebie.
      </p>
      <p className={s.contact}>
        Zadzwoń do nas lub napisz, a chętnie pomożemy!
      </p>
    </div>
  );
};
