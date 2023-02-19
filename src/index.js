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
    navLink1.id = "home";
    navLink2.innerText = "Menu";
    navLink2.id = "menu";
    navLink3.innerText = "Contact";
    navLink3.id = "contact";

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
    const container = document.getElementById("content");
    const contentContainer = document.createElement("div");
    contentContainer.id = "content-container";
    container.appendChild(contentContainer);

    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");
    let page = renderHome();
    page.render();

    home.addEventListener("click", () => {
      page = renderHome();
      page.render();
    });

    menu.addEventListener("click", () => {
      page = renderMenu();
      page.render();
    });

    contact.addEventListener("click", () => {
      page = renderContact();
      page.render();
    });
  })();
})();
