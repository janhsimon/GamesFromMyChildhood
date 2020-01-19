function populate() {
  const container = document.createElement('div');
  container.id = "container";

  for (let i = 0; i < games.length; i++) {
    const image = document.createElement('img');
    image.src = getImageName(games[i].title.toLowerCase());
    
    const title = document.createElement('p');
    title.className = "title";
    title.innerText = games[i].title;
    
    const genre = document.createElement('p');
    genre.innerText = games[i].genre;
    
    const cell = document.createElement('div');
    cell.id = "cell";
    cell.appendChild(image);
    cell.appendChild(title);
    cell.appendChild(genre);
    container.appendChild(cell);
  }

  document.body.appendChild(container);
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