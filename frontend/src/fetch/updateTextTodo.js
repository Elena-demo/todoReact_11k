export async function updateTextTodo(task) {
  await fetch("http://localhost:3000/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(task),
  });
}
