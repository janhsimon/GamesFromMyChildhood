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
/*const invisibleStyleClassName = "hidden";

function initVerbs() {
  const table = document.getElementById('verbTable');

  for (let verb = 0; verb < verbs.length; verb++) {
    const row = document.createElement('tr');
    for (let verbForm = 0; verbForm < verbs[verb].length; verbForm++) {
      const cell = document.createElement('td');
      cell.innerText = verbs[verb][verbForm];
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  updateVerbCountLabel(verbs.length);
}

function filterVerbs() {
  const table = document.getElementById('verbTable');
  const rows = table.getElementsByTagName('tr'); // first row is the headers
  const filterString = document.getElementById('filterInput').value;

  let verbsInFilter = 0;
  for (let verb = 0; verb < verbs.length; verb++) {
    const row = rows[verb + 1]; // ignore the first row with the headers
    if (isVerbInFilter(filterString, verbs[verb])) {
      row.classList.remove(invisibleStyleClassName);
      verbsInFilter++;
    }
    else {
      row.className = invisibleStyleClassName;
    }
  }

  updateVerbCountLabel(verbsInFilter);
}

function isVerbInFilter(filterString, verbForms) {
  const filterWords = filterString.split(',');
  for (let filterWord = 0; filterWord < filterWords.length; filterWord++) {
    const trimmedFilterWord = filterWords[filterWord].trim();
    // if (trimmedFilterWord.length <= 0) {
    //   continue;
    // }
    let anyVerbFormInFilter = false;
    for (let verbForm = 0; verbForm < verbForms.length; verbForm++) {
      if (!verbForms[verbForm].includes(trimmedFilterWord)) {
        anyVerbFormInFilter = true;
        break;
      }
    }

    if (!anyVerbFormInFilter) {
      return false
    }
  }

  return true;
}

function updateVerbCountLabel(verbsInFilter) {
  const label = document.getElementById('verbCountLabel');

  if (verbsInFilter == verbs.length) {
    label.innerText = "Showing all " + verbs.length + " verbs.";
  }
  else {
    label.innerText = "Showing " + verbsInFilter + " of " + verbs.length + " verbs.";
  }
}*/