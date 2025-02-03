// Ruta del archivo JSON
const jsonUrl = "prueba.json";

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
    displayData(data.frutas);

    // Llamar a la función de filtrado
    document
      .getElementById("filter-button")
      .addEventListener("click", function () {
        const filterValue = document
          .getElementById("filter-input")
          .value.toLowerCase();
        const filteredData = data.frutas.filter((item) => {
          return item.nombre.toLowerCase().includes(filterValue); // Filtrar por nombre
        });
        displayData(filteredData); // Mostrar los datos filtrados
      });
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Función para mostrar los datos en la tabla
function displayData(data) {
  const tableBody = document.getElementById("data-table-body");
  tableBody.innerHTML = ""; // Limpiar la tabla antes de agregar nuevas filas

  data.forEach((item) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = item.nombre;
    row.appendChild(nameCell);

    const colorCell = document.createElement("td");
    colorCell.textContent = item.color;
    row.appendChild(colorCell);

    const pesoCell = document.createElement("td");
    pesoCell.textContent = item.peso_promedio_gramos;
    row.appendChild(pesoCell);

    const tropicalCell = document.createElement("td");
    tropicalCell.textContent = item.es_tropical ? "Si" : "No";
    row.appendChild(tropicalCell);

    const vitaminasCell = document.createElement("td");
    vitaminasCell.textContent = item.vitaminas;
    row.appendChild(vitaminasCell);

    tableBody.appendChild(row);
  });
}
// Función para inicializar el filtro con los nombres de las frutas
function initializeFilter(data) {
  const filterSelect = document.getElementById("filter-names");

  // Obtener todos los nombres de las frutas
  const fruitNames = data.map((item) => item.nombre);

  // Eliminar opciones repetidas
  const uniqueFruitNames = [...new Set(fruitNames)];

  // Rellenar el desplegable con los nombres únicos
  uniqueFruitNames.forEach((name) => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    filterSelect.appendChild(option);
  });

  // Evento del botón para filtrar los datos
  document
    .getElementById("filter-button")
    .addEventListener("click", function () {
      const selectedName = filterSelect.value;

      // Filtrar los datos según el nombre seleccionado
      const filteredData = selectedName
        ? data.filter((item) => item.nombre === selectedName)
        : data;

      // Mostrar los datos filtrados
      displayData(filteredData);
    });
}
