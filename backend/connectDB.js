import mysql from "mysql2";

export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "todos",
  password: "1234",
});
connection.connect(function (err) {
  if (err) {
    return console.error("Ошибка: " + err.message);
  } else {
    console.log("Подключение к серверу MySQL успешно установлено");
  }
});

// connection.query("SELECT * FROM todolist", function (err, results, fields) {
//   console.log(err);
//   console.log(results); // собственно данные
//   console.log(fields); // мета-данные полей
// });
