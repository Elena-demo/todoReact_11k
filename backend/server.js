import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { insert } from "./controllers/insert.js";
import { selectId } from "./controllers/selectId.js";
import { select } from "./controllers/select.js";
import { deleteId } from "./controllers/deledeId.js";
import { update } from "./controllers/update.js";
import { updateStatus } from "./controllers/updateStatus.js";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.get("/", select);
app.get("/edit/:id", selectId);
app.post("/edit", update);
app.patch("/edit-status", updateStatus);
app.post("/", insert);
// app.post("/delete", deleteId);
app.delete("/delete/:id", deleteId);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
