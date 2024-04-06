import { Zakres } from "../../features/features";
import s from "./montaz.module.scss";
export const Montaz = () => {
  return (
    <div>
      <div className={s.bg}>
        <div className={s.container}>
          <div className={s.title}>
            Oferujemy wszelkiego rodzaju prace montażowe – czyli wszystko co
            związane z montażem i demontażem!{" "}
          </div>
          <div className={s.title}>Zajmujemy się:</div>
          <ul className={s.desc}>
            <li>Montażem stanowisk alpinistycznych oraz linii życia</li>
            <li>Montażem kratek wentylacyjnych</li>
            <li>Montażem balustrad balkonowych oraz szyb </li>
            <li>Montażem konstrukcji stalowych </li>
            <li>Montażem i demontażem pionów wentylacyjnych </li>
            <li>Montażem tras kablowych </li>
            <li>Montażem rolet i żaluzji zewnętrznych </li>
            <li>Montażem ozdób świątecznych </li>
            <li>Pracami w kanałach i szybach wentylacyjnych </li>
          </ul>
        </div>
      </div>

      <Zakres />
    </div>
  );
};
