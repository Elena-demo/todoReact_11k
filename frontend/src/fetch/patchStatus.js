export async function patchStatus(id) {
  console.log(id);

  await fetch("http://localhost:3000/edit-status", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(id),
  });
}
