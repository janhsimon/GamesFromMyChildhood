function initFilter() {
    const form = document.getElementById("genreFilter");
    for (const i in genres) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.oninput = filter;
      checkbox.checked = true;
      
      const label = document.createElement("label");
      label.innerText = genres[i].NAME;

      form.appendChild(checkbox);
      form.appendChild(label);
    }
}

function filter() {
  const container = document.getElementById("container");
  const checkboxes = document.getElementsByTagName("input");
  for (const i in games) {
    container.childNodes[i].className = checkboxes[games[i].genre.ID].checked ? "cell" : "hidden";
  }
}