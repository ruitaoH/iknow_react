const url = {
  editQuestion: '/aaa/:qid',
  getEditQuestion: (qid) => { return `/aaa/${qid}` },

  editMyAnswer: '/bbb/:qid/:bid',
  getEditMyAnswer: (qid, bid) => { return `/bbb/${qid}/${bid}` }
}

module.exports = {
  url: url
}
