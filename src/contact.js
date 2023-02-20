function renderContact() {
  function render() {
    makeContactForm();
  }
  return { render };
}

function makeContactForm() {
  const contentContainer = document.getElementById("content-container");
  const formHeader = document.createElement("h1");
  const form = document.createElement("form");
  const button = document.createElement("button");
  contentContainer.appendChild(formHeader);
  contentContainer.appendChild(form);
  contentContainer.appendChild(button);

  const nameLabel = document.createElement("label");
  const nameInput = document.createElement("input");
  const emailLabel = document.createElement("label");
  const emailInput = document.createElement("input");
  const messageLabel = document.createElement("label");
  const messageInput = document.createElement("textarea");
  form.appendChild(nameLabel);
  form.appendChild(nameInput);
  form.appendChild(emailLabel);
  form.appendChild(emailInput);
  form.appendChild(messageLabel);
  form.appendChild(messageInput);

  formHeader.innerText = "Contact Us";
  form.id = "form";
  button.setAttribute("form", "form");
  button.innerText = "Submit";

  nameLabel.setAttribute("for", "name");
  nameLabel.innerText = "Name";
  emailLabel.setAttribute("for", "email");
  emailLabel.innerText = "Email";
  messageLabel.setAttribute("for", "message");
  messageLabel.innerText = "Message";

  nameInput.id = "name";
  nameInput.type = "text";
  nameInput.name = "name";
  emailInput.id = "email";
  emailInput.type = "email";
  emailInput.name = "email";
  messageInput.id = "message";
  messageInput.name = "message";
  messageInput.rows = "4";
  messageInput.cols = "75";

  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
}

export { renderContact };
