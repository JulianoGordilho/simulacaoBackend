const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors()); //deixando vazio ele libera acesso para todo tipo de aplicação
//app.use habilita o app para todos os métod de HTTP (GET, POST...)
app.use(express.json());//habilito o JSON -->precisa vir antes das rotas

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }));

require('./controller/authController')(app);
require('./controller/simulationUserCreditDataController')(app);
// app.get('/', (require, res) => {
// res.send('ok')
// });

app.listen(3000);

