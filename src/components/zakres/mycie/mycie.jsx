import { Zakres } from "../../features/features";
import s from "./mycie.module.scss";
export const Mycie = () => {
  return (
    <div>
      <div className={s.bg}>
        <div className={s.container}>
          <h2 className={s.title}>Mycie elewacji</h2>
          <p className={s.desc}>
            Oferujemy obszerny zakres usług związanych z myciem elewacji
            budynków, i wszelkiego rodzaju obiektów wymagających profesjonalnego
            mycia wysokociśnienowego i czyszczenia. Przed każdym zleceniem
            wykonujemy niezbędne próby mycia, aby dobrać najodpowiedniejszą
            chemię dla danego podłoża i uzyskać jak najlepszy efekt. Jesteśmy w
            stanie oczyścić niemal każdą powierzchnię, nawet w trudno dostępnych
            miejscach. Nasi pracownicy posiadają niezbędne doświadczenie, oraz
            szkolenia dzięki którym są w stanie dobrać odpowiedni środek, co
            pozwala na uzyskanie jak najlepszych efektów. Oferujemy również
            mycie powierzchni szklanych. Zastosowanie technik dostępu linowego
            pozwala nam szybko i precyzyjnie wykonać usługę mycia okien oraz
            wszelkich innych przeszklonych obszarów na wszelkiego rodzaju
            obiektach, przede wszystkim na wieżowcach i biurowcach. Nasi
            pracownicy posiadają bardzo bogate doświadczenie w tego typu
            pracach. Gwarantujemy najwyższą jakość, rzetelność oraz fachowe
            wykonanie prac.
          </p>
        </div>
      </div>

      <Zakres />
    </div>
  );
};
