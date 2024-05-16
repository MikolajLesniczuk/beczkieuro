import React, { useState } from "react";
import s from "./navigation.module.scss";
import hamburger from "../../assets/images/svg/icon-hamburger.svg";
import logo from "../../assets/beczki/7logo.jpg";

import { MobileMenu } from "../menuMobile/menuMobile";
import { Link, NavLink } from "react-router-dom"; // Zmiana na Link
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
              <img className={s.logo} src={logo} alt="logo"></img>
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
              <img className={s.logo} src={logo} alt="logo"></img>
            </div>
          </Link>

          <div className={s.boxnav}>
            <NavLink onClick={scrollToTop} className={s.features} to="/onas">
              {" "}
              O nas
            </NavLink>
            <NavLink onClick={scrollToTop} className={s.pricing} to="/oferta">
              {" "}
              Oferta
            </NavLink>
            <NavLink onClick={scrollToTop} className={s.oferta} to="/transport">
              {" "}
              Transport
            </NavLink>
            <NavLink onClick={scrollToTop} className={s.contact} to="/kontakt">
              {" "}
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
