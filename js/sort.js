function sortByName(a, b) {
  if (a.names[0].toLowerCase() < b.names[0].toLowerCase()) {
    return -1;
  }
  return 1;
}

function sortByNameReversed(a, b) {
  if (a.names[0].toLowerCase() > b.names[0].toLowerCase()) {
    return -1;
  }
  return 1;
}

function sortByReleaseDate(a, b) {
  if (a.release < b.release) {
    return -1;
  }
  return 1;
}

function sortByReleaseDateReversed(a, b) {
  if (a.release > b.release) {
    return -1;
  }
  return 1;
}

function initSort() {
  const form = document.getElementById("sort");

  const select = document.createElement("select");
  select.id = form.id + "Select";
  select.onchange = updateSort;

  const name = document.createElement("option");
  name.value = "name";
  name.innerText = "Name";

  const namerev = document.createElement("option");
  namerev.value = "namerev";
  namerev.innerText = "Name (reversed)";

  const release = document.createElement("option");
  release.value = "release";
  release.innerText = "Release date";

  const releaserev = document.createElement("option");
  releaserev.value = "releaserev";
  releaserev.innerText = "Release date (reversed)";
  
  const label = document.createElement("label");
  label.htmlFor = select.id;
  label.innerText = "Sort by:";
  
  form.appendChild(label);

  select.appendChild(name); 
  select.appendChild(namerev);
  select.appendChild(release);
  select.appendChild(releaserev);
  
  form.appendChild(select);

  games.sort(sortByName);
}

function updateSort() {
  if (this.value == "name") {
    games.sort(sortByName);
  }
  else if (this.value == "namerev") {
    games.sort(sortByNameReversed);
  }
  else if (this.value == "release") {
    games.sort(sortByReleaseDate);
  }
  else if (this.value == "releaserev") {
    games.sort(sortByReleaseDateReversed);
  }

  updateGrid();
  updateFilters();
}