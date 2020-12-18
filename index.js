const express = require('express');
var cors = require('cors');
var shell = require('shelljs');

var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


const app = express();
const PORT = 4999;
const HOST = 127.0.0.1;
app.use(express.json({ limit: '50mb' }));
app.use(cors());
// Constants
app.get('/', (req, res) => {
	shell.cd('/opt/puppetlabs/puppet/bin/');
	shell.exec('./puppet agent --test');
  res.status(200).json({ result: "llego" });
});


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

function enableCors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
}
