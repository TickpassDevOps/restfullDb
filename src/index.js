const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const bodyparser = require('body-parser');

const  {getinfo, postinfo, registropost} = require('../controllers/controller');
const app = express();

app.set('port', process.env.PORT || 3000)

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(bodyparser.urlencoded({extended: false}));
app.use(express.json());
app.use(require('./routes/router'));

app.get('/', getinfo);
app.post('eventos',postinfo);
app.post('/usuarios',registropost);

app.listen(app.get('port'),() => console.log('server is running'))
