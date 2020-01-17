function main() {
  const table = document.createElement('table');

  let row;
  for (let game = 0; game < games.length; game++) {
    if (game % 4 == 0) {
      if (row) {
        table.appendChild(row);
      }
      row = document.createElement('tr');
    }

    const gameName = games[game];
    const cell = document.createElement('td');

    const image = document.createElement('img');
    image.src = "img/" + getImageName(gameName.toLowerCase());
    cell.appendChild(image);

    const title = document.createElement('p');
    title.innerText = gameName;
    cell.appendChild(title);

    row.appendChild(cell);
  }
  table.appendChild(row);

  document.body.appendChild(table);
}

function getImageName(gameName) {
  let out = "";

  for (var i = 0; i < gameName.length; i++) {
    const code = gameName.charCodeAt(i);
    if ((code > 47 && code < 58) || // numeric (0-9)
        (code > 96 && code < 123)) { // lower alpha (a-z)
      out += gameName.charAt(i);
    }
  }

  return out + ".png";
}