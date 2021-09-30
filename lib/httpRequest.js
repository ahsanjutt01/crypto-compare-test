const axios = require('axios').default;

exports.request = async (method, url) => {

    const options = {
    'method': method,
    'url': url,
    'headers': {
      'Content-Type': 'application/json'
    }
  };
    return await axios(options);
}
