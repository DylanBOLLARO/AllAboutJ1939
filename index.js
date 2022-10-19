const input = document.querySelector(`input[type="file"]`);
const output = document.querySelector(".output");

let arrayID = [],
  arrayPGN = [],
  arrayPGNDEC = [],
  tsc1 = false,
  dataJSON = [];

function getEmpId(element) {
  let empId = element.getAttribute("id");
  let emppgn = element.getAttribute("data-pgn");
  let pos = element.getAttribute("nb");
  // console.log(empId);
  // console.log(emppgn);
  // console.log(dataJSON[emppgn].SPN[empId]);
  console.log(Object.keys(dataJSON[emppgn].SPN[empId]));
  console.log(Object.values(dataJSON[emppgn].SPN[empId]));
  // console.log(usuedme);
  // console.log(usuedme);
  for (let i = 0; i < 3; i++) {}
  usuedme[pos].innerHTML = `
    <table class="table table-striped">
      <thead>
        <tr class=" fs-4 outline-primary">
          <th scope="col">${Object.keys(dataJSON[emppgn].SPN[empId])[0]}</th>
          <th scope="col">${Object.keys(dataJSON[emppgn].SPN[empId])[1]}</th>
          <th scope="col">${Object.keys(dataJSON[emppgn].SPN[empId])[2]}</th>
        </tr>
      </thead>
      <tbody class="rounded table-hover">
        <tr>
        <th scope="col">${Object.values(dataJSON[emppgn].SPN[empId])[0]}</th>
        <th scope="col">${Object.values(dataJSON[emppgn].SPN[empId])[1]}</th>
        <th scope="col">${Object.values(dataJSON[emppgn].SPN[empId])[2]}</th>
        </tr>
      </tbody>
    </table>`;

  // usuedme[pos].innerHTML = `<h1>${Object.keys(dataJSON[emppgn].SPN[empId])}</h1>
  // <h2>${Object.values(dataJSON[emppgn].SPN[empId])}</h2>`;
}

(async function () {
  const response = await fetch("./dataPGN.json");
  dataJSON = await response.json();
})();

input.addEventListener("change", () => {
  const reader = new FileReader();

  tsc1 = false;

  reader.readAsText(input.files[0]);
  reader.onload = () => {
    reader.result.split(/[\n\r]+/).map((a) => {
      if (a.indexOf("/", 2) == 2) {
        if (!arrayID.includes(a.substr(26, 2))) {
          arrayID.push(a.substr(26, 2));
        }
      }
    });

    output.innerHTML = `<div class="card text-center  mt-5 mb-5">
                            <div class="card-header"><h5>Information générale</h5></div>
                                <div id="heyye" class="d-flex flex-column text-start card-body">
                                    <h7 class="card-title">Il y a <span class="fw-bold"> ${arrayID.length} </span> appareil(s) communicant(s) sur le bus CAN.</h7>
                                </div>
                        </div>`;

    arrayID.map((a, index) => {
      arrayPGN = [];
      output.innerHTML += `
                        <div class="  card text-center mt-5 mb-5">
                            <div class="card-header">
                                <ul class="nav nav-pills card-header-pills">
                                    <li class="nav-item">
                                    ID n°${
                                      index + 1
                                    } :   <span class="fs-4 fw-bold text-primary">${a}<span>
                                    </li>
                                </ul>
                            </div>
                            <div class="elementOfId card-body">
                            </div>
                        </div>
                        `;

      reader.result.split(/[\n\r]+/).map((c) => {
        if (c.substr(26, 2) == a) {
          if (!arrayPGN.includes(c.substr(22, 4))) {
            arrayPGN.push(c.substr(22, 4));
            arrayPGNDEC.push(parseInt(c.substr(22, 4), 16));
            if (c.substr(22, 4) == "0000") {
              tsc1 = true;
            }
          }
        }
      });
      let cellules = document.querySelectorAll(".elementOfId");

      arrayPGNDEC
        .sort((a, b) => a - b)
        .map((h, azgeuaz) => {
          function toto(id) {
            Object.keys(dataJSON[h].SPN).map((l, olol) => {
              // console.log(azgeuaz);
              // console.log(olol);
              // console.log(index);
              id.innerHTML += `
              
                            <button id="${l}" onclick="getEmpId(this)" data-pgn="${h}" nb="${azgeuaz}" type="button" class="btn  btn-outline-primary">SPN : ${l}</button>
                          `;
            });
          }

          if (Object.hasOwn(dataJSON, h)) {
            cellules.item(index).innerHTML += `
            <div id="mplokiju" class=" card text-start mt-3 mb-3">
                <div class="card-header  text-dark">PGN : <span class=" fs-4 fw-bold text-primary">${h
                  .toString(16)
                  .toUpperCase()}</span>
                </div>
                <div class="card-header">${dataJSON[h].Description}</div>      
                <div id="testy${
                  index + azgeuaz
                }"class="btn-group text-bg-light" role="group" aria-label="Basic outlined example">           
                </div>
                <div id="usuedme" class="card-header"></div>  
            </div>
          `;

            toto(document.getElementById(`testy${index + azgeuaz}`));
          } else {
            cellules.item(index).innerHTML += `
            <div class=" card text-start mt-3 mb-3">
                <div class="card-header  text-dark">PGN : <span class=" fs-4 fw-bold text-primary">${h
                  .toString(16)
                  .toUpperCase()}</span>
                </div>
                <div class="card-header"></div>      
                <div id="testy${index}"class="btn-group text-bg-light" role="group" aria-label="Basic outlined example">  
                <div id="usuedme" class="card-header"></div>  
            </div>
            `;
          }
          arrayPGNDEC = [];
        });
    });

    if (tsc1) {
      heyye.innerHTML += `<h7 class="card-title">La trame TSC1 a été detecté sur la communication</h7>`;
    }
  };
});
