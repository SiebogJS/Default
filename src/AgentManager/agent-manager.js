
module.exports.agent = {};
module.exports.agent.Agent = require('./agent/Agent');
module.exports.agent.AgentClass = require('./agent/AgentClass');
module.exports.agent.AID = require('./agent/AID');

module.exports.fipa = {};
module.exports.fipa.ACLMessage = require('./fipa/ACLMessage').ACLMessage;
module.exports.fipa.ACLMakeReply = require('./fipa/ACLMessage').ACLMakeReply;
module.exports.fipa.ACLPerformatives = require('./fipa/ACLPerformatives');

module.exports.manager = {};
module.exports.manager.AgentManager = require('./manager/AgentManager');