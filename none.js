module.exports = {
        net : require("net"),
        options : {
            default : { status_code : "404 Not Found", content_type : "text/html", content : "<h1>404 Not found</h1>" },
            "/" : { status_code : "200 OK", content_type : "text/html", content : "<h1>Hello Wold</h1>" }
        },
        headers : [],
        setHeaders(newHeaders){
            this.headers = this.headers.concat(newHeaders)
        },
        setOtions(objUrlOptions){
            let keys = Object.keys(objUrlOptions);
            for(let i = 0; i < keys.length; i++){
                this.headers[keys[i]] = objUrlOptions[keys[i]];
            }
        },
        setOptionsHelp(){
            return new Error("Help");
        },
        openServer(port){
            function getMethod(d){
                return d.slice(0, d.indexOf(" ") + 1);
            }
            function getDirectory(d){
                return d.slice(d.indexOf(" ") + 1, (d.slice(d.indexOf(" ") + 1, d.length)).indexOf(" ") + d.indexOf(" ") + 1)
            }
            function response(req_directory, options, headers) {
                if(options[req_directory] === undefined){
                    return "HTTP/1.1 " + options.default.status_code + "\n" + "Content-Type: " + options.default.content_type + "\n" + "Content-Length: " + options.default.content.length + "\n" + headers.join("\n") + "\n" + options.default.content + "\n"; 
                }else{
                    return "HTTP/1.1 " + options[req_directory].status_code + "\n" + "Content-Type: " + options[req_directory].content_type + "\n" + "Content-Length: " + options[req_directory].content.length + "\n" + headers.join("\n") + "\n" + options[req_directory].content + "\n";
                }
            }
            this.net.createServer((connection) => {
                connection.on("data", (data) => {
                    data = data.toString();
                    req_directory = getDirectory(data);
                    console.log("Request to:", req_directory, getMethod(data));
                    connection.write(response(req_directory, this.options, this.headers));
                })
            }).listen(port);
        }
};
