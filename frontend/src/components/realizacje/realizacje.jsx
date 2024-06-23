import React from "react";
import s from "./realizacje.module.scss";
import { Link } from "react-router-dom";

import dys from "../../assets/beczki/dystrybutor.jpg";
import one from "../../assets/beczki/biala.jpg";
import aaa from "../../assets/beczki/new.jpg";
import two from "../../assets/beczki/czarna.jpg";
import three from "../../assets/beczki/beka2.jpg";
import four from "../../assets/beczki/beka.jpg";
import five from "../../assets/beczki/5.jpg";
import six from "../../assets/beczki/6.jpg";
import seven from "../../assets/beczki/7.jpg";
import eight from "../../assets/beczki/nowamala.jpg";
import nine from "../../assets/beczki/9.jpg";
import eleven from "../../assets/beczki/10.jpg";
import twelve from "../../assets/beczki/11.jpg";
import fifteen from "../../assets/beczki/12.jpg";
import sixteen from "../../assets/beczki/15.jpg";
import seventeen from "../../assets/beczki/1.jpg";
import eighteen from "../../assets/beczki/2.jpg";
import nineteen from "../../assets/beczki/8.jpg";
import twenty from "../../assets/beczki/nowa.jpg";
import silos from "../../assets/beczki/nowe/silos.jpg";
import silos1 from "../../assets/beczki/nowe/silos1.jpg";
import zlota from "../../assets/beczki/nowe/zlota.jpg";
import twentythree from "../../assets/beczki/4.jpg";

export const Realizacje = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 550,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className={s.opis}>
        <p>
          Nasz asortyment składa się ze zbiorników stalowych, plastikowych oraz
          ze stali nierdzewnej o różnych pojemnościach i różnym zastosowaniu.
          Oferujemy zbiorniki przeciwpożarowe, zbiorniki na RSM, zbiorniki na
          deszczówkę, zbiorniki na wodę, zbiorniki na szambo oraz zbiorniki na
          paliwo.
        </p>
        <div className={s.flex}>
          <Link onClick={scrollToTop} className={s.boxik} to="/zbiorniki/ppoz">
            <div>
              <h2 className={s.title}>Zbiorniki przeciwpożarowe</h2>

              <p className={s.description}>
                Oferujemy najwyższej jakości zbiorniki przeciwpożarowe, które
                zapewniają niezawodną ochronę przeciwpożarową. Nasze zbiorniki
                są wykonane z trwałych materiałów, odpornych na korozję i
                uszkodzenia mechaniczne. Idealnie nadają się do przechowywania
                wody używanej w systemach przeciwpożarowych w budynkach
                mieszkalnych, komercyjnych oraz przemysłowych.
              </p>
            </div>
          </Link>
          <Link
            onClick={scrollToTop}
            className={s.boxik}
            to="/zbiorniki/szambo"
          >
            <div>
              <h2 className={s.title}>Zbiorniki na szambo</h2>

              <p className={s.description}>
                Nasze zbiorniki na szambo to idealne rozwiązanie dla gospodarstw
                domowych oraz przedsiębiorstw, które potrzebują skutecznego i
                bezpiecznego systemu przechowywania ścieków. Zapewniamy szeroki
                wybór pojemności, dzięki czemu można je dopasować do
                indywidualnych potrzeb. Zbiorniki są szczelne i łatwe w montażu,
                co zapewnia długotrwałe i bezproblemowe użytkowanie.
              </p>
            </div>
          </Link>
          <Link onClick={scrollToTop} className={s.boxik} to="/zbiorniki/rsm">
            <div>
              <h2 className={s.title}>Zbiorniki na RSM</h2>

              <p className={s.description}>
                Specjalizujemy się w dostarczaniu zbiorników na RSM (Roztwór
                Saletrzano-Mocznikowy), które są niezbędne w rolnictwie do
                przechowywania i dystrybucji nawozów płynnych. Nasze zbiorniki
                charakteryzują się wysoką odpornością chemiczną i mechaniczną,
                co gwarantuje bezpieczne przechowywanie nawozów przez długi
                czas. Oferujemy różne rozmiary i pojemności, aby spełnić
                wymagania każdego gospodarstwa rolnego.
              </p>
            </div>
          </Link>
          <Link
            onClick={scrollToTop}
            className={s.boxik}
            to="/zbiorniki/deszczowka"
          >
            <div>
              <h2 className={s.title}>Zbiorniki na deszczówkę</h2>

              <p className={s.description}>
                W naszej ofercie znajdziesz wysokiej jakości zbiorniki na
                deszczówkę, które pozwolą Ci efektywnie zbierać i przechowywać
                wodę opadową. Zbiorniki te są ekologiczne i ekonomiczne, a ich
                zastosowanie pozwala na znaczne oszczędności w zużyciu wody
                pitnej. Nasze produkty są trwałe, łatwe w instalacji i dostępne
                w różnych pojemnościach.
              </p>
            </div>
          </Link>
          <Link onClick={scrollToTop} className={s.boxik} to="/zbiorniki/woda">
            <div>
              <h2 className={s.title}>Zbiorniki na wodę</h2>

              <p className={s.description}>
                Oferujemy szeroki wybór zbiorników na wodę, które doskonale
                sprawdzą się zarówno w domach, jak i w obiektach przemysłowych.
                Nasze zbiorniki są wykonane z najwyższej jakości materiałów,
                zapewniających ich długowieczność i odporność na uszkodzenia.
                Dzięki naszym zbiornikom możesz bezpiecznie magazynować wodę
                pitną, techniczną oraz deszczową.
              </p>
            </div>
          </Link>
          <Link
            onClick={scrollToTop}
            className={s.boxik}
            to="/zbiorniki/paliwo"
          >
            <div>
              <h2 className={s.title}>Zbiorniki na paliwo</h2>

              <p className={s.description}>
                Nasze zbiorniki na paliwo to solidne i bezpieczne rozwiązania do
                przechowywania różnych rodzajów paliw, takich jak olej napędowy,
                benzyna i inne. Zbiorniki są wykonane z materiałów odpornych na
                działanie paliw oraz korozję, co zapewnia ich długotrwałe
                użytkowanie. Oferujemy zbiorniki w różnych pojemnościach, które
                można dostosować do indywidualnych potrzeb klientów. Nasze
                zbiorniki na paliwo są zgodne z najwyższymi standardami
                bezpieczeństwa i jakości.
              </p>
            </div>
          </Link>
        </div>

        <p>Poniżej przykładowe zdjęcia zbiorników wraz z podaną pojemnością</p>
        <h3>Możliwość załadunku i transportu każdego zbiornika</h3>
        <p>Interesuje Cię inny zbiornik? Zadzwoń, z chęcią pomożemy!</p>
      </div>
      <div className={s.positionphoto}>
        <div className={s.gallery}>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 100.000 L"
              className={s.photo}
              src={zlota}
            />
            <p className={s.descphoto}>Zbiornik stalowy 100.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik aluminiowy 125.000 L"
              className={s.photo}
              src={silos}
            />
            <p className={s.descphoto}>Zbiornik aluminiowy 125.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik aluminiowy 125.000 L"
              className={s.photo}
              src={silos1}
            />
            <p className={s.descphoto}>Zbiornik aluminiowy 125.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy dwupłaszczowy 13.000L"
              className={s.photo}
              src={dys}
            />
            <p className={s.descphoto}>
              Zbiornik stalowy dwupłaszczowy 13.000L
            </p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik dwupłaszczowy 100.000 L"
              className={s.photo}
              src={nineteen}
            />
            <p className={s.descphoto}>Zbiornik dwupłaszczowy 100.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 50.000 L"
              className={s.photo}
              src={two}
            />
            <p className={s.descphoto}>Zbiornik stalowy 50.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 100.000 L"
              className={s.photo}
              src={one}
            />
            <p className={s.descphoto}>Zbiornik stalowy 100.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy dwupłaszczowy 40.000 L"
              className={s.photo}
              src={three}
            />
            <p className={s.descphoto}>
              Zbiornik stalowy dwupłaszczowy 40.000 L
            </p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy dwupłaszczowy 60.000L"
              className={s.photo}
              src={four}
            />
            <p className={s.descphoto}>
              Zbiornik stalowy dwupłaszczowy 60.000L
            </p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 50.000 L"
              className={s.photo}
              src={aaa}
            />
            <p className={s.descphoto}>Zbiornik stalowy 50.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 50.000 L"
              className={s.photo}
              src={five}
            />
            <p className={s.descphoto}>Zbiornik stalowy 50.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 50.000 L"
              className={s.photo}
              src={six}
            />
            <p className={s.descphoto}>Zbiornik stalowy 50.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 50.000 L"
              className={s.photo}
              src={seven}
            />
            <p className={s.descphoto}>Zbiornik stalowy 50.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 3.000L"
              className={s.photo}
              src={eight}
            />
            <p className={s.descphoto}>Zbiornik stalowy 3.000L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy dwupłaszczowy 40.000 L"
              className={s.photo}
              src={nine}
            />
            <p className={s.descphoto}>
              Zbiornik stalowy dwupłaszczowy 40.000 L
            </p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 5.000 L"
              className={s.photo}
              src={eleven}
            />
            <p className={s.descphoto}>Zbiornik stalowy 5.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 10.000L"
              className={s.photo}
              src={twelve}
            />
            <p className={s.descphoto}>Zbiornik stalowy 10.000L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 20.000L"
              className={s.photo}
              src={fifteen}
            />
            <p className={s.descphoto}>Zbiornik stalowy 20.000L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 50.000 L"
              className={s.photo}
              src={sixteen}
            />
            <p className={s.descphoto}>Zbiornik stalowy 50.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 50.000 L"
              className={s.photo}
              src={seventeen}
            />
            <p className={s.descphoto}>Zbiornik stalowy 50.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 50.000 L"
              className={s.photo}
              src={eighteen}
            />
            <p className={s.descphoto}>Zbiornik stalowy 50.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 50.000 L"
              className={s.photo}
              src={twenty}
            />
            <p className={s.descphoto}>Zbiornik stalowy 50.000 L</p>
          </div>
          <div className={s.box}>
            <img
              alt="Zbiornik stalowy 50.000 L"
              className={s.photo}
              src={twentythree}
            />
            <p className={s.descphoto}>Zbiornik stalowy 50.000 L</p>
          </div>
        </div>
      </div>
    </div>
  );
};
