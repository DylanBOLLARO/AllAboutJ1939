const reader = new FileReader();
const input = document.querySelector(`input[type="file"]`);
const output = document.querySelector(".output");

let arrayID = [],
  arrayPGN = [];

(async () => {
  const response = await fetch("./dataPGN.json");
  dataJSON = await response.json();
})();

input.addEventListener("change", () => {
  reader.readAsText(input.files[0]);
  reader.onload = async () => {
    await reader.result.split(/[\n\r]+/).map((fichierLigneParLigne) => {
      if (fichierLigneParLigne.length > 50) {
        if (
          fichierLigneParLigne.indexOf("/", 2) == 2 &&
          fichierLigneParLigne.indexOf("/", 5) == 5
        ) {
          if (!arrayID.includes(fichierLigneParLigne.substr(26, 2))) {
            arrayID.push(fichierLigneParLigne.substr(26, 2));
          }
        }
      }
    });

    arrayID.map((ID, indexID) => {
      output.innerHTML += `
      <div id="${indexID}" class="text-bg-dark py-1 px-4 rounded border border-secondary mt-5 mb-5">
      <div class="row align-items-start">
      <div class="col-2">
          <div class="card-header fs-4 fw-bold text-secondary">ID n°${
            indexID + 1
          } : <span class=" text-danger">${ID}
          </div>
          </div>
          <div class="col">
          <div class="card-header fs-4 fw-bold text-secondary">ID n°${
            indexID + 1
          } : <span class=" text-danger">${ID}
          </div>
          </div>
          </div>
          <div class="container-pgn card-body">
          </div>
      </div>
      `;
    });
  };
  console.log(arrayID);
});
