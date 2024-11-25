import { connection } from "../connectDB.js";

export const select = async (req, res) => {
  connection.query("SELECT * FROM todolist", function (err, results) {
    if (err) return res.json(err);
    else {
      console.log(results);
      return res.json(results);
    }
  });
};
