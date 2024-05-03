import s from "./hero.module.scss";
import dosw from "../../assets/alpfoto/bezp.png";
import prof from "../../assets/alpfoto/prof.png";
import bezp from "../../assets/alpfoto/bezpie.png";
import cert from "../../assets/alpfoto/cert.png";

export const Hero = () => {
  return (
    <>
      <div className={s.bg}>
        <div className={s.container}>
          <div>
            <h2 className={s.dlaczego}>Dlaczego my?</h2>
            <div className={s.desc}>
              <p>
                Witaj w EURO-TRUCK-SERVICE - Twoim partnerze w dostawie wysokiej
                jakości używanych zbiorników stalowych o różnych pojemnościach.
              </p>
              <p>
                Zespół specjalistów z EURO-TRUCK-SERVICE jest zawsze gotowy do
                zapewnienia fachowego doradztwa i wsparcia technicznego na
                każdym etapie procesu zakupu. Naszym celem jest zapewnienie
                pełnej satysfakcji klientów poprzez wysoką jakość produktów i
                profesjonalną obsługę.
              </p>
              <p>
                Jeśli potrzebujesz niezawodnych zbiorników stalowych, skontaktuj
                się z nami już dziś. EURO-TRUCK-SERVICE - Twoje zaufane źródło
                wysokiej jakości rozwiązań do przechowywania substancji.
              </p>
            </div>
          </div>
          <div className={s.boxflex}>
            <div className={s.center}>
              <img className={s.img} src={bezp} alt="doswiadczenie"></img>
              <h2>Ekspertyza techniczna</h2>
              <p className={s.opis}>
                {" "}
                Nasz zespół specjalistów posiada bogate doświadczenie oraz
                szeroką wiedzę techniczną w dziedzinie używanych zbiorników
                stalowych. Posiadamy odpowiednie kwalifikacje i certyfikaty, aby
                zapewnić najwyższą jakość obsługi naszych klientów.
              </p>
            </div>
            <div className={s.center}>
              {" "}
              <img className={s.img} src={prof} alt="doswiadczenie"></img>
              <h2>Gwarancja jakości i bezpieczeństwa</h2>
              <p className={s.opis}>
                Gwarantujemy najwyższą jakość i bezpieczeństwo naszych używanych
                zbiorników stalowych. Każdy zbiornik przechodzi testy jakości, a
                nasze produkty są zgodne z najwyższymi standardami
                bezpieczeństwa, co pozwala naszym klientom spokojnie korzystać z
                naszych rozwiązań.
              </p>
            </div>
            <div className={s.center}>
              {" "}
              <img className={s.img} src={dosw} alt="doswiadczenie"></img>
              <h2>Dostosowane rozwiązania</h2>
              <p className={s.opis}>
                Jesteśmy elastycznym dostawcą, który oferuje używane zbiorniki
                stalowe dostosowane do indywidualnych potrzeb klienta. Nasze
                rozwiązania są projektowane z myślą o różnorodnych
                zastosowaniach, zapewniając optymalne rozwiązanie dla każdego
                projektu.
              </p>
            </div>
            <div className={s.center}>
              {" "}
              <img className={s.img} src={cert} alt="doswiadczenie"></img>
              <h2>Obsługa klienta i wsparcie techniczne</h2>
              <p className={s.opis}>
                Nasza firma stawia na wysoką jakość obsługi klienta i wsparcie
                techniczne. Nasz zespół jest zawsze gotowy do udzielenia
                fachowej pomocy i odpowiedzi na wszelkie pytania dotyczące
                naszych używanych zbiorników stalowych, zapewniając kompleksowe
                wsparcie na każdym etapie współpracy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
