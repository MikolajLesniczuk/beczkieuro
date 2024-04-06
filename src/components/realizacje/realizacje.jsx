import s from "./realizacje.module.scss";
import one from "../../assets/alpfoto/realiza/1.jpg";
import two from "../../assets/alpfoto/realiza/2.jpg";
import three from "../../assets/alpfoto/realiza/3.jpg";
import four from "../../assets/alpfoto/realiza/4.jpg";
import five from "../../assets/alpfoto/realiza/5.jpg";
import six from "../../assets/alpfoto/realiza/6.jpg";
import seven from "../../assets/alpfoto/realiza/7.jpg";
import eight from "../../assets/alpfoto/realiza/8.jpg";
import nine from "../../assets/alpfoto/realiza/9.jpg";
import eleven from "../../assets/alpfoto/realiza/11.jpg";
import twelve from "../../assets/alpfoto/realiza/13.jpg";
import fifteen from "../../assets/alpfoto/realiza/15.jpg";
import sixteen from "../../assets/alpfoto/realiza/16.jpg";
import seventeen from "../../assets/alpfoto/realiza/17.jpg";
import eighteen from "../../assets/alpfoto/realiza/18.jpg";
import nineteen from "../../assets/alpfoto/realiza/19.jpg";
import twenty from "../../assets/alpfoto/realiza/20.jpg";
import twentythree from "../../assets/alpfoto/realiza/23.jpg";

export const Realizacje = () => {
  return (
    <div>
      <div className={s.opis}>Nasze przykładowe zdjęcia z realizacji</div>
      <div className={s.positionphoto}>
        <div className="gallery">
          <img alt="something" className={s.photo} src={nineteen}></img>
          <img alt="something" className={s.photo} src={two}></img>

          <img alt="something" className={s.photo} src={one}></img>
          <img alt="something" className={s.photo} src={three}></img>

          <img alt="something" className={s.photo} src={four}></img>
          <img alt="something" className={s.photo} src={five}></img>
          <img alt="something" className={s.photo} src={six}></img>
          <img alt="something" className={s.photo} src={seven}></img>
          <img alt="something" className={s.photo} src={eight}></img>
          <img alt="something" className={s.photo} src={nine}></img>
          <img alt="something" className={s.photo} src={eleven}></img>
          <img alt="something" className={s.photo} src={twelve}></img>
          <img alt="something" className={s.photo} src={fifteen}></img>
          <img alt="something" className={s.photo} src={sixteen}></img>
          <img alt="something" className={s.photo} src={seventeen}></img>
          <img alt="something" className={s.photo} src={eighteen}></img>
          <img alt="something" className={s.photo} src={twenty}></img>
          <img alt="something" className={s.photo} src={twentythree}></img>
        </div>
      </div>
    </div>
  );
};
