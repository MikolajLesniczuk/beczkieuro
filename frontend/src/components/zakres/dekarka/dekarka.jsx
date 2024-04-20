import s from "./dekarka.module.scss";
import { Zakres } from "../../features/features";

export const Dekarka = () => {
  return (
    <div>
      <div className={s.bg}>
        <div className={s.container}>
          <h2 className={s.title}>Prace dekarskie</h2>

          <p className={s.desc}>
            Nasza oferta obejmuje kompleksowe usługi związane z konstrukcją i
            konserwacją dachów oraz systemów odprowadzania wody. W ramach
            naszych usług zajmujemy się uszczelnieniami, montażem, a także
            wymianą i naprawą rur spustowych, rynien oraz obróbek blacharskich.
            W naszej pracy stosujemy różnorodne materiały i technologie, aby
            zapewnić naszym klientom trwałość i niezawodność. Przy montażu
            obróbek blacharskich, rynien oraz rur spustowych korzystamy z
            szerokiego wyboru wysokiej jakości materiałów, zapewniając
            kompleksową ochronę i estetyczny wygląd.
          </p>
        </div>
      </div>

      <Zakres />
    </div>
  );
};
