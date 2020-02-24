var express = require("express")
var cors = require("cors")
var app = express();


app.use(cors())

app.get("/", (req, res) => {

    switch (req.query.rq) {
        case "all":
            var exec = require("child_process").exec
            exec("python index.py all", (error, stdout, stderr) => {
                res.send(stdout);
                //console.log(stdout)
            })
            break;

        case "id":
            var exec = require("child_process").exec
            exec("python index.py id", (error, stdout, stderr) => {
                res.send(stdout);
                //console.log(stdout)
            })
            break;

        case "mes":
            var exec = require("child_process").exec
            exec("python index.py mes", (error, stdout, stderr) => {
                res.send(stdout);
                //console.log(stdout)
            })
            break;
        case "mesfecha":
            var exec = require("child_process").exec
            exec("python index.py mesfecha", (error, stdout, stderr) => {
                res.send(stdout);
                //console.log(stdout)
            })
            break;
        case "ano":
            var exec = require("child_process").exec
            exec("python index.py ano", (error, stdout, stderr) => {
                res.send(stdout);
                //console.log(stdout)
            })
            break;


        case "compania":
            var exec = require("child_process").exec
            exec("python index.py compania", (error, stdout, stderr) => {
                res.send(stdout);
                //console.log(stdout)
            })
            break;

        case "negocio":
            var exec = require("child_process").exec
            exec("python index.py negocio", (error, stdout, stderr) => {
                res.send(stdout);
                //console.log(stdout)
            })
            break;

        case "pais":
            var exec = require("child_process").exec
            exec("python index.py pais", (error, stdout, stderr) => {
                res.send(stdout);
                //console.log(stdout)
            })
            break;

        case "valor":
            var exec = require("child_process").exec
            exec("python index.py valor", (error, stdout, stderr) => {
                res.send(stdout);
                //console.log(stdout)
            })
            break;

        case "derivados":
            var exec = require("child_process").exec
            exec("python index.py derivados", (error, stdout, stderr) => {
                res.send(stdout);
                //console.log(stdout)
            })
            break;

        case "compradora":
            var exec = require("child_process").exec
            exec("python index.py compradora", (error, stdout, stderr) => {
                res.send(stdout);
                //console.log(stdout)
            })
            break;
        case "search":
            if (req.query.query) {
                var exec = require("child_process").exec
                exec("python index.py search "+ req.query.query, (error, stdout, stderr) => {
                    res.send(stdout);
                    //console.log(stdout)
                })
            }
            break;
        default:
            res.send("error")
            break;
    }

})



app.listen(3000, function () {
    console.log("Esscuchando")
})