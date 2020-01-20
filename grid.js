function populate() {
  const container = document.createElement('div');
  container.id = "container";

  for (let i = 0; i < games.length; i++) {
    container.appendChild(createCell(games[i]));
  }

  document.body.appendChild(container);
}

function createCell(game) {
  const imageName = getImageName(game.title.toLowerCase());

  const link = document.createElement('a');
  link.href = imageName;
  link.target = "_blank";

  const image = document.createElement('img');
  image.src = imageName;

  link.appendChild(image);
  
  const title = document.createElement('p');
  title.className = "title";
  title.innerText = game.title;

  const genre = document.createElement('p');
  genre.innerText = game.genre;

  const cell = document.createElement('div');
  cell.id = "cell";
  cell.appendChild(link);
  cell.appendChild(title);
  cell.appendChild(genre);
  return cell;
}

function getImageName(gameName) {
  let imageName = "img/";

  for (let i = 0; i < gameName.length; i++) {
    const code = gameName.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
      (code > 96 && code < 123)) { // lower alpha (a-z)
      imageName += gameName.charAt(i);
    }
  }

  return imageName + ".png";
}