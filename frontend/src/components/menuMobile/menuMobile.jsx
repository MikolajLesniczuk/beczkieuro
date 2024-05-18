import React, { useState } from "react";
import s from "./menuMobile.module.scss";
import logo2 from "../../assets/beczki/7logo.jpg";
import close from "../../assets/images/svg/icon-close.svg";
import { Link, NavLink } from "react-router-dom";
import { ModalZap } from "../modal/modal";

export const MobileMenu = ({ closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={s.bg}>
      <div className={s.firstlane}>
        <Link onClick={closeModal} to="/">
          <img className={s.logo} src={logo2} alt="logo" />
        </Link>

        <img
          className={s.close}
          src={close}
          alt="closebutton"
          onClick={closeModal}
        />
      </div>
      <div>
        <NavLink onClick={closeModal} className={s.features} to="/onas">
          O nas
        </NavLink>

        <NavLink onClick={closeModal} className={s.pricing} to="/transport">
          Transport
        </NavLink>

        <NavLink onClick={closeModal} className={s.pricing} to="/oferta">
          Oferta
        </NavLink>

        <div className={`${s.dropdown} ${isDropdownOpen ? s.active : ""}`}>
          <button onClick={toggleDropdown} className={s.dropdownBtn}>
            Zbiorniki
          </button>
          <div className={s.dropdownContent}>
            <Link onClick={closeModal} to="/zbiorniki/ppoz">
              Zbiorniki ppoż
            </Link>
            <Link onClick={closeModal} to="/zbiorniki/deszczowka">
              Zbiorniki na deszczówkę
            </Link>
            <Link onClick={closeModal} to="/zbiorniki/szambo">
              Zbiorniki na szambo
            </Link>
            <Link onClick={closeModal} to="/zbiorniki/rsm">
              Zbiorniki RSM
            </Link>
            <Link onClick={closeModal} to="/zbiorniki/paliwo">
              Zbiorniki na paliwo
            </Link>
          </div>
        </div>

        <NavLink onClick={closeModal} className={s.contact} to="/kontakt">
          Kontakt
        </NavLink>
        <div>
          {isModalOpen ? (
            <ModalZap closeModal={closeModal} />
          ) : (
            <button onClick={openModal} className={s.login}>
              Wyślij zapytanie
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
