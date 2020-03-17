function initGrid() {
  games.sort(function (a, b) { return a.names[0].toLowerCase() < b.names[0].toLowerCase() ? -1 : 1; });

  const cells = document.getElementById("cells");
  for (const game in games) {
    cells.appendChild(createCell(games[game]));
  }
}

function createCell(game) {
  const cell = document.createElement("div");
  cell.className = "cell";
  
  const imageName = getImageName(game.names[0].toLowerCase());
  const image = document.createElement("img");
  image.src = imageName;
  const link = document.createElement("a");
  link.href = imageName;
  link.target = "_blank";
  link.appendChild(image);
  cell.appendChild(link);

  for (const i in game.names) {
    const name = document.createElement("p");
    name.className = "title";
    name.innerText = game.names[i];
    cell.appendChild(name);
  }
  
  const details = document.createElement("p");
  details.innerText = game.genre.name + ", ";
  for (const i in game.platforms) {
    details.innerText += game.platforms[i].name;
    if (i < game.platforms.length - 1) {
      details.innerText += "/";
    }
  }
  details.innerText += ", " + game.release;
  cell.appendChild(details);

  return cell;
}

function getImageName(gameName) {
  let imageName = "img/";

  for (const i in gameName) {
    const code = gameName.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
      (code > 96 && code < 123)) { // lower alpha (a-z)
      imageName += gameName.charAt(i);
    }
  }

  return imageName + ".png";
}