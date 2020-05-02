class GetIndustriesCommand extends Command{

    public execute(id) {
        let url_path = this.serverURL + "/industries";
        return super.doXHttp(url_path)
     }
    
}

class GetIndustriesByIDCommand extends Command{
    public execute(id) {
        let url_path = this.serverURL + "/industries/" + id;
        return super.doXHttp(url_path)
     }
}

class GetIndustriesByIndNameCommand extends Command{
    public execute(id) {
        let url_path = this.serverURL + "/industries/name/" + id;
        return super.doXHttp(url_path)
     }
}

class GetContributorsCommand extends Command{

    public execute(id) {
        let url_path = this.serverURL + "/industries/members/" + id;
        return super.doXHttp(url_path)
     }      
}


class GetContributorsByCommCommand extends Command{

    public execute(obj) {
        let id = obj[0];
        let comm = obj[1];

        let url_path = this.serverURL + "/industries/members/" +id+"/"+comm;
        return super.doXHttp(url_path)
     }    
    
}

class GetVotesCommand extends Command{
    public execute(id) {
        let url_path = this.serverURL + "/votes/" + id;
        return super.doXHttp(url_path)
     }
}

class GetDonorsCommand extends Command{
    public execute(id) {
        let url_path = this.serverURL + "/donors/" + id;
        return super.doXHttp(url_path)
     }
}

class GetFinancesCommand extends Command{
    public execute(id) {
        let url_path = this.serverURL + "/finances/" + id;
        return super.doXHttp(url_path)
     }
}

class GetAssetsCommand extends Command{
    public execute(id) {
        let url_path = this.serverURL + "/assets/" + id;
        return super.doXHttp(url_path)
     }
}

class GetCIDCommand extends Command{
    public execute(id) {
        let url_path = this.serverURL + "/cid/" + id;
        return super.doXHttp(url_path)
     }
}

