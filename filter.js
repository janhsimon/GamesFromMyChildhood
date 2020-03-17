var nameTextfields = [];
var genreCheckboxes = [];
var platformCheckboxes = [];

function initAllFilters() {
  initTextFilter(document.getElementById("nameFilter"), nameTextfields);
  initToggleFilter(genres, document.getElementById("genreFilter"), genreCheckboxes);
  initToggleFilter(platforms, document.getElementById("platformFilter"), platformCheckboxes);
}

function initTextFilter(form, textfields) {
  const textfield = document.createElement("input");
  textfield.type = "text";
  textfield.oninput = filter;
  form.appendChild(textfield);

  textfields.push(textfield);
}

function initToggleFilter(elements, form, list) {
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

    list.push(checkbox);
  }

  const noneButton = document.createElement("input");
  noneButton.type = "button";
  noneButton.value = "None";
  noneButton.onclick = function () { for (const i in list) { list[i].checked = false; } filter(); };
  form.appendChild(noneButton);

  const allButton = document.createElement("input");
  allButton.type = "button";
  allButton.value = "All";
  allButton.onclick = function () { for (const i in list) { list[i].checked = true; } filter(); };
  form.appendChild(allButton);
}

function textFilterContains(values, textfields) {
  for (const i in values) {
    if (values[i].toLowerCase().includes(textfields[0].value.trim().toLowerCase())) {
      return true;
    }
  }
  return false;
}

function toggleFilterIsSet(value, checkboxes) {
  return checkboxes[value].checked;
}

function toggleFilterContains(values, checkboxes) {
  for (const i in values) {
    if (checkboxes[values[i].id].checked) {
      return true;
    }
  }
  return false;
}

function filter() {
  const cells = document.getElementById("cells").childNodes;
  for (const i in games) {
    if (!textFilterContains(games[i].names, nameTextfields)) {
      cells[i].className = "hidden";
      continue;
    }

    if (!toggleFilterIsSet(games[i].genre.id, genreCheckboxes)) {
      cells[i].className = "hidden";
      continue;
    }

    if (!toggleFilterContains(games[i].platforms, platformCheckboxes)) {
      cells[i].className = "hidden";
      continue;
    }

    cells[i].className = "cell";
  }
}