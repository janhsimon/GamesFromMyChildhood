function TextFilter(formId) {
  const form = document.getElementById(formId);
  
  this.textfield = document.createElement("input");
  this.textfield.type = "text";
  this.textfield.className = "text";
  this.textfield.oninput = updateFilters;
  form.appendChild(this.textfield);
  
  this.contains = function (values) {
    for (const i in values) {
      if (values[i].toLowerCase().includes(this.textfield.value.trim().toLowerCase())) {
        return true;
      }
    }
    return false;
  };
}