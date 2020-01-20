function initFilter() {
    const form = document.getElementById("genreFilter");
    for (const genre in genres) {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.oninput = filter;
      checkbox.checked = true;
      
      const label = document.createElement("label");
      label.innerText = genres[genre][0];

      form.appendChild(checkbox);
      form.appendChild(label);
    }
}

function filter() {
  const container = document.getElementById("container");
  const checkboxes = document.getElementsByTagName("input");
  for (let i = 0; i < games.length; i++) {
    const genreIndex = games[i].genre[1];
    container.childNodes[i].className = checkboxes[genreIndex].checked ? "cell" : "hidden";
  }
}