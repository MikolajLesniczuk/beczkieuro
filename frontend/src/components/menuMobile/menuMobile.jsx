import s from "./menuMobile.module.scss";

import logo2 from "../../assets/beczki/7logo.jpg";

import close from "../../assets/images/svg/icon-close.svg";
import { Link, NavLink } from "react-router-dom";
import { ModalZap } from "../modal/modal";
import { useState } from "react";

export const MobileMenu = ({ closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className={s.bg}>
        <div className={s.firstlane}>
          <Link onClick={closeModal} to="/">
            <img className={s.logo} src={logo2} alt="logo"></img>
          </Link>

          <img
            className={s.close}
            src={close}
            alt="closebutton"
            onClick={closeModal}
          ></img>
        </div>
        <div>
          <NavLink onClick={closeModal} className={s.features} to="/onas">
            O nas
          </NavLink>

          <NavLink onClick={closeModal} className={s.pricing} to="/transport">
            Transport
          </NavLink>
          <NavLink onClick={closeModal} className={s.contact} to="/oferta">
            Oferta
          </NavLink>
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
    </>
  );
};
