export async function postTodo(task) {
    let response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(task),
    });

    let result = await response.json();
    console.log(result);
}