import s from "./renowacja.module.scss";
import { Zakres } from "../../features/features";

export const Renowacja = () => {
  return (
    <div>
      <div className={s.bg}>
        <div className={s.container}>
          <h2 className={s.title}>Renowacja elewacji</h2>
          <p className={s.desc}>
            Renowacja elewacji to niezbędne działanie, które należy wykonywać,
            aby zapobiegać dalszemu niszczeniu elewacji, oraz naprawie
            zniszczonych fragmentów elewacji. Zazwyczaj niezbędne jest zerwanie
            starej-odparzonej części fasady i wykonanie nowej warstwy tynku na
            danym fragmencie , bądź zerwanie całości elewacji i wykonanie jej od
            podstaw . Na elewacjach mogą również pojawić się rysy i pęknięcia,
            które należy uzupełnić i zabezpieczyć ponieważ mogą prowadzić do
            rozszczelnienia ociepleń i przedostawaniu się wody do mieszkań.
            Usuwamy również pojawiające się na elewacjach pleśnie, mchy,glony i
            porosty. Zajmujemy się również uszczelnianiem okien, obróbek
            blacharskich, parapetów, rur spustowych itp.{" "}
          </p>
        </div>
      </div>

      <Zakres />
    </div>
  );
};
