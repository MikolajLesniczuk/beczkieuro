import React, { useState } from "react";
import s from "./navigation.module.scss";
import hamburger from "../../assets/images/svg/icon-hamburger.svg";
import logo from "../../assets/alpfoto/logo.png";

import { MobileMenu } from "../menuMobile/menuMobile";
import { Link, NavLink } from "react-router-dom";

export const Navigation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
          <img src={logo} alt="Logo" />
          <button className={s.btn} onClick={openModal}>
            <img src={hamburger} alt="Burger" />
          </button>
        </div>
      )}

      <div className={s.navdesktop}>
        <Link to="/">
          <div>
            <img className={s.logo} src={logo} alt="logo"></img>
          </div>
        </Link>

        <div className={s.boxnav}>
          <NavLink className={s.features} to="/onas">
            O nas
          </NavLink>

          <NavLink className={s.pricing} to="/realizacje">
            Realizacje{" "}
          </NavLink>

          <NavLink className={s.oferta} to="/oferta">
            Oferta
          </NavLink>
          <NavLink className={s.contact} to="/kontakt">
            Kontakt
          </NavLink>
          <button className={s.btn}>Wyślij zapytanie</button>
        </div>
      </div>
    </div>
  );
};
