import s from "./banery.module.scss";

import { Zakres } from "../../features/features";

export const Banery = () => {
  return (
    <div>
      <div className={s.bg}>
        <div className={s.container}>
          <h2 className={s.title}>Montaż banerów</h2>
          <p className={s.desc}>
            Zapraszamy do skorzystania z naszych usług montażu banerów
            reklamowych, które są niezwykle skutecznym sposobem na promocję
            różnych produktów, usług, wydarzeń czy marek. Banery reklamowe są
            wszechstronnym narzędziem marketingowym, które mogą być wykorzystane
            przez różne branże i firmy do zwiększenia widoczności i dotarcia do
            potencjalnych klientów. Nasz doświadczony zespół specjalistów
            zapewni profesjonalny montaż banerów na różnych powierzchniach,
            dostosowany do Twoich potrzeb i wymagań. Niezależnie od tego, czy
            potrzebujesz banera reklamowego na wydarzenie kulturalne, koncert,
            otwarcie nowego sklepu czy kampanię promocyjną, jesteśmy gotowi
            pomóc w realizacji Twoich celów marketingowych. Daj swojej reklamie
            szansę na skuteczne dotarcie do szerokiego grona odbiorców dzięki
            naszym usługom montażu banerów reklamowych. Skontaktuj się z nami
            już dziś, aby dowiedzieć się więcej o naszych możliwościach i
            znaleźć najlepsze rozwiązanie dla Twojej reklamy.
          </p>
        </div>
      </div>

      <Zakres />
    </div>
  );
};
