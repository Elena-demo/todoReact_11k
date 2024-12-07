import { connection } from "../connectDB.js";

export const update = async (req, res) => {
  const data = req.body;
  console.log(data);
  const todo = [data.text, data.id];
  const sql = "update todolist set todo = ? where id = ?";
  connection.query(sql, todo, function (err, results) {
    if (err) {
      console.log("update");
      return res.json(err);
    } else console.log("Данные обновлены");
  });
  return res.json(req.body);
};
