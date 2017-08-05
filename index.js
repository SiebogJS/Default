var messageManager = require('./src/MessageManager/MessageManager');
var server = require('./src/RestWS/server')(__dirname + '/src/ClientApp', messageManager);

server.listen(8081);