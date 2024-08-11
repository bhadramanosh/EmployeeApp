const express = require("express");
const cors = require("cors");
const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require('./connection');


const BlogModel = require("./model/EmployeeData"); 


app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await new BlogModel(req.body).save();
    res.send({ message: "Employee added", data: result });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error adding employee" });
  }
});


app.get("/employees", async (req, res) => {
  try {
    const employees = await BlogModel.find();
    res.send(employees);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error fetching employees" });
  }
});

app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
