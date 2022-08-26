const express = require("express");
const port = 7000;
const Works = require("./Works");

const app= express();

app.use(express.json());
const work = new Works();


app.use(express.json());


app.get("/", (req, res) => {
    try {
        console.log(this.work);
        res.send(work.getWorks())
    } catch (err) {
        res.status(404).send("Work does not exists")
    }
});


app.post("/",(req,res)=>{
    try {
        const  data  = req.body;
        
        res.send(work.addWorks(data));
    } catch (err) {
        res.status(404).send("Internal Server error");
    }
});

app.delete('/:id', (req, res) => {
    try {
        const { id } = req.params
        res.status(200).send(work.deleteWorks(id));
    } catch (err) {
        res.status(404).send("Work not exist.");
    }
})

app.put("/", (req, res) => {
    try {
        const  work  = req.body
        res.send(work.putProducts(work));
    } catch (error) {
        res.status(500).send("Internal Server Error");
    }
})

app.listen(port, () => {
    console.log("Server is running at port 7000");
})