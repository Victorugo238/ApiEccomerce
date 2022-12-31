const express = require("express");
const app = express();
const port = 3000;
const adminRouter = require("./src/routers/adminRouter");
const productRouter = require("./src/routers/productRouter");

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }))


app.use("/admin", adminRouter);
app.use("/products",productRouter);

app.listen(port, () => {
    console.log("estamos rodando na porta 3000");
})