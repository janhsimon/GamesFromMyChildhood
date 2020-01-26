function initAllFilters() {
  initTextFilter(document.getElementById("nameFilter"));
  initToggleFilter(genres, document.getElementById("genreFilter"));
  initToggleFilter(platforms, document.getElementById("platformFilter"));
}

function initTextFilter(form) {
  const text = document.createElement("input");
  text.type = "text";
  text.oninput = filter;
  form.appendChild(text);
}

function initToggleFilter(elements, form) {
  for (const i in elements) {
    const checkbox = document.createElement("input");
    checkbox.id = i;
    checkbox.type = "checkbox";
    checkbox.oninput = filter;
    checkbox.checked = true;

    const label = document.createElement("label");
    label.htmlFor = i;
    label.innerText = elements[i].name;

    form.appendChild(checkbox);
    form.appendChild(label);
  }
}

function checkNameFilter(gameName, nameText) {
  return gameName.toLowerCase().includes(nameText.trim().toLowerCase());
}

function checkPlatformFilter(gamePlatforms, platformCheckboxes) {
  for (const i in gamePlatforms) {
    if (platformCheckboxes[gamePlatforms[i].id].checked) {
      return true;
    }
  }
  return false;
}

function filter() {
  const cells = document.getElementById("cells").childNodes;

  const nameInput = document.getElementById("nameFilter").getElementsByTagName("input")[0];
  const genreCheckboxes = document.getElementById("genreFilter").getElementsByTagName("input");
  const platformCheckboxes = document.getElementById("platformFilter").getElementsByTagName("input");

  for (const i in games) {
    if (!checkNameFilter(games[i].names[0], nameInput.value)) {
      cells[i].className = "hidden";
      continue;
    }

    if (!genreCheckboxes[games[i].genre.id].checked) {
      cells[i].className = "hidden";
      continue;
    }

    if (!checkPlatformFilter(games[i].platforms, platformCheckboxes)) {
      cells[i].className = "hidden";
      continue;
    }

    cells[i].className = "cell";
  }
}