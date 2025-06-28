var NewH = /** @class */ (function () {
    function NewH(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
    return NewH;
}());
var myData = new NewH('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);
