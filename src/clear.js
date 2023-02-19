function clearContent() {
  function clear() {
    const contentContainer = document.getElementById("content-container");
    while (contentContainer.lastChild) {
      contentContainer.removeChild(contentContainer.lastChild);
    }
  }
  return { clear };
}

export { clearContent };
