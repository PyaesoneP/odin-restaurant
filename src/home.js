function renderHome() {
  function render() {
    const contentContainer = document.getElementById("content-container");
    const heroContainer = document.createElement("div");
    heroContainer.id = "hero-container";
    const popularMealsContainer = document.createElement("div");

    const heroImgDiv = document.createElement("div");
    const heroTextDiv = document.createElement("div");

    const heroImage = document.createElement("img");
    heroImage.setAttribute("src", "../src/heroimg.jpg");
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
  }
  return { render };
}

export { renderHome };
