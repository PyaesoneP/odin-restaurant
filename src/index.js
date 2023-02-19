import "./style.css";
import { renderHome } from "./home";
import { renderContact } from "./contact";
import { renderMenu } from "./menu";

(function initializePage() {
  (function createButtons() {
    const container = document.getElementById("content");
    const buttonsDiv = document.createElement("div");
    const homeButton = document.createElement("button");
    homeButton.id = "home-button";
    homeButton.innerText = "Home";
    const menuButton = document.createElement("button");
    menuButton.id = "menu-button";
    menuButton.innerText = "Menu";
    const contactButton = document.createElement("button");
    contactButton.id = "contact-button";
    contactButton.innerText = "Contact";

    buttonsDiv.appendChild(homeButton);
    buttonsDiv.appendChild(menuButton);
    buttonsDiv.appendChild(contactButton);
    container.appendChild(buttonsDiv);
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
