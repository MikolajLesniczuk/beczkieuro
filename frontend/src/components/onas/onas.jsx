import s from "./onas.module.scss";

export const Onas = () => {
  return (
    <div className={s.bg}>
      <div className={s.container}>
        <p className={s.desc}>
          EURO-TRUCK-SERVICE to renomowany dostawca używanych zbiorników
          stalowych o różnych pojemnościach. Nasza firma specjalizuje się w
          zapewnianiu niezawodnych rozwiązań do przechowywania różnych
          substancji, takich jak woda, paliwo, chemikalia czy ścieki,
          dostosowanych do indywidualnych potrzeb naszych klientów. Dzięki
          bogatemu doświadczeniu i zaangażowaniu w jakość obsługi, jesteśmy
          Twoim zaufanym partnerem w dziedzinie zbiorników stalowych.
        </p>

        <h3 className={s.jak}>Jak działamy?</h3>
        <div className={s.flex}>
          <div className={s.box}>
            <p className={s.cyfra}>1.</p>
            <h3 className={s.title}>
              Kontakt ze strony klienta i złożenie zamówienia
            </h3>
            <p className={s.opis}>
              Każde zlecenie traktujemy indywidualnie, dlatego ważny jest dla
              nas bezpośredni kontakt z klientem. Jesteśmy tu, aby odpowiedzieć
              na Twoje pytania i pomóc w złożeniu zamówienia. Zapewniamy
              zbiorniki stalowe na szambo, zbiorniki na wodę, zbiorniki na
              paliwo oraz inne rozwiązania dostosowane do Twoich potrzeb.
            </p>
          </div>

          <div className={s.box}>
            <p className={s.cyfra}>2.</p>
            <h3 className={s.title}>Wycena</h3>
            <p className={s.opis}>
              Analizujemy Twoje potrzeby i przedstawiamy różne opcje dopasowane
              do Twoich wymagań. Następnie przesyłamy wycenę, abyś mógł dokonać
              wyboru najbardziej odpowiedniego rozwiązania. Oferujemy zbiorniki
              przeciwpożarowe, zbiorniki na deszczówkę, zbiorniki na paliwo i
              wiele innych.
            </p>
          </div>

          <div className={s.box}>
            <p className={s.cyfra}>3.</p>
            <h3 className={s.title}>Obustronna akceptacja warunków</h3>
            <p className={s.opis}>
              Zależy nam na zadowoleniu klienta, dlatego angażujemy się w
              dialog, aby zrozumieć Twoje potrzeby i oczekiwania. Nasze
              podejście opiera się na partnerskich relacjach i wzajemnym
              zaufaniu, co pozwala nam osiągnąć satysfakcję obu stron. Oferujemy
              zbiorniki na RSM, zbiorniki na paliwo i inne zbiorniki dostosowane
              do Twoich specyficznych potrzeb.
            </p>
          </div>

          <div className={s.box}>
            <p className={s.cyfra}>4.</p>
            <h3 className={s.title}>Finalizacja zlecenia</h3>
            <p className={s.opis}>
              Zapewniamy transport do klienta lub możliwość odbioru osobistego,
              abyś mógł jak najszybciej skorzystać z naszych produktów. Jesteśmy
              Twoim zaufanym dostawcą zbiorników na wodę, szambo, paliwo oraz
              innych substancji, zapewniającym kompleksową obsługę i wsparcie
              techniczne na każdym etapie współpracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
