function infoProduct(value) {
  fetch("../json/products.json")
    .then((response) => response.json()) // Convertir la respuesta a JSON
    // Aquí tienes acceso a los datos JSON en la variable 'data'
    .then((data) => {
      let dataOfProduct = data.find((e) => e.codigo === value); // Buscar el producto con el código
      let titleOfProduct = dataOfProduct.title; // Acceder al campo 'title' del producto
      console.log(titleOfProduct);
      let productTitleElement = document.getElementById("product_title");
      console.log(productTitleElement);
      productTitleElement.textContent = titleOfProduct; // Asignar el título del producto al contenido del h1
      window.location.href = "../html/P0000.html";
    });
}
