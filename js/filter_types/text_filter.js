function TextFilter(text, placeholderText, containerId) {
  const container = document.getElementById(containerId);

  this.textfield = document.createElement("input");
  this.textfield.type = "text";
  //this.textfield.id = container.id + "Textfield";
  this.textfield.className = "text";
  this.textfield.placeholder = placeholderText;
  this.textfield.oninput = updateFilters;
  
  const label = document.createElement("label");
  label.htmlFor = this.textfield.id;
  label.innerText = text;
  
  //container.appendChild(label);
  container.appendChild(this.textfield);
  
  this.contains = function (values) {
    for (const i in values) {
      if (values[i].toLowerCase().includes(this.textfield.value.trim().toLowerCase())) {
        return true;
      }
    }
    return false;
  };
}