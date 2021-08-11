const venom = require('venom-bot');
const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.json())

var events = require('events');
var eventEmitter = new events.EventEmitter();

var chatID = ''; //ChatID

venom
    .create()
    .then((client) => start(client))
    .catch((erro) => {
        console.log(erro);
    });

function start(client) {
    eventEmitter.on('data', function(data) {
        client.sendText(chatID, data['Subject'] + '\n' + data['Message'])
            .then((result) => {
                console.log('Result: ', result); //return object success
            })
            .catch((erro) => {
                console.error('Error when sending: ', erro); //return object error
            });
    });
}

app.post('/', (req, res) => {
    res.send('ok')
    eventEmitter.emit('data', req.body)

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})