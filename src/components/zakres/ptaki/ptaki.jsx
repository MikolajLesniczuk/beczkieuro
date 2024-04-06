import { Zakres } from "../../features/features";
import s from "./ptaki.module.scss";
export const Ptaki = () => {
  return (
    <div>
      <div className={s.bg}>
        <div className={s.container}>
          <h2 className={s.title}>Ochrona Przeciwko Ptakom</h2>
          <p className={s.desc}>
            W sekcji "Ochrona Przeciwko Ptakom" skupiamy się na zapewnieniu
            bezpieczeństwa i ochrony przed intruzją ptaków na terenie, którym
            się zajmujemy. Ptaki mogą stanowić poważne zagrożenie dla
            bezpieczeństwa i higieny, szczególnie w obszarach, gdzie
            przeprowadzane są prace alpinistyczne. Dlatego też stosujemy
            różnorodne metody ochrony, aby zapewnić spokój i bezpieczeństwo
            naszym klientom oraz pracownikom.
          </p>
          <ul>
            <li className={s.li}>
              <h3>Siatki ochronne </h3>
              <p className={s.desc}>
                Jedną z głównych metod ochrony przeciwko ptakom jest stosowanie
                siatek ochronnych. Siatki te są instalowane w strategicznych
                punktach, aby zapobiec dostępowi ptaków do obszarów, gdzie mogą
                powodować szkody. Siatki ochronne są wykonane z wytrzymałych
                materiałów, które są odporne na warunki atmosferyczne i
                zapewniają długotrwałą ochronę.
              </p>
            </li>
            <li className={s.li}>
              <h3>Kolce Przeciwko Ptakom </h3>
              <p className={s.desc}>
                Kolce to kolejna skuteczna metoda ochrony przed ptakami. Są to
                metalowe lub plastikowe paski z ostrymi szpikulcami, które są
                umieszczane na krawędziach i powierzchniach, gdzie ptaki często
                siadają lub lądują. Kolce te odstraszają ptaki, uniemożliwiając
                im osiedlanie się w niepożądanych miejscach.
              </p>
            </li>
          </ul>
          <h2 className={s.title2}>
            Dlaczego Ważna Jest Ochrona Przeciwko Ptakom?
          </h2>

          <p className={s.desc}>
            Ochrona przeciwko ptakom jest istotna z wielu powodów. Ptaki mogą
            przyczyniać się do uszkodzenia budynków, zanieczyszczać środowisko
            oraz stanowić zagrożenie dla zdrowia publicznego. Stąd też nasza
            firma dba o skuteczną ochronę przed ptakami, wykorzystując
            różnorodne metody i techniki, aby zapewnić naszym klientom spokój i
            bezpieczeństwo na terenie, którym się zajmujemy.
          </p>
        </div>
      </div>

      <Zakres />
    </div>
  );
};
