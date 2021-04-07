//DEPENDENCIAS 
const app = require('./servidor/server')
const multer = require('multer')
const Path = require('path')
const mysql = require('mysql');

//CONEXÃO COM O BANCO DE DADOS 
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'lista_vue'
});

//UPLOAD DE IMAGEM

const storage = multer.diskStorage({

    destination: (req, file, res) => {
        res(null,"uploads/")
    },
    filename: (req, file, res) => {
        res(null, Date.now() + file.originalname)
    }
})

const upload = multer({ 
   storage,
    /*limits: {
        fileSize: 1024 * 1024 * 5
    }*/
})

//ROTAS DA API 
app.get('/listar', function(req, res) {

    conn.query('SELECT * FROM tb_tarefas', function(erro, result){
    return res.send(result)
     
    });
})

app.post('/cadastrar', upload.single('img'), (req, res) => {

const corpo = req.body;
const imagem = req.file;

conn.query(`insert into tb_tarefas (nome, dia_tarefa, img) values ('${corpo.nome}','${corpo.dia_semana}','${imagem.filename}')`)

return res.send()

})

app.delete('/deletar/:id', (req, res) => {
    const param = (req.params)
    conn.query(`delete from tb_tarefas where id=${param.id}`)
    return res.send()
})

app.put('/editar/:id', (req,res) => {
    const corpo = req.body;
    const param = (req.params)
    conn.query(`update tb_tarefas set nome = '${corpo.nome}', dia_tarefa = ${corpo.dia_semana} where id=${param.id}`)
    return res.send()
})
 
app.listen(3000, function(){
    console.log('servidor rodando')
});

