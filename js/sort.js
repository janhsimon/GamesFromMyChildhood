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
  select.onchange = updateSort;
  form.appendChild(select);

  const name = document.createElement("option");
  name.value = "name";
  name.innerText = "Name";
  select.appendChild(name);

  const namerev = document.createElement("option");
  namerev.value = "namerev";
  namerev.innerText = "Name (reversed)";
  select.appendChild(namerev);

  const release = document.createElement("option");
  release.value = "release";
  release.innerText = "Release date";
  select.appendChild(release);

  const releaserev = document.createElement("option");
  releaserev.value = "releaserev";
  releaserev.innerText = "Release date (reversed)";
  select.appendChild(releaserev);

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