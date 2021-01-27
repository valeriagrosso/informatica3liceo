let numParametros = Object.keys(parameters).length;
console.log(`${numParametros} parámetros recibidos`);
console.log("Los parámetros son:");
console.log(parameters);

if (numParametros == 4) {
  // PARA HACER
  // Use la función addTarea con los argumentos correctos para crear
  // una nueva tarea. Los argumentos los debe tomar de los  parámetros.
  //
} else if (numParametros == 5) {
  // PARA HACER
  // Use la función modifyTarea con los argumentos correctos
  // para editar la tarea del id recibido en los parámetros. Los argumentos los debe tomar de los  parámetros.
  //
}
window.history.pushState({}, document.title, "index.html");
// console.log(document.title);

let deleteForm = document.querySelector("#deleteForm");
deleteForm.onsubmit = () => {
  deleteTarea(document.querySelector("#deleteForm input[name='id']").value);
  updateTableHtml(tareas);
};

updateTableHtml(tareas);
