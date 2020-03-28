function ToggleFilter(text, containerId, options) {
  this.checkboxes = []
  
  const container = document.getElementById(containerId);
  
  const fieldset = document.createElement("fieldset");
  container.appendChild(fieldset);
  
  const legend = document.createElement("legend");
  legend.innerText = text;
  fieldset.appendChild(legend);

  for (const i in options) {
    const checkbox = document.createElement("input");
    checkbox.id = i;
    checkbox.type = "checkbox";
    checkbox.oninput = updateFilters;
    checkbox.checked = true;
    fieldset.appendChild(checkbox);

    const label = document.createElement("label");
    label.htmlFor = i;
    label.innerText = options[i].name;
    fieldset.appendChild(label);

    this.checkboxes.push(checkbox);
  }

  const self = this;

  const noneButton = document.createElement("input");
  noneButton.type = "button";
  noneButton.value = "None";
  noneButton.className = "button";
  noneButton.onclick = function () { for (const i in self.checkboxes) { self.checkboxes[i].checked = false; } updateFilters(); };
  fieldset.appendChild(noneButton);

  const allButton = document.createElement("input");
  allButton.type = "button";
  allButton.value = "All";
  allButton.className = "button";
  allButton.onclick = function () { for (const i in self.checkboxes) { self.checkboxes[i].checked = true; } updateFilters(); };
  fieldset.appendChild(allButton);

  this.is = function (value) {
    return this.checkboxes[value].checked;
  };

  this.contains = function (values) {
    for (const i in values) {
      if (this.checkboxes[values[i].id].checked) {
        return true;
      }
    }
    return false;
  };
}