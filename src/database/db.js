const sqlite3 = require("sqlite3").verbose()

const db = new sqlite3.Database("./src/database/database.db")

module.exports = db;
// db.serialize(() => {
//     // CRIAR UMA TABELA

//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
    
//     `)

//     //INSERIR DADOS NA TABELA
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);`
    
//     const values = [
//         "https://images.unsplash.com/photo-1567393528677-d6adae7d4a0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
//         "Colectoria",
//         "Guilherme Gemballa, Jardim América",
//         "Número 260",
//         "Santa Catarina",
//         "Rio do Sul",
//         "Resíduos Eletrônicos, Lâmpadas"
//     ]

            
//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }

//         console.log("Cadastro com sucesso")
//         console.log(this)
//     }

//     // db.run(query, values, afterInsertData)


//     //CONSULTAR DADOS
//     db.all(`SELECT * FROM places`, function(err,row){
//         if(err){
//             return console.log(err)
//         }
//         console.log("Aqui estão seus registros: ")
//         console.log(rows)
//     })

//     // DELETAR DADOS
//     // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err,row) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Registro deletado com sucesso!")
       
//     // })
// })