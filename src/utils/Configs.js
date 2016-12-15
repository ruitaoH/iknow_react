const url = {
  index: '/',

  editQuestion: '/aaa/:qid',
  getEditQuestion: (qid) => { return `/aaa/${qid}` },

  editMyAnswer: '/bbb/:qid/:bid',
  getEditMyAnswer: (qid, bid) => { return `/bbb/${qid}/${bid}` },

  login: '/login',
  register: '/register'
}

module.exports = {
  url: url
}
