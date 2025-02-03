// Ruta del archivo JSON
const jsonUrl = "data.json";

// Función para cargar datos desde el JSON
fetch(jsonUrl)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al cargar el archivo JSON");
    }
    console.log("JSON cargado con éxito");
    return response.json();
  })
  .then((data) => {
    console.log("Datos obtenidos:", data); // Verifica si los datos se cargan correctamente
    displayData(data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Función para mostrar los datos en la tabla
function displayData(data) {
  const tableBody = document.getElementById("data-table-body");

  data.forEach((item) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = item.name;
    row.appendChild(nameCell);

    const ageCell = document.createElement("td");
    ageCell.textContent = item.age;
    row.appendChild(ageCell);

    const cityCell = document.createElement("td");
    cityCell.textContent = item.city;
    row.appendChild(cityCell);

    tableBody.appendChild(row);
  });
}
