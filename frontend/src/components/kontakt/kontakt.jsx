import s from "./kontakt.module.scss";
import tel from "../../assets/alpfoto/pngegg.png";
import email from "../../assets/alpfoto/mail.png";
export const Kontakt = () => {
  return (
    <div>
      <div className={s.title}>Skontaktuj się z nami</div>
      <div>
        <div className={s.flex}>
          <a className={s.link} href="mailto:alpimix.kontakt@gmail.com">
            {" "}
            <img alt="emsil" className={s.email} src={email}></img>
            alpimix.kontakt@gmail.com
          </a>
        </div>

        <div className={s.flex}>
          <a className={s.link} href="tel:+48514028592">
            {" "}
            <img alt="tel" className={s.tel} src={tel}></img>
            +48514028592
          </a>
        </div>

        <div className={s.bordermapy}>
          <iframe
            title="mapa"
            className={s.mapa}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.3017621271824!2d20.939251376146917!3d52.237902357077665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb7e2a85ff93%3A0x4cc63651bd3ddd00!2sAlpimix%20-%20Us%C5%82ugi%20alpinistyczne!5e0!3m2!1spl!2spl!4v1713609647451!5m2!1spl!2spl"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
