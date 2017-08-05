module.exports.enums = {};
module.exports.enums.ConnectionEventEnum = require('./enums/connection/ConnectionEventEnum');
module.exports.enums.EndpointEventEnum = require('./enums/connection/EndpointEventEnum');
module.exports.enums.EndpointTypeEnum = require('./enums/connection/EndpointTypeEnum');
module.exports.enums.MessageTypeEnum = require('./enums/message/MessageTypeEnum');
module.exports.enums.LayerEnum = require('./enums/LayerEnum');
module.exports.enums.AgentManagerEventEnum = require('./enums/agent/AgentManagerEventEnum');


module.exports.util = {};
module.exports.util.network = require('./util/network');
module.exports.util.common = require('./util/util');

module.exports.structs = {};
module.exports.structs.Message = require('./structs/Message');
