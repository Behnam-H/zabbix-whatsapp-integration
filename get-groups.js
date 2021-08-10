const venom = require('venom-bot');

venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });

function start(client) {
  client.getAllChatsGroups()
  .then((chats)=>{
    console.log(chats)
  })
  .catch((err)=>{
    console.log(err)
  });
}