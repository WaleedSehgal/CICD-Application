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

    let doc = '<!DOCTYPE html>'
    + '<html><head>' + header + '</head><body>' + body[1] + '</body></html>';

    fs.writeFile('doc.html', doc, (err) => {
        
        if(error) {
            return console.log(error);
        }
    
        // success case, the file was saved
        console.log('html generated!');
    });

});
