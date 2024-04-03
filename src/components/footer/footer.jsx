import s from "./footer.module.scss";
// import logo from "../../assets/alpfoto/logo.png";
// import twitter from "../../assets/images/svg/icon-twitter.svg";
// import facebook from "../../assets/images/svg/icon-facebook.svg";

export const Footer = () => {
  return (
    <>
      {/* <div className={s.bg}>
        <div className={s.width}>
          <div className={s.content}>
            <a href="#main">
              <img className={s.logo} src={logo} alt="logo"></img>
            </a>
            <a className={s.link} href="#features">
              Features
            </a>
            <a className={s.link} href="#download">
              Pricing
            </a>
            <a className={s.link} href="#contact">
              Contact
            </a>
          </div>

          <div>
            <p className={s.odwiedz}>Odwiedz nas</p>
            <div className={s.positionsocial}>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={s.icon} src={facebook} alt="logofacebook" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className={s.icon} src={twitter} alt="logotwitter" />
              </a>
            </div>
          </div>
        </div>
      </div> */}

      <div className={s.bg}>
        <div className={s.width}>
          <div>Zapraszamy do kontaktu.</div>
          <div>Usługi alpinistyczne to nasz praca ale również pasja.</div>
          <div>Bądźmy w kontakcie</div>
          <div className={s.flexik}>
            <div className={s.flexkolumn}>
              <p>Adres</p>
              <p>Okocimska 3</p>
            </div>
            <div className={s.flexkolumn}>
              {" "}
              <p>Telefon</p>
              <p>514028592</p>
            </div>
            <div className={s.flexkolumn}>
              {" "}
              <p>E-mail</p>
              <p>alpimix.kontakt@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
