var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

const lancamentoRouter = require('./routes/lancamento')
const categoriarouter = require('./routes/categoria'); 
const receitarouter = require('./routes/positivo')
const metaRouter = require('./routes/meta');
const contaRouter = require('./routes/conta');
const bancoRouter = require('./routes/banco');
const objetivoRouter = require('./routes/objetivo')
const despesaRouter = require('./routes/despesa')
const alertaRouter = require('./routes/alerta')
const sobreRouter = require('./routes/sobre-nos')

const db = require('./config/database')
const dbUser = process.env.DB_USER
const dbName = process.env.DB_NAME
const dbPass = process.env.DB_PASS
db(`mongodb+srv://${dbUser}:${dbPass}@cluster0.p6dwo.gcp.mongodb.net/DB_PROJETO?retryWrites=true&w=majority`)

var app = express();

const cors = require('cors'); /* O  que permite a comunicação do servidor do front end com o do backend*/
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/aboutUs', sobreRouter);

app.use('/conta', contaRouter);

app.use('/banco', bancoRouter);

//rota para metas
app.use('/meta', metaRouter);
app.use('/objetivo', objetivoRouter);
//rota para a categoria 
app.use('/categoria', categoriarouter);
//rota para receita 
app.use('/positivo', receitarouter);
//rota para despesa
app.use('/despesa', despesaRouter);
//rota para lancamentos
app.use('/lancamento', lancamentoRouter);
//rota para alertas
app.use('/alerta', alertaRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});


module.exports = app;
