import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import s from "./app.module.scss";
import { Footer } from "./components/footer/footer";
import { Mainpage } from "./components/mainpage/mainpage";
import { Onas } from "./components/onas/onas";
import { Realizacje } from "./components/realizacje/realizacje";
import { Navigation } from "./components/navigation/navigation";
import { Kontakt } from "./components/kontakt/kontakt";
import { Transport } from "./components/transport/transport";

export const App = () => {
  const location = useLocation();

  // Funkcja do zapisywania odwiedzonych ścieżek w localStorage
  const saveVisitedRoutes = (route) => {
    const visitedRoutes =
      JSON.parse(localStorage.getItem("visitedRoutes")) || [];
    if (!visitedRoutes.includes(route)) {
      visitedRoutes.push(route);
      localStorage.setItem("visitedRoutes", JSON.stringify(visitedRoutes));
    }
  };

  // Wywołanie funkcji zapisującej odwiedzoną ścieżkę przy zmianie lokalizacji
  useEffect(() => {
    saveVisitedRoutes(location.pathname);
  }, [location]);

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
