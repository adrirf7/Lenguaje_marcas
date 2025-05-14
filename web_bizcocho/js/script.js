var miReceta = {
  receta: "Bizcocho de Cola Cao",
  elaboracion:
    "Mezcla todos los ingredientes con mucho cariño, vuelca la masa en un molde para bizcocho manchado de mantequilla y hornea durante 40 minutos a 190 grados.",
  ingredientes: [
    { ingrediente: "Huevos", cantidad: 3, medida: "unidad" },
    { ingrediente: "Yogurt natural", cantidad: 1, medida: "unidad" },
    { ingrediente: "Levadura", cantidad: 1, medida: "sobre" },
    { ingrediente: "Azúcar", cantidad: 2, medida: "Medidas de vaso de yogurt" },
    { ingrediente: "Sal", cantidad: 1, medida: "Pizca" },
    { ingrediente: "Harina", cantidad: 2, medida: "Medidas de vaso de yogurt" },
    {
      ingrediente: "Cola cao",
      cantidad: 1,
      medida: "Medida de vaso de yogurt",
    },
    { ingrediente: "Aceite", cantidad: 1, medida: "Medida de vaso de yogurt" },
  ],
};

window.onload = mostrarReceta;

function mostrarReceta() {
  document.getElementById("receta").innerText = "Receta: " + miReceta.receta;
  document.getElementById("elaboracion").innerText = miReceta.elaboracion;

  const listaIngredientes = document.getElementById("ingredientes");
  miReceta.ingredientes.forEach(function (item) {
    let li = document.createElement("li");
    li.textContent = `${item.cantidad} ${item.medida} de ${item.ingrediente}`;
    listaIngredientes.appendChild(li);
  });
}
