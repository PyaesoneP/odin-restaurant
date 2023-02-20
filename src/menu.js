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

export { renderMenu };
