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
        Shabbat Brunch is a web development project implemented using C# .NET
        technology with MVC architecture and database management through Entity
        Framework. It is a website dedicated to a restaurant, providing an
        interactive and convenient user experience.
        <br />
        <br />
        <strong>Main Features:</strong>
        <ul>
          <li>
            Menu Exploration: Users can explore the detailed restaurant menu,
            displaying a variety of offered dishes and drinks.
          </li>
          <li>
            Online Reservation: Integration of an online reservation system
            allowing customers to book their table in advance, enhancing
            efficiency and customer satisfaction.
          </li>
          <li>
            Admin Management: Secure administration interface to easily manage
            reservations, update the menu, and handle restaurant contact
            information.
          </li>
          <li>
            Timings and Location: Clear display of restaurant opening hours and
            access to precise information about its location.
          </li>
          <li>
            SQLite Database: Use of an SQLite database to efficiently and
            securely store and retrieve website data.
          </li>
        </ul>
        <strong>Technologies Used:</strong>
        <ul>
          <li>C# .NET</li>
          <li>ASP.NET MVC</li>
          <li>Entity Framework</li>
          <li>SQLite</li>
        </ul>
        ShabbatBrunch demonstrates a practical application of modern web
        technologies, providing a functional solution for restaurants looking to
        enhance their online presence and facilitate interactions with
        customers.
        <br />
        <br />
        <strong>Website: </strong>
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
    id: 2,
    title: "DevBank",
    description: (
      <div>
        The DevBank project is a simplified banking application developed in C#
        language with the .NET framework. The main objective of this application
        is to simulate basic banking operations for two types of accounts: a
        current account (CompteCourant) and a savings account (CompteEpargne).
        <br />
        <br />
        <strong>Main Features:</strong>
        <ul>
          <li>
            Deposit and Withdrawal: Users can make deposits and withdrawals from
            their accounts.
          </li>
          <li>
            Transfer: The transfer function allows the transfer of money between
            two accounts.
          </li>
          <li>
            Transaction History: Users can view the history of their
            transactions over the last 30 days.
          </li>
          <li>
            Account Policy: Current and savings accounts have specific policies,
            such as withdrawal fees, authorized overdraft, interest rate, etc.
          </li>
          <li>
            Notifications: The NotificationManager class manages notifications
            and records them in a history file.
          </li>
        </ul>
        <strong>Technologies Used:</strong>
        <ul>
          <li>C# .NET</li>
          <li>Visual Studio</li>
          <li>N Unit</li>
        </ul>
        DevBank represents a simulation of a banking system with an
        object-oriented implementation, offering basic functionalities for
        managing current and savings bank accounts.
        <br />
        <br />
        <strong>Github Repository: </strong>
        <a
          style={{ color: "blue" }}
          href="https://lashabbatapp.azurewebsites.net"
        >
          https://lashabbatapp.azurewebsites.net
        </a>
      </div>
    ),
    mainImage: FridgeHome,
    images: [FridgeHome, FridgeApp],
  },

  {
    id: 3,
    title: "Ducsman",
    description: (
      <div>
        The Ducsman project is an exciting achievement that embodies the
        alliance of creativity and functionality in the e-commerce domain.
        Developed in JavaScript, this site offers an immersive online shopping
        experience for fashion enthusiasts.
        <br />
        <br />
        <strong>Main Features:</strong>
        <ul>
          <li>
            Extended Catalog: Explore a wide range of clothing categorized,
            providing users with a variety of choices based on their
            preferences.
          </li>
          <li>
            Sorting and Filtering: The sorting and filtering feature allows
            visitors to quickly search for specific items, facilitating their
            browsing experience.
          </li>
          <li>
            Cart Management: Users can add items to their virtual cart,
            facilitating planning for their purchases.
          </li>
        </ul>
        <strong>Technologies Used:</strong>
        <ul>
          <li>
            JavaScript: The core of the site relies on JavaScript, ensuring
            dynamic interactivity for users.
          </li>
          <li>
            JSON Data: Product information is organized in JSON files,
            guaranteeing efficient data management.
          </li>
        </ul>
        The Ducsman project represents the intersection of fashion and
        technology, showcasing the ability to create innovative digital
        solutions in the e-commerce sector. Explore the latest trends and
        prepare for an exceptional online shopping experience with Ducsman.
        <br />
        <br />
        <strong>Website: </strong>
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
        The Ola Bel Bul project embodies a harmonious fusion of digital
        creativity and the launch of a new probiotic beverage. Developed in
        HTML, CSS, and JavaScript, this showcase site offers an immersive dive
        into the world of this innovative kombucha company.
        <br />
        <br />
        <strong>Main Features:</strong>
        <ul>
          <li>
            Story and Values: Explore the captivating story of Ola Bel Bul,
            discover its core values, and dive into the journey that led to the
            creation of this unique beverage.
          </li>
          <li>
            Flavor Diversity: Presentation of the different flavors of kombucha
            offered, giving visitors an overview of the delicious choices
            available.
          </li>
          <li>
            Offered Services: A detailed section on the services offered by Ola
            Bel Bul, highlighting partnership options, special events, and much
            more.
          </li>
          <li>
            Contact Page: Facilitate communication with an interactive contact
            page, allowing visitors to send messages and ask questions.
          </li>
        </ul>
        <strong>Technologies Used:</strong>
        <ul>
          <li>
            HTML, CSS, JavaScript: The combination of these technologies ensures
            an attractive visual presentation and smooth interaction with the
            site.
          </li>
          <li>
            Responsive Design: The interface is designed to adapt to all types
            of devices, ensuring an optimal user experience on computers,
            tablets, and smartphones.
          </li>
        </ul>
        Ola Bel Bul represents more than just a beverage; it is a flavorful
        adventure rooted in an inspiring story. Explore the flavors, delve into
        the story, and discover collaboration opportunities with this engaging
        website.
        <br />
        <br />
        <strong>Website: </strong>
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
