class ApiRequest {
  static fetchData(url) {
    return new Promise((resolve, reject) => {
      const HTTP = new XMLHttpRequest();
      HTTP.open("GET", url);
      HTTP.onreadystatechange = function () {
        if (HTTP.readyState === XMLHttpRequest.DONE && HTTP.status === 200) {
          const data = JSON.parse(HTTP.responseText);
          resolve(data);
        } else if (HTTP.readyState === XMLHttpRequest.DONE) {
          reject("Something went wrong");
        }
      };
      HTTP.send();
    });
  }
}

export default ApiRequest;
