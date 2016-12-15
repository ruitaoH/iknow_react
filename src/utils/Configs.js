const url = {
  index: '/',

  editQuestion: '/aaa/:qid',
  getEditQuestion: (qid) => { return `/aaa/${qid}` },

  editMyAnswer: '/bbb/:qid/:bid',
  getEditMyAnswer: (qid, bid) => { return `/bbb/${qid}/${bid}` },

  login: '/login',
  register: '/register'
}

const label = ['学习考试', '校园服务', '求助资源', '情感生活', '学校政策', '其他']

module.exports = {
  url: url,
  label: label
}
