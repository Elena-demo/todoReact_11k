export function deleteTodoPost(id) {
  console.log(id);
  //Метод POST
  //   await fetch("http://localhost:3000/delete", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify({ id }),
  //   });

  //Метод DELETE
  fetch(`http://localhost:3000/delete/${id}`, {
    method: "DELETE",
  });
}
