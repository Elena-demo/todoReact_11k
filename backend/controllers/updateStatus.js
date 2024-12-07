import { connection } from "../connectDB.js";

export const updateStatus = async (req, res) => {
  const id = req.body.id;
  console.log(id);

  const sql = "update todolist set status = true where id = ?";
  connection.query(sql, id, function (err, results) {
    if (err) {
      console.log("update");
      return res.json(err);
    } else console.log("Данные обновлены");
  });
  return res.json(req.body);
};
