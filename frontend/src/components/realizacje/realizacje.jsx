import s from "./realizacje.module.scss";
import one from "../../assets/beczki/1.jpg";
import two from "../../assets/beczki/2.jpg";
import three from "../../assets/beczki/3.jpg";
import four from "../../assets/beczki/4.jpg";
import five from "../../assets/beczki/5.jpg";
import six from "../../assets/beczki/6.jpg";
import seven from "../../assets/beczki/7.jpg";
import eight from "../../assets/beczki/8.jpg";
import nine from "../../assets/beczki/1.jpg";
import eleven from "../../assets/beczki/2.jpg";
import twelve from "../../assets/beczki/3.jpg";
import fifteen from "../../assets/beczki/4.jpg";
import sixteen from "../../assets/beczki/5.jpg";
import seventeen from "../../assets/beczki/6.jpg";
import eighteen from "../../assets/beczki/7.jpg";
import nineteen from "../../assets/beczki/8.jpg";
import twenty from "../../assets/beczki/1.jpg";
import twentythree from "../../assets/beczki/2.jpg";

export const Realizacje = () => {
  return (
    <div>
      <div className={s.opis}>
        Nasz asortyment składa się z beczek o różnych pojemnościach. Posiadamy w
        spzedaży beczki od 500L do 100.000 L
      </div>
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
