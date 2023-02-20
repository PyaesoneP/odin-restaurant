function renderMenu() {
  function render() {
    makeMenu();
  }
  return { render };
}

function makeMenu() {
  const contentContainer = document.getElementById("content-container");
  const menuHeading = document.createElement("h1");
  contentContainer.appendChild(menuHeading);

  menuHeading.innerText = "Our Menu";

  const menu1 = menuConstructor(
    "Menu1",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat. Gravida dictum fusce ut placerat orci.",
    "../assets/images/menu1.jpg"
  );
  const menu2 = menuConstructor(
    "Menu2",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat. Gravida dictum fusce ut placerat orci.",
    "../assets/images/menu2.jpg"
  );
  const menu3 = menuConstructor(
    "Menu3",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat. Gravida dictum fusce ut placerat orci.",
    "../assets/images/menu3.jpg"
  );
  const menu4 = menuConstructor(
    "Menu4",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat. Gravida dictum fusce ut placerat orci.",
    "../assets/images/menu4.jpg"
  );
  const menu5 = menuConstructor(
    "Menu5",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate odio ut enim blandit volutpat. Gravida dictum fusce ut placerat orci.",
    "../assets/images/menu5.jpg"
  );

  const menu = addMenu();
  menu.add(menu1);
  menu.add(menu2);
  menu.add(menu3);
  menu.add(menu4);
  menu.add(menu5);

  const toDisplay = menu.getMenu();

  displayMenu(toDisplay);
}

function addMenu() {
  const menuArr = [];
  function add(x) {
    menuArr.push(x);
  }

  function getMenu() {
    return menuArr;
  }
  return { add, getMenu };
}

function menuConstructor(name, description, url) {
  const menuName = name;
  const menuDescription = description;
  const menuUrl = url;

  function getMenuName() {
    return menuName;
  }

  function getMenuDescription() {
    return menuDescription;
  }

  function getMenuUrl() {
    return menuUrl;
  }

  return { getMenuName, getMenuDescription, getMenuUrl };
}

function displayMenu(arr) {
  for (let i = 0; i < arr.length; i++) {
    const contentContainer = document.getElementById("content-container");
    const menuDiv = document.createElement("div");
    contentContainer.appendChild(menuDiv);

    const menuImg = document.createElement("img");
    const menuInfo = document.createElement("div");
    menuDiv.appendChild(menuImg);
    menuDiv.appendChild(menuInfo);

    const menuName = document.createElement("h3");
    const menuDescription = document.createElement("p");
    menuInfo.appendChild(menuName);
    menuInfo.appendChild(menuDescription);

    menuDiv.className = "menu";

    menuImg.src = arr[i].getMenuUrl();
    menuName.innerText = arr[i].getMenuName();
    menuDescription.innerText = arr[i].getMenuDescription();
  }
}

export { renderMenu };
