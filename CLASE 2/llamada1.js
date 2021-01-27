img = document.querySelector("#imgDia");
axios
  .get(
    "https://api.nasa.gov/planetary/apod?api_key=V2Q42eIDgecYd9vn6Ji3SeIa9rlxSs91BXV6od9i"
  )
  .then(function (response) {
    // Esto se ejecuta al tener éxito con la solicitud
    console.log(response.data.url);
    img.src = response.data.url;
  })
  .catch(function (error) {
    // Esto se ejecuta cuando hay un error con la solicitud
    console.log(error);
  })
  .then(function () {
    // Esto se ejecuta siempre
  });