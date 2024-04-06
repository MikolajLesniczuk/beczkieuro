import React from "react";
import s from "./features.module.scss";
import malowanie from "../../assets/alpfoto/zakres/malowaniee.png";
import renowacja from "../../assets/alpfoto/zakres/renowacja.png";
import mycie from "../../assets/alpfoto/zakres/mycie.png";
import montaz from "../../assets/alpfoto/zakres/montaz.png";
import ptak from "../../assets/alpfoto/zakres/ptaki.png";
import dekarka from "../../assets/alpfoto/zakres/dekarka.png";
import banery from "../../assets/alpfoto/zakres/banery.png";
import snieg from "../../assets/alpfoto/zakres/snieg.png";
import { Link } from "react-router-dom";

export const Zakres = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={s.margin}>
        {" "}
        <h2 className={s.title}> ZAKRES NASZYCH USŁUG </h2>
        <div className={s.flex}>
          <Link onClick={scrollToTop} className={s.link} to="/malowanie">
            <div className={s.box}>
              <img className={s.img} alt="x" src={malowanie}></img>
              <h2>MALOWANIE ELEWACJI</h2>
              <p className={s.opis}>
                Świeżo wyglądająca elewacja to z pewnością wizytówka każdego
                budynku.
              </p>
            </div>
          </Link>

          <Link onClick={scrollToTop} className={s.link} to="/renowacja">
            <div className={s.box}>
              {" "}
              <img className={s.img} alt="x" src={renowacja}></img>
              <h2>RENOWACJA ELEWACJI</h2>
              <p className={s.opis}>
                Renowacja niewątpliwie zmieni prezencję budynku. Podejmiemy się
                naprawy każdej elewacji.
              </p>
            </div>
          </Link>

          <Link onClick={scrollToTop} className={s.link} to="/mycie">
            <div className={s.box}>
              {" "}
              <img className={s.img} alt="x" src={mycie}></img>
              <h2>MYCIE ELEWACJI</h2>
              <p className={s.opis}>
                Mycie ciśnieniowe z pewnością pomoże w pozbyciu się wszelkich
                zanieczyszczeń z elewacji.
              </p>
            </div>
          </Link>
          <Link onClick={scrollToTop} className={s.link} to="/montaz">
            <div className={s.box}>
              {" "}
              <img className={s.img} alt="x" src={montaz}></img>
              <h2>PRACE MONTAŻOWE</h2>
              <p className={s.opis}>
                Potrzebujesz powiesić ozdoby pod sufitem galerii? Chętnie Cię w
                tym wyręczymy.
              </p>
            </div>
          </Link>
          <Link onClick={scrollToTop} className={s.link} to="/ptaki">
            <div className={s.box}>
              {" "}
              <img className={s.img} alt="x" src={ptak}></img>
              <h2>ZABEZPIECZENIA PRZECIW PTAKOM</h2>
              <p className={s.opis}>
                Nie wiesz co zrobić z ptasim gangiem? Nasza ekipa z pewnością
                znajdzie rozwiązanie.
              </p>
            </div>
          </Link>

          <Link onClick={scrollToTop} className={s.link} to="/dekarka">
            <div className={s.box}>
              {" "}
              <img className={s.img} alt="x" src={dekarka}></img>
              <h2>PRACE DEKARSKIE</h2>
              <p className={s.opis}>
                Doszczelnianie dachu, montaż obróbek blacharskich czy wymiana
                całej konstrukcji. Z pewnością podejmiemy się każdego wyzwania.
              </p>
            </div>
          </Link>
          <Link onClick={scrollToTop} className={s.link} to="/banery">
            <div className={s.box}>
              {" "}
              <img className={s.img} alt="x" src={banery}></img>
              <h2>BANERY REKLAMOWE WRAZ Z OŚWIETLENIEM</h2>
              <p className={s.opis}>
                Oferujemy montaż wszelkich materiałów reklamowych
              </p>
            </div>
          </Link>
          <Link onClick={scrollToTop} className={s.link} to="/odsniezanie">
            <div className={s.box}>
              {" "}
              <img className={s.img} alt="x" src={snieg}></img>
              <h2>ODŚNIEŻANIE DACHÓW</h2>
              <p className={s.opis}>
                Odśnieżamy zarówno domy jednorodzinne, jak i całe kompleksy
                osiedlowe.
              </p>
            </div>
          </Link>
          <Link onClick={scrollToTop} className={s.link} to="/porzadek">
            <div className={s.box}>
              {" "}
              <img className={s.img} alt="x" src={mycie}></img>
              <h2>UTRZYMANIE PORZĄDKU</h2>
              <p className={s.opis}>
                Oferujemy kompleksowe usługi utrzymania porządku i pielęgnacji
                terenów, zapewniając czystość biur oraz obszarów zewnętrznych.{" "}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
