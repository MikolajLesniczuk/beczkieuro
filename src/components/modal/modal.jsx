import s from "./modal.module.scss";

export const ModalZap = ({ closeModal }) => {
  return (
    <div className={s.bg}>
      <div className={s.bgmodal}>
        <p className={s.close} onClick={closeModal}>
          X
        </p>
        <form>
          <div className={s.flex}>
            <label className={s.title}>email</label>
            <input type="email" placeholder="Twój email"></input>
          </div>
          <div className={s.flex}>
            <label className={s.title}>telefon</label>
            <input type="tel" placeholder="telefon"></input>
          </div>
          <div className={s.flex}>
            <label className={s.title}> treść zapytania</label>
            <input
              className={s.text}
              type="text"
              placeholder="treść zapytania"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
};
