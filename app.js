var Request = require("request");
 
const fs = require('fs');
                  
var data = fs.readFileSync("./articles/privateAtlas.md", { "encoding": "utf8"});

function buildHtml(req) {
    var header = '';
    var body = '';
  
    // concatenate header string
    // concatenate body string
  
    return '<!DOCTYPE html>'
         + '<html><head>' + header + '</head><body>' + body + '</body></html>';
};

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

    return '<!DOCTYPE html>'
    + '<html><head>' + header + '</head><body>' + body[1] + '</body></html>';
});
