
const cors = require('cors');

var cookieParser = require('cookie-parser');

const express = require('express');
const { produto } = require('./models');

const app = express();

app.set('view engine', 'ejs');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use(cookieParser());

app.get('/listar', async function (req,res){
  const produtos = await produto.findAll();
  res.json(produtos);
})

app.get('/cadastro', async function (req,res){
  res.render("cadastro")
})

app.post('/cadastro', async function (req,res){
  const produto_ = await produto.create(req.body)
  res.json(produto_)
})

app.get('/', async function(req, res){
  res.render("home")
})


app.listen(3000, function() {
  console.log('App de Exemplo escutando na porta 3000!')
});