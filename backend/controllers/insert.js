import { connection } from "../connectDB.js";

export const insert = async(req, res) => {
    const data = req.body;
    console.log(data, "5555555555");
    const todo = [data.todo];
    const sql = "insert into todolist (todo) values (?)";
    connection.query(sql, todo, function(err, results) {
        if (err) {
            console.log(err);
            return res.json(err);
        } else {
            console.log("Данные добавлены");
            return res.json(req.body);
        }
    });
};