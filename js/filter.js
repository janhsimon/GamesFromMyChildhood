var nameFilter;
var genreFilter;
var platformFilter;

function initFilters() {
  nameFilter = new TextFilter("nameFilter");
  genreFilter = new ToggleFilter(genres, "genreFilter");
  platformFilter = new ToggleFilter(platforms, "platformFilter");
}

function updateFilters() {
  const cells = document.getElementById("cells").childNodes;
  let gamesShown = 0;
  for (const i in games) {
    if (!nameFilter.contains(games[i].names)) {
      cells[i].className = "hidden";
      continue;
    }

    if (!genreFilter.is(games[i].genre.id)) {
      cells[i].className = "hidden";
      continue;
    }

    if (!platformFilter.contains(games[i].platforms)) {
      cells[i].className = "hidden";
      continue;
    }

    cells[i].className = "cell";
    gamesShown++;
  }

  const info = document.getElementById("info");
  if (gamesShown == games.length) {
    info.textContent = "Showing all " + gamesShown + " games";
  }
  else {
    info.textContent = "Showing " + gamesShown + " of " + games.length + " games";
  }
}