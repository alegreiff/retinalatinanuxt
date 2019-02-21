import moment from 'moment'

import 'moment/locale/es-us'

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
