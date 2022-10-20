const input = document.querySelector(`input[type="file"]`);
const output = document.querySelector(".output");

let arrayID = [],
  arrayPGN = [],
  arrayPGNDEC = [],
  tsc1 = false,
  dataJSON = [];

let knowF004, know0;
let indexID;
function getEmpId(element) {
  let empId = element.getAttribute("id");
  let emppgn = element.getAttribute("data-pgn");
  let trtr = document.getElementById(`${empId}`);

  trtr.parentElement.parentElement.querySelector("#usuedme").innerHTML = `
    <table class="table table-striped m-0">
      <thead>
        <tr class=" fs-4 outline-primary">
          <th scope="col"><h4>${
            Object.keys(dataJSON[emppgn].SPN[empId])[0]
          } <span class="px-3 text-primary text-nowrap bg-light border">${empId}</span></h4></th>
          <th scope="col"><h4>${
            Object.keys(dataJSON[emppgn].SPN[empId])[1]
          }</h4</th>
          <th scope="col"><h4>${
            Object.keys(dataJSON[emppgn].SPN[empId])[2]
          }</h4</th>
        </tr>
      </thead>
      <tbody class="table-hover">
        <tr>
        <th class="w-50 scope="col"><p class="m-0" style="font-weight: 500">${
          Object.values(dataJSON[emppgn].SPN[empId])[0]
        }</p></th>
        <th scope="col"><p class="m-0" style="font-weight: 500">${
          Object.values(dataJSON[emppgn].SPN[empId])[1]
        }</p></th>
        <th scope="col"><p class="m-0" style="font-weight: 500">${
          Object.values(dataJSON[emppgn].SPN[empId])[2]
        }</p></th>
        </tr>
      </tbody>
    </table>`;
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

    output.innerHTML = `<div class="card text-center  my-3">
                            <div class="card-header"><h5>Information générale</h5></div>
                                <div id="heyye" class="d-flex flex-column text-start card-body">
                                    <h7 class="card-title">Il y a <span class="fw-bold"> ${arrayID.length} </span> appareil(s) communicant(s) sur le bus CAN.</h7>
                                </div>
                        </div>`;

    arrayID.map((a, index) => {
      indexID = index;

      arrayPGN = [];
      output.innerHTML += `
                        <div id="id-global-${index}" class="  card text-center mt-5 mb-5">
                            <div class="card-header">
                                <ul class="nav nav-pills card-header-pills">
                                    <li class="nav-item">
                                    ID n°${
                                      index + 1
                                    } :   <span class="fs-4 fw-bold text-primary">${a}<span>
                                    </li>
                                </ul>
                            </div>
                            <div class="container-pgn card-body">
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
      let cellules = document.querySelectorAll(".container-pgn");

      arrayPGNDEC
        .sort((a, b) => a - b)
        .map((h, azgeuaz) => {
          function toto(id) {
            Object.keys(dataJSON[h].SPN).map((l) => {
              if (l == 190) {
                knowF004 = true;
              }
              id.innerHTML += `              
                          <button id="${l}" onclick="getEmpId(this,indexID)" data-pgn="${h}" type="button" class="btn  btn-outline-primary">SPN : ${l}</button>
                          `;
            });
          }

          if (Object.hasOwn(dataJSON, h)) {
            cellules.item(index).innerHTML += `
            <div id="pgn-${azgeuaz}" number-pgn"hey" class=" card text-start mt-3 mb-3">
                <div class="card-header  text-dark">PGN : <span class=" fs-4 fw-bold text-primary">${h
                  .toString(16)
                  .toUpperCase()}</span>
                </div>
                <div class="card-header">${dataJSON[h].Description}</div>      
                <div id="testy${
                  index + azgeuaz
                }"class=" px-2 py-1 text-bg-light" role="group" aria-label="Basic outlined example">           
                </div>
                <div id="usuedme" class=""></div>  
            </div>
          `;
            if (
              document.querySelector(
                `#id-global-${index} #pgn-${azgeuaz} #testy${index + azgeuaz}`
              ) != null
            ) {
              toto(
                document.querySelector(
                  `#id-global-${index} #pgn-${azgeuaz} #testy${index + azgeuaz}`
                )
              );
            }
          } else {
            cellules.item(index).innerHTML += `
            <div id="pgn-${
              index + azgeuaz
            }" number-pgn"hey" class=" card text-start mt-3 mb-3">
                <div class="card-header  text-dark">PGN : <span class=" fs-4 fw-bold text-primary">${h
                  .toString(16)
                  .toUpperCase()}</span>
                </div>
                <div class="card-header"></div>      
                <div id="testy${
                  index + azgeuaz
                }"class="btn-group text-bg-light" role="group" aria-label="Basic outlined example">           
                </div>
                <div id="usuedme" class="card-header"></div>  
            </div>
          `;
          }
          arrayPGNDEC = [];
        });
    });

    if (tsc1) {
      document
        .getElementById(898)
        .parentElement.parentElement.parentElement.parentElement.classList.add(
          `bg-success`,
          `bg-opacity-10`,
          `border-success`
        );
      heyye.innerHTML += `<h7 class="card-title">La trame TSC1 a été detecté sur la communication</h7>`;
      heyye.innerHTML += `<span class="text-success bg-success bg-opacity-10 border-success">l'ID en vert est le controleur moteur</span>`;
      document
        .getElementById(898)
        .classList.add(
          `text-success`,
          `bg-success`,
          `bg-opacity-10`,
          `border-success`
        );
    }
    if (knowF004) {
      heyye.innerHTML += `<span class="text-primary bg-primary bg-opacity-10 border-primary">l'ID en bleu est l'ECU moteur</span>`;
      document
        .getElementById(190)
        .classList.add(
          `text-primary`,
          `bg-primary`,
          `bg-opacity-10`,
          `border-primary`
        );

      document
        .getElementById(190)
        .parentElement.parentElement.parentElement.parentElement.classList.add(
          `bg-primary`,
          `bg-opacity-10`,
          `border-primary`
        );
    }
  };
});
