import s from "./app.module.scss";
import { Footer } from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";
import { Mainpage } from "./components/mainpage/mainpage";

import { Onas } from "./components/onas/onas";
import { Realizacje } from "./components/realizacje/realizacje";
import { Navigation } from "./components/navigation/navigation";
import { Kontakt } from "./components/kontakt/kontakt";
import { Transport } from "./components/transport/transport";

export const App = () => {
  return (
    <>
      <Navigation />

      <div className={s.container}>
        <Routes>
          <Route path="*" element={<Mainpage />} />
          <Route path="/" element={<Mainpage />} />

          <Route path="/onas" element={<Onas />} />
          <Route path="/oferta" element={<Realizacje />} />
          <Route path="/transport" element={<Transport />} />

          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
