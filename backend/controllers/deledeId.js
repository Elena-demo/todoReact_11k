import { connection } from "../connectDB.js";

//Метод POST
// export const deleteId = (req, res) => {
//   const id = req.body.id;
//   console.log(id);

//   connection.query(
//     "delete from todolist where id = ?",
//     id,
//     function (err, results) {
//       if (err) return console.log("ggggg", err);
//       else return res.json(results);
//     }
//   );
// };

//Метод DELETE
export const deleteId = (req, res) => {
  const id = req.params.id;

  connection.query(
    "delete from todolist where id = ?",
    id,
    function (err, results) {
      if (err) return console.log("ggggg", err);
      else return res.json(results);
    }
  );
};
