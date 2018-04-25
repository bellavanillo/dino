// empty
// import { pingPong } from './scripts';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

$(document).ready(function() {
  $('#button').click(function(){

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=wrJ92lPGUfRgjQBvNcWNaXIxSC5f4szq`;

      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.open("GET", url, true);
      request.send();
    });


    promise.then(function(response) {
      let body = JSON.parse(response);
      $('#showImg').html(`<img src='${body.data[0]['images']['original']['url']}'>`);
    }, function(error) {
      $('#errorDialog').text(`there was an error ${error.message}`);
    });

  });
});
