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
}

export default Util
