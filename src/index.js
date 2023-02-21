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

  (function createFooter() {
    const container = document.getElementById("content");
    const footerContainer = document.createElement("div");
    container.appendChild(footerContainer);

    const footerLinks = document.createElement("div");
    const copyRight = document.createElement("p");
    footerContainer.appendChild(footerLinks);
    footerContainer.appendChild(copyRight);

    const projectsLink = document.createElement("div");
    const naviLink = document.createElement("div");
    const socialLink = document.createElement("div");
    footerLinks.appendChild(projectsLink);
    footerLinks.appendChild(naviLink);
    footerLinks.appendChild(socialLink);

    const projectsHeader = document.createElement("h3");
    const projectList = document.createElement("ul");
    projectsLink.appendChild(projectsHeader);
    projectsLink.appendChild(projectList);

    const naviHeader = document.createElement("h3");
    const naviList = document.createElement("ul");
    naviLink.appendChild(naviHeader);
    naviLink.appendChild(naviList);

    const socialHeader = document.createElement("h3");
    const githubIcon = document.createElement("a");
    const linkedinIcon = document.createElement("a");
    const facebookIcon = document.createElement("a");
    socialLink.appendChild(socialHeader);
    socialLink.appendChild(githubIcon);
    socialLink.appendChild(linkedinIcon);
    socialLink.appendChild(facebookIcon);

    const project1 = document.createElement("li");
    const project2 = document.createElement("li");
    const project3 = document.createElement("li");
    const project4 = document.createElement("li");
    const project5 = document.createElement("li");
    const project6 = document.createElement("li");
    projectList.appendChild(project1);
    projectList.appendChild(project2);
    projectList.appendChild(project3);
    projectList.appendChild(project4);
    projectList.appendChild(project5);
    projectList.appendChild(project6);

    const navi1 = document.createElement("li");
    const navi2 = document.createElement("li");
    const navi3 = document.createElement("li");
    naviList.appendChild(navi1);
    naviList.appendChild(navi2);
    naviList.appendChild(navi3);

    const navi1Link = document.createElement("p");
    const navi2Link = document.createElement("p");
    const navi3Link = document.createElement("p");
    navi1.appendChild(navi1Link);
    navi2.appendChild(navi2Link);
    navi3.appendChild(navi3Link);

    footerContainer.id = "footer";

    copyRight.innerText = "Copyright Pyae Sone with The Odin Project";

    projectsHeader.innerText = "Projects";
    naviHeader.innerText = "Navigation";
    socialHeader.innerText = "Socials";

    project1.innerHTML =
      '<a href="https://pyaesonep.github.io/odin-tictactoe/">Tic-Tac-Toe</a>';
    project2.innerHTML =
      '<a href="https://pyaesonep.github.io/odin-library/">Library</a>';
    project3.innerHTML =
      '<a href="https://pyaesonep.github.io/odin-admin-dashboard/">Admin Dashboard</a>';
    project4.innerHTML =
      '<a href="https://pyaesonep.github.io/odin-signupform/">Signup Form</a>';
    project5.innerHTML =
      '<a href="https://pyaesonep.github.io/odin-calculator/">Calculator</a>';
    project6.innerHTML =
      '<a href="https://pyaesonep.github.io/odin-etchasketch/">Etch-A-Sketch</a>';

    navi1Link.innerText = "Home";
    navi2Link.innerText = "Menu";
    navi3Link.innerText = "Contact";

    githubIcon.href = "https://github.com/PyaesoneP";
    linkedinIcon.href = "https://www.linkedin.com/in/pyaesonep/";
    facebookIcon.href =
      "https://www.facebook.com/profile.php?id=100008049600919";
    githubIcon.innerHTML =
      '<img src="../assets/icons/github-mark-white.png" class="icon">';
    linkedinIcon.innerHTML =
      '<img src="../assets/icons/LI-In-Bug.png" class="icon">';
    facebookIcon.innerHTML =
      '<img src="../assets/icons/f_logo_RGB-White_58.png" class="icon">';

    navi1Link.addEventListener("click", () => {
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
    navi2Link.addEventListener("click", () => {
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
    navi3Link.addEventListener("click", () => {
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
})();
