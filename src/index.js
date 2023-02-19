import "./style.css";
import { renderHome } from "./home";
import { renderContact } from "./contact";
import { renderMenu } from "./menu";

(function initializePage() {
  (function createNav() {
    const container = document.getElementById("content");
    const nav = document.createElement("div");
    const logoDiv = document.createElement("div");
    const logo = document.createElement("p");
    const navLinkDiv = document.createElement("div");
    const navLinks = document.createElement("ul");
    const navLink1 = document.createElement("li");
    const navLink2 = document.createElement("li");
    const navLink3 = document.createElement("li");

    nav.id = "nav";
    logo.innerText = "RESTAURANT";
    navLink1.innerText = "Home";
    navLink2.innerText = "Menu";
    navLink3.innerText = "Contact";

    logoDiv.appendChild(logo);
    navLinks.appendChild(navLink1);
    navLinks.appendChild(navLink2);
    navLinks.appendChild(navLink3);
    navLinkDiv.appendChild(navLinks);

    nav.appendChild(logoDiv);
    nav.appendChild(navLinkDiv);
    container.appendChild(nav);
  })();

  (function renderPage() {
    const homeButton = document.getElementById("home-button");
    const menuButton = document.getElementById("menu-button");
    const contactButton = document.getElementById("contact-button");

    homeButton.addEventListener("click", () => {
      const page = renderHome();
      page.render();
    });

    menuButton.addEventListener("click", () => {
      const page = renderMenu();
      page.render();
    });

    contactButton.addEventListener("click", () => {
      const page = renderContact();
      page.render();
    });
  })();
})();
