import { connection } from "../connectDB.js";

export const select = async (req, res) => {
  connection.query(
    "SELECT * FROM todolist order by status",
    function (err, results) {
      if (err) return res.json(err);
      else {
        console.log("вызов функции2", results);
        return res.json(results);
      }
    }
  );
};
