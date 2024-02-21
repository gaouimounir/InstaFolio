// projetsData.js
import ShabbatHome from "./imageDataProjet/shabbatBrunch/home.png";
import ShabbatReservation from "./imageDataProjet/shabbatBrunch/reserver.PNG";
import ShabbatMenu from "./imageDataProjet/shabbatBrunch/carteMobile.PNG";
import FridgeHome from "./imageDataProjet/fridgeMate/FridgeScan.PNG";
import FridgeApp from "./imageDataProjet/fridgeMate/fridgeMate.png";
import Ducsman from "./imageDataProjet/ducsman/ducsman.jpg";
import DucsmanPanier from "./imageDataProjet/ducsman/ducsmanPanier.PNG";
import OlaBelBul from "./imageDataProjet/olaBelBul/OlaBelBulHome.PNG";
import OlaBelBulValeur from "./imageDataProjet/olaBelBul/kombuchaValeur.PNG";
import OlaBelBulBenefice from "./imageDataProjet/olaBelBul/kombuchaBenefice.PNG";
import MeteoConnect from "./imageDataProjet/meteoConnect/ApiMeteoHome.PNG";
import MeteoBody from "./imageDataProjet/meteoConnect/ApiMeteoBody.PNG";

const projetsData = [
  {
    id: 1,
    title: "Shabbat Brunch",
    description: "A Shabbat Brunch App",
    mainImage: ShabbatHome,
    images: [ShabbatHome, ShabbatReservation, ShabbatMenu],
  },
  {
    id: 2,
    title: "Meteo Connect",
    description: "A Shabbat Brunch App",
    mainImage: MeteoConnect,
    images: [MeteoConnect, MeteoBody],
  },
  {
    id: 3,
    title: "Ducsman",
    description: "A Shabbat Brunch App",
    mainImage: Ducsman,
    images: [Ducsman, DucsmanPanier],
  },
  {
    id: 4,
    title: "Ola Bel Bul",
    description: "A Shabbat Brunch App",
    mainImage: OlaBelBul,
    images: [OlaBelBul, OlaBelBulValeur, OlaBelBulBenefice],
  },
  {
    id: 5,
    title: "Fridge Mate",
    description: "A Shabbat Brunch App",
    mainImage: FridgeHome,
    images: [FridgeApp, FridgeHome],
  },
];

export default projetsData;
