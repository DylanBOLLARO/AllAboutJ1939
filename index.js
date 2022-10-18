const input = document.querySelector(`input[type="file"]`);
const output = document.querySelector(".output");

let arrayID = [],
  arrayPGN = [],
  arrayPGNDEC = [],
  tsc1 = false,
  dataJSON = [];

(async function () {
  const response = await fetch("./dataPGN.json");
  dataJSON = await response.json();
  // console.log(dataJSON);
})();

input.addEventListener("change", () => {
  const reader = new FileReader();

  tsc1 = false;

  reader.readAsText(input.files[0]);
  reader.onload = () => {
    reader.result.split(/[\n\r]+/).map((a, index) => {
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
                            <div class="elementOfId corps card-body">
                            </div>
                        </div>
                        `;

      reader.result.split(/[\n\r]+/).map((c) => {
        if (c.substr(26, 2) == a) {
          if (!arrayPGN.includes(c.substr(22, 4))) {
            arrayPGN.push(c.substr(22, 4));
            arrayPGNDEC.push(parseInt(c.substr(22, 4), 16));
          }
        }
      });
      let cellules = document.querySelectorAll(".elementOfId");

      // console.log(dataJSON["0000"].Description);

      arrayPGNDEC
        .sort((a, b) => a - b)
        .map((a) => {
          if (Object.hasOwn(dataJSON, a)) {
            console.log(a);
            console.log(dataJSON);
            cellules.item(index).innerHTML += `
              <div class=" card text-start mt-3 mb-3">
                  <div class="card-header  text-dark">PGN : <span class=" fs-4 fw-bold text-primary">${a
                    .toString(16)
                    .toUpperCase()}</span>
                  </div>
                  <div class="card-header">${dataJSON[a].Description}</div>
              </div>
              `;
          } else {
            cellules.item(index).innerHTML += `
            <div class=" card text-start mt-3 mb-3">
                <div class="card-header  text-dark">PGN : <span class=" fs-4 fw-bold text-primary">${a
                  .toString(16)
                  .toUpperCase()}</span>
                </div>
                <div class="card-header"></div>
            </div>
            `;
          }
        });

      arrayPGNDEC = [];
    });

    if (tsc1) {
      heyye.innerHTML += `
      <h7 class="card-title">La trame TSC1 a été detecté sur la communication</h7>`;
    }
  };
});
