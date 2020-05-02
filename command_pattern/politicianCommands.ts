class GetAllSenatorsCommand extends Command{

    public execute(id) {
        let url_path = this.serverURL + "/politicians/Senators";
        return super.doXHttp(url_path)
     }
    
}

class GetAllCongressmanCommand extends Command{

    public execute(id) {
        let url_path = this.serverURL + "/politicians/Congressman";
        return super.doXHttp(url_path)
     }      
}

class GetPoliticianByIDCommand extends Command{

    public execute(id) {
        let url_path = this.serverURL + "/politicians/"+id;
        return super.doXHttp(url_path)
     }      
}

class GetPoliticianByIDAsyncCommand extends Command{

    public execute(id) {
        let url_path = this.serverURL + "/politicians/"+id;
        return super.doXHttpAsync(url_path)
     }      
}

class GetPoliticianIDCommand extends Command{

    public execute(obj) {
        let name = obj[0];
        let state = obj[1];

        let url_path = this.serverURL + "/politicians/get_id/"+name+"/"+state;
        return super.doXHttp(url_path)
     }      
}

class GetPoliticianByNameStateCommand extends Command{

    public execute(obj) {
        let name = obj[0];
        let state = obj[1];

        let url_path = this.serverURL + "/politicians/"+name+"/"+state;
        return super.doXHttp(url_path)
     }      
}
