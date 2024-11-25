import { connection } from "../connectDB.js";

export const deleteId = (req, res) => {
    const id = req.body.params;

    console.log(id);

    connection.query(
        "delete from todolist where id = ?", [id],
        function(err, results) {
            if (err) return console.log("ggggg", err);
            else return res.json(results);
        }
    );
};