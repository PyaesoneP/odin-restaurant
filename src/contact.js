function renderContact() {
  function render() {
    const container = document.getElementById("content");
    const heading = document.createElement("p");
    heading.innerText = "Contact";
    container.appendChild(heading);
  }
  return { render };
}
export { renderContact };
