const handleKeyPress = function (e) {
  e.preventDefault();

  const isAltGr = e.key === "AltGraph";

  if (isAltGr) {
    document
      .querySelector("." + "controlleft")
      .classList.remove("key-pressing-simulation");

    document
      .querySelector("." + "controlleft")
      .classList.remove("key--pressed");
  }

  const keyElement = document.querySelector("." + e.code.toLowerCase());

  if (e.type === "keydown") {
    checkPressKey(keyElement.dataset.eng);
    keyElement.classList.add("key-pressing-simulation");
  } else if (e.type === "keyup") {
    keyElement.classList.remove("key-pressing-simulation");
  }

  if (!keyElement.classList.contains("key--pressed")) {
    keyElement.classList.add("key--pressed");
  }

  if (e.key === "Meta" || e.key === "OS") {
    keyElement.classList.remove("key-pressing-simulation");
  }
};
