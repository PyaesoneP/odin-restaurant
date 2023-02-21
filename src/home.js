import { clearContent } from "./clear";
import { renderMenu } from "./menu";

function renderHome() {
  function render() {
    makeHeroSection();
    makePopularMeals();
  }
  return { render };
}

function makeHeroSection() {
  const contentContainer = document.getElementById("content-container");
  const heroContainer = document.createElement("div");
  heroContainer.id = "hero-container";
  const popularMealsContainer = document.createElement("div");
  popularMealsContainer.id = "popular-meals";

  const heroImgDiv = document.createElement("div");
  const heroTextDiv = document.createElement("div");

  const heroImage = document.createElement("img");
  heroImage.setAttribute("src", "./assets/images/heroimg.jpg");
  heroImage.id = "hero-image";
  heroImgDiv.appendChild(heroImage);

  const heroHeader = document.createElement("h1");
  heroHeader.id = "hero-header";
  heroHeader.innerText = "Welcome to RESTAURANT";
  const heroText = document.createElement("p");
  heroText.id = "hero-text";
  heroText.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  heroTextDiv.appendChild(heroHeader);
  heroTextDiv.appendChild(heroText);

  heroContainer.appendChild(heroImgDiv);
  heroContainer.appendChild(heroTextDiv);
  contentContainer.appendChild(heroContainer);
  contentContainer.appendChild(popularMealsContainer);
}

function makePopularMeals() {
  const popularMealsContainer = document.getElementById("popular-meals");
  const header = document.createElement("h2");
  const menuContainer = document.createElement("div");
  popularMealsContainer.appendChild(header);
  popularMealsContainer.appendChild(menuContainer);

  const menu1 = document.createElement("div");
  const menu2 = document.createElement("div");
  const menu3 = document.createElement("div");
  menuContainer.appendChild(menu1);
  menuContainer.appendChild(menu2);
  menuContainer.appendChild(menu3);

  header.innerText = "Popular Menu";

  const menu1Image = document.createElement("img");
  const menu2Image = document.createElement("img");
  const menu3Image = document.createElement("img");
  menu1.appendChild(menu1Image);
  menu2.appendChild(menu2Image);
  menu3.appendChild(menu3Image);

  const menu1Name = document.createElement("p");
  const menu2Name = document.createElement("p");
  const menu3Name = document.createElement("p");
  menu1.appendChild(menu1Name);
  menu2.appendChild(menu2Name);
  menu3.appendChild(menu3Name);

  menu1Image.src = "./assets/images/menu1.jpg";
  menu2Image.src = "./assets/images/menu2.jpg";
  menu3Image.src = "./assets/images/menu3.jpg";

  menu1Name.innerText = "Menu 1";
  menu2Name.innerText = "Menu 2";
  menu3Name.innerText = "Menu 3";

  menu1Image.addEventListener("click", () => {
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

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
  menu2Image.addEventListener("click", () => {
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

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
  menu3Image.addEventListener("click", () => {
    const home = document.getElementById("home");
    const menu = document.getElementById("menu");
    const contact = document.getElementById("contact");

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
}

export { renderHome };
