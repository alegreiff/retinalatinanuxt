const middleware = {}

middleware['auth'] = require('../../middleware/auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['check-auth'] = require('../../middleware/check-auth.js')
middleware['check-auth'] = middleware['check-auth'].default || middleware['check-auth']

middleware['inicioAdmin'] = require('../../middleware/inicioAdmin.js')
middleware['inicioAdmin'] = middleware['inicioAdmin'].default || middleware['inicioAdmin']

export default middleware
