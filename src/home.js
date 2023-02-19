function renderHome() {
  function render() {
    const container = document.getElementById("content");
    const heading = document.createElement("p");
    heading.innerText = "Home";
    container.appendChild(heading);
  }
  return { render };
}

export { renderHome };
