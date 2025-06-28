var NewHttp = /** @class */ (function () {
    function NewHttp(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.response = undefined;
        this.fulfilled = false;
    }
    return NewHttp;
}());
var myData = new NewHttp('GET', 'http://google.com', 'HTTP/1.1', '');
