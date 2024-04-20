import s from "./odsniezanie.module.scss";
import { Zakres } from "../../features/features";

export const Odsniezanie = () => {
  return (
    <div>
      <div className={s.bg}>
        <div className={s.container}>
          {" "}
          <h2 className={s.title}>Odśnieżanie dachów</h2>
          <p className={s.desc}>
            Zimowe opady śniegu mogą stanowić poważne zagrożenie dla
            bezpieczeństwa i wytrzymałości dachu. Dlatego też oferujemy
            profesjonalne usługi odsnieżania dachów, które zapewniają nie tylko
            bezpieczeństwo, ale także długotrwałą ochronę Twojego budynku. Nasz
            doświadczony zespół specjalistów jest wyposażony w odpowiedni sprzęt
            i narzędzia, aby skutecznie i bezpiecznie usunąć nagromadzony śnieg
            z dachu. Przeprowadzamy odsnieżanie z uwzględnieniem wszelkich
            środków ostrożności, aby zapobiec uszkodzeniom dachu i jego
            konstrukcji. Bezpieczeństwo naszych klientów jest dla nas najwyższym
            priorytetem, dlatego też podejmujemy wszystkie niezbędne środki
            ostrożności podczas odsnieżania dachów. Możesz być pewien, że Twój
            dach zostanie profesjonalnie i skutecznie oczyszczony z
            nagromadzonego śniegu, zapewniając Ci spokój i bezpieczeństwo
            podczas zimowych miesięcy. Skorzystaj z naszych usług odsnieżania
            dachów i zadbasz o trwałość oraz bezpieczeństwo swojego budynku.
          </p>
        </div>
      </div>

      <Zakres />
    </div>
  );
};
