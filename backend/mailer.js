require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3050;
const KEY = process.env.KEY;
sgMail.setApiKey(KEY);
app.use(cors());
app.use(bodyParser.json());

app.post("/send-email", async (req, res) => {
  const { email, telefon, trescZapytania } = req.body;

  const message = {
    to: "alpimix.kontakt@gmail.com",
    from: "alpimix.kontakt@gmail.com",
    subject: "Nowe zapytanie",
    text: `Telefon: ${telefon}\nTreść zapytania: ${trescZapytania}\nE-mail : ${email}`,
  };

  try {
    await sgMail.send(message);
    res.status(200).send("E-mail wysłany pomyślnie!");
  } catch (error) {
    console.error("Błąd podczas wysyłania e-maila:", error);
    res.status(500).send("Wystąpił błąd podczas wysyłania e-maila.");
  }
});

app.get("/gets", (req, res) => {
  res.send("Hello, world!");
});

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Serwer nasłuchuje na porcie ${PORT}`);
});
