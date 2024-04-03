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
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={s.margin}>
      {" "}
      <div className={s.flex}>
        <Link onClick={scrollToTop} className={s.link} to="/malowanie">
          <div className={s.box}>
            <img className={s.img} alt="x" src={malowanie}></img>
            <h3>MALOWANIE ELEWACJI</h3>
            <p>
              Świeżo wyglądająca elewacja to z pewnością wizytówka każdego
              budynku.
            </p>
          </div>
        </Link>

        <Link onClick={scrollToTop} className={s.link} to="/renowacja">
          <div className={s.box}>
            {" "}
            <img className={s.img} alt="x" src={renowacja}></img>
            <h3>RENOWACJA ELEWACJI</h3>
            <p>
              Renowacja niewątpliwie zmieni prezencję budynku. Podejmiemy się
              naprawy każdej elewacji.
            </p>
          </div>
        </Link>

        <Link onClick={scrollToTop} className={s.link} to="/mycie">
          <div className={s.box}>
            {" "}
            <img className={s.img} alt="x" src={mycie}></img>
            <h3>MYCIE ELEWACJI</h3>
            <p>
              Mycie ciśnieniowe z pewnością pomoże w pozbyciu się wszelkich
              zanieczyszczeń z elewacji.
            </p>
          </div>
        </Link>
        <Link onClick={scrollToTop} className={s.link} to="/montaz">
          <div className={s.box}>
            {" "}
            <img className={s.img} alt="x" src={montaz}></img>
            <h3>PRACE MONTAŻOWE</h3>
            <p>
              Potrzebujesz powiesić ozdoby pod sufitem galerii? Chętnie Cię w
              tym wyręczymy.
            </p>
          </div>
        </Link>
        <Link onClick={scrollToTop} className={s.link} to="/ptaki">
          <div className={s.box}>
            {" "}
            <img className={s.img} alt="x" src={ptak}></img>
            <h3>ZABEZPIECZENIA PRZECIW PTAKOM</h3>
            <p>
              Nie wiesz co zrobić z ptasim gangiem? Nasza ekipa z pewnością
              znajdzie rozwiązanie.
            </p>
          </div>
        </Link>

        <Link onClick={scrollToTop} className={s.link} to="/dekarka">
          <div className={s.box}>
            {" "}
            <img className={s.img} alt="x" src={dekarka}></img>
            <h3>PRACE DEKARSKIE</h3>
            <p>
              Smołowanie dachu czy wymiana całej konstrukcji. Z pewnością
              podejmiemy się każdego wyzwania.
            </p>
          </div>
        </Link>
        <Link onClick={scrollToTop} className={s.link} to="/banery">
          <div className={s.box}>
            {" "}
            <img className={s.img} alt="x" src={banery}></img>
            <h3>BANERY REKLAMOWE WRAZ Z OŚWIETLENIEM</h3>
            <p>Montaż materiałów reklamowych to nasza specjalność.</p>
          </div>
        </Link>
        <Link onClick={scrollToTop} className={s.link} to="/odsniezanie">
          <div className={s.box}>
            {" "}
            <img className={s.img} alt="x" src={snieg}></img>
            <h3>ODŚNIEŻANIE DACHÓW</h3>
            <p>
              Odśnieżamy zarówno domu jednorodzinne, jak i całe kompleksy
              osiedlowe.
            </p>
          </div>
        </Link>
        <Link onClick={scrollToTop} className={s.link} to="/porzadek">
          <div className={s.box}>
            {" "}
            <img className={s.img} alt="x" src={mycie}></img>
            <h3>UTRZYMANIE PORZĄDKU</h3>
            <p>Czystość</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
