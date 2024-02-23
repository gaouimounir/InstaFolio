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
    description: (
      <div>
        <p>
          Shabbat Brunch est un projet complet de développement web réalisé en utilisant la technologie C# .NET avec l'architecture MVC et la gestion de base de données via Entity Framework.
          Il s'agit d'un site dédié à un restaurant, offrant une expérience utilisateur interactive et pratique.
        </p>
        <p>
          <strong>Fonctionnalités Principales :</strong>
          <ul>
            <li>Consultation de la Carte : Les utilisateurs peuvent explorer la carte détaillée du restaurant, affichant une variété de plats et de boissons proposés.</li>
            <li>Réservation en Ligne : Intégration d'un système de réservation en ligne permettant aux clients de réserver leur table à l'avance, améliorant ainsi l'efficacité et la satisfaction de la clientèle.</li>
            <li>Gestion Admin : Interface d'administration sécurisée pour gérer facilement les réservations, mettre à jour le menu et gérer les informations de contact du restaurant.</li>
            <li>Horaires et Localisation : Affichage clair des horaires d'ouverture du restaurant et accès à des informations précises sur sa localisation.</li>
            <li>Base de Données SQLite : Utilisation d'une base de données SQLite pour stocker et récupérer les données du site de manière efficace et sécurisée.</li>
          </ul>
        </p>
        <p>
          <strong>Technologies Utilisées :</strong>
          <ul>
            <li>C# .NET</li>
            <li>ASP.NET MVC</li>
            <li>Entity Framework</li>
            <li>SQLite</li>
          </ul>
        </p>
        <p>
          ShabbatBrunch démontre une application pratique des technologies web modernes, offrant une solution fonctionnelle pour les restaurants qui cherchent à améliorer leur présence en ligne et à faciliter les interactions avec leurs clients.
          <br />
          <br />
          <strong>Site Web : </strong>
          <a style={{ color: "blue" }} href="https://lashabbatapp.azurewebsites.net">https://lashabbatapp.azurewebsites.net</a>
        </p>
      </div>
    ),
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
