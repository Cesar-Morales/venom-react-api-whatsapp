const fs = require('fs');
const venom = require('venom-bot');

venom
  .create(
    'sessionName',
    (base64Qr, asciiQR) => {
  
      var matches = base64Qr.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
        response = {};

      if (matches.length !== 3) {
        return new Error('Invalid input string');
      }
      response.type = matches[1];
      response.data = new Buffer.from(matches[2], 'base64');

      var imageBuffer = response;
      require('fs').writeFile(
        '../react-venom-whatsapp/src/assets/img/out.png',
        imageBuffer['data'],
        'binary',
        function (err) {
          if (err != null) {
            console.log(err);
          }
        }
      );
    },
    undefined,
    { logQR: false }
  )
  .then((client) => start(client))
  .catch((error) => console.log(error));


function start(client){
  try {
    fs.unlinkSync('../react-venom-whatsapp/src/assets/img/out.png')
    console.log('File removed')
  } catch(err) {
    console.error('Something wrong happened removing the file', err)
  }
}



  /**
   * fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          qr: data
        })
      })
      .then(response => response.json())
      .catch(error => console.error('Error:', error))
   */