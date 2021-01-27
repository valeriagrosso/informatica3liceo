let tareas = JSON.parse(localStorage.getItem("Tareas"));
if (tareas == null) tareas = [];
function addTarea(fecha, materia, descripcion, realizada) {
  // PARA HACER
  // Crear un nuevo objeto llamado newTarea que tenga 5 propiedades:
  // id, fecha, materia, descripcion, realizada
  // Los valores de estas propiedades deben ser respectivamente:
  // nextId(), fecha, materia, descripcion, realizada
  //
  //
  // PARA HACER
  // añadir la nueva tarea a la variable tareas. Usar push
  //
  //
  // PARA HACER
  // Guarde el array tareas en el almacenamiento local.
  // Ayuda: JSON stringify
  //
  //
}
function deleteTarea(id) {
  // Función que elimina la tarea con el id dado
  let index = -1;
  for (let i = 0; i < tareas.length; i++) {
    if (tareas[i].id == id) index = i;
  }
  if (index != -1) tareas.splice(index, 1);

  // PARA HACER
  // Guarde el array tareas en el almacenamiento local.
  // Ayuda: JSON stringify
  //
  //
}
function modifyTarea(id, fecha, materia, descripcion, realizada) {
  for (tarea of tareas) {
    if (tarea.id == id) {
      tarea.fecha = fecha;
      tarea.materia = materia;
      tarea.descripcion = descripcion;
      tarea.realizada = realizada;
      break;
    }
  }
  // PARA HACER
  // Guarde el array tareas en el almacenamiento local.
  // Ayuda: JSON stringify

  //
}
function getTarea(id) {
  // PARA HACER
  // Busque en el array llamado tareas. Dar como resultado la tarea que tiene como
  // id el argumento de la función.
  //
}
function nextId() {
  // PARA HACER
  // Busque en el array de tareas el id máximo
  // De como resultado el máximo + 1
  // En caso de que no haya ninguna tarea todavía debe dar como resultado 1
  //
}
