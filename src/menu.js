function renderMenu() {
  function render() {
    const container = document.getElementById("content");
    const heading = document.createElement("p");
    heading.innerText = "Menu";
    container.appendChild(heading);
  }
  return { render };
}
export { renderMenu };
