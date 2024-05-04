import s from "./transport.module.scss";

export const Transport = () => {
  return (
    <div>
      <h2 className={s.title}>Transport</h2>
      <p className={s.desc}>
        Nasza firma oferuje kompleksowe rozwiązania transportowe, aby zapewnić
        Ci wygodną i bezpieczną dostawę zbiorników stalowych. Dzięki naszemu
        doświadczeniu i profesjonalnemu podejściu możesz mieć pewność, że Twoje
        zamówienie zostanie dostarczone terminowo i bezpiecznie.
      </p>
      <div className={s.box}>
        <ul className={s.flex}>
          <li className={s.li}>
            <h3 className={s.tyt}>
              Dostawa <br />
              krajowa
            </h3>
            <p className={s.opis}>
              Realizujemy dostawy na terenie całej Polski. Nasz zespół
              logistyczny skrupulatnie planuje trasę, aby zapewnić Ci szybką i
              sprawną dostawę, niezależnie od lokalizacji.
            </p>
          </li>
          <li className={s.li}>
            <h3 className={s.tyt}>Transport międzynarodowy</h3>
            <p className={s.opis}>
              Ponadto, oferujemy usługi transportu międzynarodowego. Posiadamy
              własną flotę pojazdów, co pozwala nam dostarczać zbiorniki stalowe
              także za granicę, z zachowaniem najwyższych standardów
              bezpieczeństwa i terminowości.
            </p>
          </li>
          <li className={s.li}>
            <h3 className={s.tyt}>Zaufany partner w transporcie</h3>
            <p className={s.opis}>
              Nasz priorytet to zadowolenie klienta. Dlatego też, dbamy o każdy
              szczegół podczas procesu transportu. Bez względu na to, czy
              potrzebujesz dostawy na plac budowy, do magazynu czy na teren
              zakładu, możesz polegać na naszym profesjonalizmie i
              zaangażowaniu.
            </p>
          </li>
        </ul>
      </div>

      <p className={s.end}>
        Skontaktuj się z nami już dziś, aby dowiedzieć się więcej o naszych
        usługach transportowych i zorganizować dostawę zbiorników stalowych do
        Twojej lokalizacji.
      </p>
    </div>
  );
};
