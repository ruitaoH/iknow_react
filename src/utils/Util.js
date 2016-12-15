class Util {
  static fetchData (url, method, obj) {
    fetch(url, {
      method: method
    }).then((response) => {
      return response.json()
    }).then((jsonData) => {
      let data = obj.state.data

      data.push(...jsonData)

      obj.setState({
        data: data
      })
    })
  }

  // 得到style对象
  static getStyle (style, className) {
    let classArray = className.split(' ')

    classArray.unshift('') // 向数组头添加元素,方便reduce

    return classArray.reduce((result, val) => {
      return result + ' ' + style[val]
    })
  }
}

export default Util
