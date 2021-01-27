btn = document.querySelector("#btnDescargar");
img = document.querySelector("#imgDia");

async function getData() {
  response = await axios.get(
    "https://api.nasa.gov/planetary/apod?api_key=V2Q42eIDgecYd9vn6Ji3SeIa9rlxSs91BXV6od9i"
  );
  console.log(response);
  img.src = response.data.url;
}
// getData()
btn.onclick = getData;