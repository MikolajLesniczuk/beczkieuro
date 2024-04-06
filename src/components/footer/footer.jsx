import s from "./footer.module.scss";
// import logo from "../../assets/alpfoto/logo.png";
// import twitter from "../../assets/images/svg/icon-twitter.svg";
// import facebook from "../../assets/images/svg/icon-facebook.svg";
import tel from "../../assets/alpfoto/pngegg.png";
import email from "../../assets/alpfoto/mail.png";
import { useState } from "react";
import { ModalZap } from "../modal/modal";

export const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={s.bg}>
        <div className={s.width}>
          <div className={s.title}>Zapraszamy do kontaktu</div>
          <div className={s.phrase}>
            Usługi alpinistyczne to nasza praca ale również pasja.
          </div>
          <div className={s.phrase2}>Bądźmy w kontakcie</div>
          <div className={s.flexik}>
            {/* <div className={s.flexkolumn}>
              <img className={s.adres} src={adres} alt="adres"></img>
              <a
                className={s.adres}
                href="https://maps.app.goo.gl/FwUAU8nGzqruFS3E9"
                target="_blank"
              >
                Okocimska 3
              </a>
            </div> */}

            <div className={s.flexkolumn}>
              {" "}
              <a className={s.style} href="mailto:alpimix.kontakt@gmail.com">
                <img className={s.email} alt="email" src={email}></img>
                alpimix.kontakt@gmail.com
              </a>
            </div>

            <div className={s.flexkolumn}>
              {" "}
              <a className={s.style} href="tel:+48514028592">
                <img className={s.tel} alt="tel" src={tel}></img>
                +48514028592
              </a>
            </div>
          </div>
          <div className={s.pos}>
            {isModalOpen ? (
              // <button onClick={openModal}>Wyślij zapytanie</button>
              <ModalZap closeModal={closeModal} />
            ) : (
              <button
                className={s.posbutton}
                // onClick={openModal}
              >
                Wyślij zapytanie
              </button>

              // <button onClick={closeModal}>legancko</button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
