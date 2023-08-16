/*URL module : provides methods for working with URLs:
with the method we can easily parse the different component of parameter (protocol,host,port,path,query parameter)*/

const url = require('url');
const { log } = require('util');

// Example url
const urlString = "https://nodejs.org/dist/latest-v18.x/docs/api/url.html"

// Parsing the url
const parseUrl = url.parse(urlString)
console.log(parseUrl);

const parseUrl1 = url.parse(urlString,true)
console.log(parseUrl1);

// Accessing the url component
console.log("Protocol:" + parseUrl.protocol);
console.log("Host:" + parseUrl.host);
console.log("Path:" + parseUrl.path);
console.log("Query:" + parseUrl.query);
console.log(`${JSON.stringify(parseUrl.query)}`);

// Formating the url
const  formattedUrl = url.format({
    protocol:"https",
    host:'www.CodemindTechnologies.com',
    port:8080,
    pathName:"path/to/resource",
    query:{
        param1:'value1',
        param2:'value2'
    }
})

console.log("Formatted url: " + formattedUrl);