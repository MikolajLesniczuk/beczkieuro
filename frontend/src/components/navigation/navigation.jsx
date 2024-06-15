import React, { useState } from "react";
import s from "./navigation.module.scss";
import hamburger from "../../assets/images/svg/icon-hamburger.svg";
import logo from "../../assets/beczki/7logo.png";
import logomob from "../../assets/beczki/7logomob.png";

import { MobileMenu } from "../menuMobile/menuMobile";
import { Link, NavLink } from "react-router-dom";
import { ModalZap } from "../modal/modal";

export const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 550,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isModalOpen ? (
        <div>
          <div>
            <MobileMenu closeModal={closeModal} />
          </div>
        </div>
      ) : (
        <div className={s.display}>
          <Link to="/">
            <div>
              <img className={s.logo} src={logomob} alt="logo" />
            </div>
          </Link>

          <button className={s.btnham} onClick={openModal}>
            <img src={hamburger} alt="Burger" />
          </button>
        </div>
      )}

      <div className={s.bgim}>
        <div className={s.navdesktop}>
          <Link className={s.lynk} to="/">
            <div>
              <img className={s.logo} src={logo} alt="logo" />
            </div>
          </Link>

          <div className={s.boxnav}>
            <NavLink onClick={scrollToTop} className={s.features} to="/onas">
              O nas
            </NavLink>
            <NavLink onClick={scrollToTop} className={s.pricing} to="/oferta">
              Oferta
            </NavLink>
            <div className={s.dropdown}>
              <Link
                to="/zbiorniki/ppoz"
                onClick={scrollToTop}
                className={s.zbiorniki}
              >
                Zbiorniki
              </Link>
              <div className={s.dropdownContent}>
                <Link onClick={scrollToTop} to="/zbiorniki/ppoz">
                  Zbiorniki p.poż
                </Link>
                <Link onClick={scrollToTop} to="/zbiorniki/deszczowka">
                  Zbiorniki na deszczówkę
                </Link>
                <Link onClick={scrollToTop} to="/zbiorniki/szambo">
                  Zbiorniki na szambo
                </Link>
                <Link onClick={scrollToTop} to="/zbiorniki/rsm">
                  Zbiorniki na RSM
                </Link>
                <Link onClick={scrollToTop} to="/zbiorniki/paliwo">
                  Zbiorniki na paliwo
                </Link>
              </div>
            </div>

            <NavLink onClick={scrollToTop} className={s.oferta} to="/transport">
              Transport
            </NavLink>
            <NavLink onClick={scrollToTop} className={s.contact} to="/kontakt">
              Kontakt
            </NavLink>

            <div>
              {isModalOpen ? (
                <ModalZap closeModal={closeModal} />
              ) : (
                <button onClick={openModal} className={s.btn}>
                  Wyślij zapytanie
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
