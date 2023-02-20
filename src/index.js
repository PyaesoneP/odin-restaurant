import "./style.css";
import { renderHome } from "./home";
import { renderContact } from "./contact";
import { renderMenu } from "./menu";
import { clearContent } from "./clear";

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

    document.addEventListener("DOMContentLoaded", () => {
      const page = renderHome();
      page.render();
      home.style.backgroundColor = "white";
      home.style.color = "hsl(0, 0%, 20%)";
    });

    home.addEventListener("click", () => {
      const clearedPage = clearContent();
      clearedPage.clear();
      const page = renderHome();
      page.render();
      home.style.backgroundColor = "white";
      home.style.color = "hsl(0, 0%, 20%)";
      menu.style.backgroundColor = "hsl(0, 0%, 20%)";
      menu.style.color = "hsl(0, 0%, 80%)";
      contact.style.backgroundColor = "hsl(0, 0%, 20%)";
      contact.style.color = "hsl(0, 0%, 80%)";
    });

    menu.addEventListener("click", () => {
      const clearedPage = clearContent();
      clearedPage.clear();
      const page = renderMenu();
      page.render();
      menu.style.backgroundColor = "white";
      menu.style.color = "hsl(0, 0%, 20%)";
      home.style.backgroundColor = "hsl(0, 0%, 20%)";
      home.style.color = "hsl(0, 0%, 80%)";
      contact.style.backgroundColor = "hsl(0, 0%, 20%)";
      contact.style.color = "hsl(0, 0%, 80%)";
    });

    contact.addEventListener("click", () => {
      const clearedPage = clearContent();
      clearedPage.clear();
      const page = renderContact();
      page.render();
      contact.style.backgroundColor = "white";
      contact.style.color = "hsl(0, 0%, 20%)";
      home.style.backgroundColor = "hsl(0, 0%, 20%)";
      home.style.color = "hsl(0, 0%, 80%)";
      menu.style.backgroundColor = "hsl(0, 0%, 20%)";
      menu.style.color = "hsl(0, 0%, 80%)";
    });
  })();

  function createFooter() {
    const container = document.getElementById("content");
    const footerContainer = document.createElement("div");
    container.appendChild(footerContainer);
  }
})();
