const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
//let sql;

const app = express();
const PORT = 3000;

// Permitir CORS
app.use(cors());


//Conecta na database 
const db = new sqlite3.Database("./server/veiculos.db",(err) => {
    if (err) {
        console.error("Erro ao conectar ao banco de dados:", err.message);
    } else {
        console.log("Conectado ao banco de dados SQLite.");
    }
});
//Tabela criada
//sql = 'CREATE TABLE veiculos(id INTEGER PRIMARY KEY,name TEXT NOT NULL,modelo TEXT NOT NULL, carga INTEGER NOT NULL)';
//db.run(sql);

//Caso queira deletar a tabela
//db.run("DROP TABLE veiculos");


//da INSERT na tabela
//sql = 'INSERT INTO veiculos(name,modelo,carga) VALUES (?,?,?)';
//db.run(sql,
//    ["Vovó Turbo","Tesla","0"],
//    (err)=>{
//        if (err) return console.error (err.message);
//});

//Quarry na tabela
app.get("/veiculos", (req, res) => {
    const query = "SELECT * FROM veiculos";
    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500).send("Erro ao buscar os veículos.");
        } else {
            res.json(rows);
        }
    });
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});