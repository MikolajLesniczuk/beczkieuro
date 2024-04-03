import s from "./onas.module.scss";
export const Onas = () => {
  return (
    <div>
      <div>
        <p className={s.desc}>
          Alpimix to warszawska firma zajmująca się pracami na wysokości.
          Wykorzystujemy do tego techniki dostępu linowego, drabiny, podnośniki
          oraz rusztowania. Nasza kadra to wykwalifikowani pracownicy oraz
          certyfikowani technicy dostępu linowego, którzy posiadają wszelkie
          niezbędne uprawnienia oraz szkolenia związane z wykonywanym zawodem.
          Wszystkie zlecenia realizujemy z wykorzystaniem profesjonalnego i
          nowoczesnego sprzętu, co umożliwia bezpieczną oraz efektywną pracę.
          Gwarantujemy najwyższą jakość oraz terminowość w realizacji usług.
        </p>

        <h3>Jak działamy?</h3>
        <div className={s.flex}>
          <div className={s.box}>
            <p className={s.cyfra}>1.</p>
            <h3>Omówienie zakresu prac</h3>
            <p>
              Do każdego zlecenie podchodzimy indywidualnie, dlatego tak istotny
              jest kontakt z nami.
            </p>
          </div>
          <div className={s.box}>
            <p className={s.cyfra}>2.</p>
            <h3>Wycena</h3>
            <p>
              Każde zlecenie to nowe wyzwanie, które wymaga indywidualnego
              podejścia oraz sprzętu.
            </p>
          </div>
          <div className={s.box}>
            <p className={s.cyfra}>3.</p>
            <h3>Wykonanie zleconych prac</h3>
            <p>
              Zadowolenie klienta jest dla nas najważniejsze, dlatego do
              wykonania każdego zlecenia podchodzimy z maksymalnym
              zaangażowaniem.
            </p>
          </div>
          <div className={s.box}>
            <p className={s.cyfra}>4.</p>
            <h3>Finalizacja zlecenia</h3>
            <p>
              Wyróżnia to brak ukrytych kosztów, pojawiających się często
              podczas zakończenia pracy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
