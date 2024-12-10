import { connection } from "../connectDB.js";

export const updateStatus = async (req, res) => {
  const id = req.body.id;
  const status = req.body.status;
  console.log(id, status);

  const sql = "update todolist set status = ? where id = ?";
  connection.query(sql, [status, id], function (err, results) {
    if (err) {
      console.log("update");
      return res.json(err);
    } else console.log("Данные обновлены");
  });
  return res.json(req.body);
};
