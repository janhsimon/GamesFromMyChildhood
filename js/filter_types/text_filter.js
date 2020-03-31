function TextFilter(text, containerId) {
  const container = document.getElementById(containerId);

  this.textfield = document.createElement("input");
  this.textfield.type = "text";
  this.textfield.className = "text";
  this.textfield.placeholder = text;
  this.textfield.oninput = updateFilters;
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