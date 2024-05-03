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
          <a className={s.link} href="tel:+48514028592">
            {" "}
            <img alt="tel" className={s.tel} src={tel}></img>
            +48605724140
          </a>
        </div>

        <div className={s.bordermapy}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d452.8533063862212!2d20.834937144106565!3d51.038024367082116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1714742748840!5m2!1spl!2spl"
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
