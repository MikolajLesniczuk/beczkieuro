import React, { useState } from "react";
import s from "./modal.module.scss";

export const ModalZap = ({ closeModal }) => {
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [trescZapytania, setTrescZapytania] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      email,
      telefon,
      trescZapytania,
    };

    try {
      const response = await fetch("https://alpimix.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("E-mail wysłaaaaany!");
      } else {
        console.error("Wystąpił problem podczas wysyłania e-maila.");
      }
    } catch (error) {
      console.error("Wystąpił problem z połączeniem z serwerem.", error);
    }
  };

  return (
    <div className={s.bg}>
      <div className={s.bgmodal}>
        <p className={s.close} onClick={closeModal}>
          X
        </p>
        <form onSubmit={handleFormSubmit}>
          <div className={s.flex}>
            <label className={s.title}>Twój Email</label>
            <input
              type="email"
              placeholder="Twój email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={s.flex}>
            <label className={s.title}>Telefon</label>
            <input
              type="tel"
              placeholder="Twój telefon"
              value={telefon}
              onChange={(e) => setTelefon(e.target.value)}
            />
          </div>
          <div className={s.flex}>
            <label className={s.title}>Treść zapytania</label>
            <input
              className={s.text}
              type="text"
              placeholder="Treść zapytania"
              value={trescZapytania}
              onChange={(e) => setTrescZapytania(e.target.value)}
            />
            <button type="submit">Wyślij formularz</button>
          </div>
        </form>
      </div>
    </div>
  );
};
