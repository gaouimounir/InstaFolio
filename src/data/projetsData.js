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
        Shabbat Brunch est un projet complet de développement web réalisé en
        utilisant la technologie C# .NET avec l'architecture MVC et la gestion
        de base de données via Entity Framework. Il s'agit d'un site dédié à un
        restaurant, offrant une expérience utilisateur interactive et pratique.
        <br />
        <br />
        <strong>Fonctionnalités Principales :</strong>
        <ul>
          <li>
            Consultation de la Carte : Les utilisateurs peuvent explorer la
            carte détaillée du restaurant, affichant une variété de plats et de
            boissons proposés.
          </li>
          <li>
            Réservation en Ligne : Intégration d'un système de réservation en
            ligne permettant aux clients de réserver leur table à l'avance,
            améliorant ainsi l'efficacité et la satisfaction de la clientèle.
          </li>
          <li>
            Gestion Admin : Interface d'administration sécurisée pour gérer
            facilement les réservations, mettre à jour le menu et gérer les
            informations de contact du restaurant.
          </li>
          <li>
            Horaires et Localisation : Affichage clair des horaires d'ouverture
            du restaurant et accès à des informations précises sur sa
            localisation.
          </li>
          <li>
            Base de Données SQLite : Utilisation d'une base de données SQLite
            pour stocker et récupérer les données du site de manière efficace et
            sécurisée.
          </li>
        </ul>
        <strong>Technologies Utilisées :</strong>
        <ul>
          <li>C# .NET</li>
          <li>ASP.NET MVC</li>
          <li>Entity Framework</li>
          <li>SQLite</li>
        </ul>
        ShabbatBrunch démontre une application pratique des technologies web
        modernes, offrant une solution fonctionnelle pour les restaurants qui
        cherchent à améliorer leur présence en ligne et à faciliter les
        interactions avec leurs clients.
        <br />
        <br />
        <strong>Site Web : </strong>
        <a
          style={{ color: "blue" }}
          href="https://lashabbatapp.azurewebsites.net"
        >
          https://lashabbatapp.azurewebsites.net
        </a>
      </div>
    ),
    mainImage: ShabbatHome,
    images: [ShabbatHome, ShabbatReservation, ShabbatMenu],
  },
  // {
  //   id: 2,
  //   title: "Meteo Connect",
  //   description: "A Shabbat Brunch App",
  //   mainImage: MeteoConnect,
  //   images: [MeteoConnect, MeteoBody],
  // },
  {
    id: 3,
    title: "Ducsman",
    description: (
      <div>
        Le projet Ducsman est une réalisation passionnante qui incarne
        l'alliance de la créativité et de la fonctionnalité dans le domaine du
        commerce électronique. Développé en JavaScript, ce site offre une
        expérience de shopping en ligne immersive pour les amateurs de mode.
        <br />
        <br />
        <strong>Fonctionnalités Principales :</strong>
        <ul>
          <li>
            Catalogue Étendu : Découvrez un large éventail de vêtements triés
            par catégories, offrant aux utilisateurs une variété de choix selon
            leurs préférences.
          </li>
          <li>
            Tri et Filtrage : La fonctionnalité de tri et de filtrage permet aux
            visiteurs de rechercher rapidement des articles spécifiques,
            facilitant ainsi leur expérience de navigation.
          </li>
          <li>
            Gestion du Panier : Les utilisateurs peuvent ajouter des articles à
            leur panier virtuel, facilitant la planification de leurs achats.
          </li>
        </ul>
        <strong> Technologies Utilisées : </strong>
        <ul>
          <li>
            JavaScript : Le cœur du site repose sur JavaScript, assurant une
            interactivité dynamique pour les utilisateurs.
          </li>
          <li>
            Données JSON : Les informations sur les produits sont stockées de
            manière organisée dans des fichiers JSON, garantissant une gestion
            efficace des données.
          </li>
        </ul>
        Le projet Ducsman représente l'intersection de la mode et de la
        technologie, démontrant la capacité à créer des solutions numériques
        innovantes dans le secteur du commerce électronique. Explorez les
        dernières tendances et préparez-vous à une expérience de shopping en
        ligne exceptionnelle avec Ducsman.
        <br />
        <br />
        <strong>Site Web : </strong>
        <a
          style={{ color: "blue" }}
          href="https://gaouimounir.github.io/eCommerceJS"
        >
          https://gaouimounir.github.io/eCommerceJS
        </a>
      </div>
    ),
    mainImage: Ducsman,
    images: [Ducsman, DucsmanPanier],
  },
  {
    id: 4,
    title: "Ola Bel Bul",
    description: (
      <div>
        Le projet Ola Bel Bul incarne une fusion harmonieuse entre la créativité
        digitale et le lancement d'une nouvelle boisson probiotique. Développé
        en HTML, CSS et JavaScript, ce site vitrine offre une plongée immersive
        dans l'univers de cette entreprise innovante de kombucha.
        <br />
        <br />
        <strong> Caractéristiques Clés : </strong>
        <ul>
          <li>
            Histoire et Valeurs : Explorez l'histoire captivante de Ola Bel Bul,
            découvrez ses valeurs fondamentales et plongez dans le parcours qui
            a conduit à la création de cette boisson unique.
          </li>
          <li>
            Diversité des Saveurs : Présentation des différentes saveurs de
            kombucha proposées, offrant aux visiteurs un aperçu des choix
            délicieux disponibles.
          </li>
          <li>
            Prestations Offertes : Une section détaillée sur les services
            proposés par Ola Bel Bul, mettant en lumière les options de
            partenariat, les événements spéciaux et bien plus encore.
          </li>
          <li>
            Page de Contact : Facilitez la communication avec une page de
            contact interactive, permettant aux visiteurs d'envoyer des messages
            et de poser des questions.
          </li>
        </ul>
        <strong>Technologies Utilisées : </strong>
        <ul>
          <li>
            HTML, CSS, JavaScript : La combinaison de ces technologies assure
            une présentation visuelle attrayante et une interaction fluide avec
            le site.
          </li>
          <li>
            Design Responsive : L'interface est pensée pour s'adapter à tous les
            types d'appareils, garantissant une expérience utilisateur optimale
            sur ordinateurs, tablettes et smartphones.
          </li>
        </ul>
        Ola Bel Bul représente bien plus qu'une simple boisson, c'est une
        aventure gustative ancrée dans une histoire inspirante. Explorez les
        saveurs, plongez dans l'histoire et découvrez les opportunités de
        collaboration avec ce site web captivant.
        <br />
        <br />
        <strong>Site Web : </strong>
        <a
          style={{ color: "blue" }}
          href="https://gaouimounir.github.io/WebSite_OlaBelBul"
        >
          https://gaouimounir.github.io/WebSite_OlaBelBul
        </a>
      </div>
    ),
    mainImage: OlaBelBul,
    images: [OlaBelBul, OlaBelBulValeur, OlaBelBulBenefice],
  },
  // {
  //   id: 5,
  //   title: "Fridge Mate",
  //   description: "A Shabbat Brunch App",
  //   mainImage: FridgeHome,
  //   images: [FridgeApp, FridgeHome],
  // },
];

export default projetsData;
