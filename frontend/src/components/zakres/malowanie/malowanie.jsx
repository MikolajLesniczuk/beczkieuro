import s from "./malowanie.module.scss";
import { Zakres } from "../../features/features";

export const Malowanie = () => {
  return (
    <div>
      <div className={s.bg}>
        <div className={s.container}>
          <h1 className={s.title}>Malowanie elewacji</h1>
          <div className={s.desc}>
            Malowanie elewacji pozwala skutecznie chronić fasady budynków przed
            zniszczeniem. Niezbędne jest jednak dobranie odpowiednich materiałów
            do danego podłoża oraz fachowe i rzetelne wykonanie prac.
            Zastosowanie profesjonalnych materiałów takich jak grunt, farba
            skutecznie zabezpiecza elewację oraz wydłuża jej żywotność.
            Materiały których używamy charakteryzują się dużą trwałością oraz
            wysoką odpornością na szkodliwe działanie czynników zewnętrznych,
            jak kurz, brud, woda oraz zanieczyszczenia biologiczne. Przed każdym
            malowaniem nasi pracownicy usuwają ze ścian kurz, brud i inne
            nieczystości dzięki zastosowaniu mycia wysokociśnieniowego. W
            niektórych przypadkach niezbędne jest wcześniejsze użycie chemii,
            aby usunąć glon i inne zanieczyszczenia ze ściany . Oferujemy
            również impregnację elewacji, aby nadać jej dodatkową powłokę
            ochronną, oraz zapobieganiu ponownego pojawienia się wykwitów.
            Oferujemy również wykonanie powłoki anty-graffiti.
          </div>
        </div>
      </div>

      <Zakres />
    </div>
  );
};
