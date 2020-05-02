class GetEventIDCommand extends Command{

    public execute(id) {
        let url_path = this.serverURL + "events/" + id;
        return super.doXHttp(url_path)
     }
    
}

class GetEventZipCommand extends Command{

    public execute(zip) {
        let url_path = this.serverURL + "events/zip/" + zip;
        return super.doXHttp(url_path)
     }
    
}

class GetEventCityCommand extends Command{

    public execute(city) {
        city = super.titleCase(city);
        let url_path = this.serverURL + "events/city/" + city;
        return super.doXHttp(url_path)
     }      
}


class GetEventStateCommand extends Command{

    public execute(state) {
        state = super.titleCase(state);

        let url_path = this.serverURL + "events/state/" + state;
        return super.doXHttp(url_path)
     }    
    
}

class GetEventStateAbbrCommand extends Command{

    public execute(abbr) {
        abbr = abbr.toUpperCase();
        let url_path = this.serverURL + "events/stateAbbr/" + abbr;
        return super.doXHttp(url_path)
     }
    

}
