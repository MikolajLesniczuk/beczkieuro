import s from "./app.module.scss";
import { Footer } from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";
import { Mainpage } from "./components/mainpage/mainpage";
import { Malowanie } from "./components/zakres/malowanie/malowanie";
import { Renowacja } from "./components/zakres/renowacja/renowacja";
import { Mycie } from "./components/zakres/mycie/mycie";
import { Montaz } from "./components/zakres/montaz/montaz";
import { Ptaki } from "./components/zakres/ptaki/ptaki";
import { Dekarka } from "./components/zakres/dekarka/dekarka";
import { Banery } from "./components/zakres/banery/banery";
import { Odsniezanie } from "./components/zakres/odsniezanie/odsniezanie";
import { Porzadek } from "./components/zakres/porzadek/porzadek";
import { Onas } from "./components/onas/onas";
import { Realizacje } from "./components/realizacje/realizacje";
import { Oferta } from "./components/oferta/oferta";
import { Navigation } from "./components/navigation/navigation";

export const App = () => {
  return (
    <>
      <div className={s.container}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/malowanie" element={<Malowanie />} />
          <Route path="/renowacja" element={<Renowacja />} />
          <Route path="/mycie" element={<Mycie />} />
          <Route path="/montaz" element={<Montaz />} />
          <Route path="/ptaki" element={<Ptaki />} />
          <Route path="/dekarka" element={<Dekarka />} />
          <Route path="/banery" element={<Banery />} />
          <Route path="/odsniezanie" element={<Odsniezanie />} />
          <Route path="/porzadek" element={<Porzadek />} />
          <Route path="/onas" element={<Onas />} />
          <Route path="/realizacje" element={<Realizacje />} />
          <Route path="/oferta" element={<Oferta />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
