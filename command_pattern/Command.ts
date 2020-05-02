abstract class Command {
    protected serverURL = "https://reflected-flux-270220.appspot.com";
    // protected serverURL = "http://localhost:3000";

    public constructor () {}

    abstract execute(any): XMLHttpRequest;

    public doXHttp(url_path){
        const xhttp = new XMLHttpRequest();
        xhttp.open("GET", url_path, false);
        xhttp.send();
        return xhttp;
     }

     public titleCase(string){
        var sentence = string.toLowerCase().split(" ");
        for(var i = 0; i< sentence.length; i++){
           sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
        }
        sentence = sentence.join(" ");
         return sentence;
     }
    
    

}