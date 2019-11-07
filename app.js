var Request = require("request");
 
const fs = require('fs');
                  
var data = fs.readFileSync("./articles/privateAtlas.md", { "encoding": "utf8"});

Request.post({
    "headers": { "content-type": "application/json" },
    "url": "http://localhost:3000/convert",
    "body": JSON.stringify({
        "content": data,
    })
}, function(error, response, body){
    // If we got any connection error, bail out.
    if(error) {
        return console.log(error);
    }
    
    var header = '';
    body = JSON.parse(body);

    console.log('<!DOCTYPE html>'
    + '<html><head>' + header + '</head><body>' + body[1] + '</body></html>');
    return '<!DOCTYPE html>'
    + '<html><head>' + header + '</head><body>' + body[1] + '</body></html>';
});
