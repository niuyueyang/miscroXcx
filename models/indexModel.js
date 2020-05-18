import RequestModel from './request/request'

class IndexModel extends RequestModel {
  constructor () {
    super()
  }

  test (url, data) {
    return this.postRequest({
      url: url,
      data: data
    })
  }
}

export default IndexModel
