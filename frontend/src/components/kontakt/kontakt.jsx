import s from "./kontakt.module.scss";
import tel from "../../assets/alpfoto/pngegg.png";
import email from "../../assets/alpfoto/mail.png";
export const Kontakt = () => {
  return (
    <div>
      <div className={s.title}>Skontaktuj się z nami</div>
      <div>
        <div className={s.flex}>
          <a className={s.link} href="mailto:nyga.transport@interia.pl">
            {" "}
            <img alt="emsil" className={s.email} src={email}></img>
            nyga.transport@interia.pl
          </a>
        </div>

        <div className={s.flex}>
          <a className={s.link} href="tel:+48605724140">
            {" "}
            <img alt="tel" className={s.tel} src={tel}></img>
            +48605724140
          </a>
        </div>

        <div className={s.bordermapy}>
          <iframe
            title="mapa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.8125688581104!2d20.8341757!3d51.0380824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47183b8bed933d1b%3A0x56dce5b6a2978f20!2sZbiorniki%20Stalowe!5e0!3m2!1spl!2spl!4v1714813551212!5m2!1spl!2spl"
            className={s.mapa}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
