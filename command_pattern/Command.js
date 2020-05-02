var Command = /** @class */ (function () {
    // protected serverURL = "http://localhost:3000";
    function Command() {
        this.serverURL = "https://reflected-flux-270220.appspot.com";
    }
    Command.prototype.doXHttp = function (url_path) {
        var xhttp = new XMLHttpRequest();
        xhttp.open("GET", url_path, false);
        xhttp.send();
        return xhttp;
    };
    Command.prototype.titleCase = function (string) {
        var sentence = string.toLowerCase().split(" ");
        for (var i = 0; i < sentence.length; i++) {
            sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        sentence = sentence.join(" ");
        return sentence;
    };
    return Command;
}());
