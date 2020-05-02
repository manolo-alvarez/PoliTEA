class GetAllBills extends Command{

    public execute(tmp) {
        let url_path = this.serverURL + "bills/all" ;
        return super.doXHttp(url_path)
     }
    
}

class GetBillsByTopic extends Command{

    public execute(id) {
        let url_path = this.serverURL + "bills/topics/" + id;
        return super.doXHttp(url_path)
     }
    
}

class GetBillByID extends Command{

    public execute(id) {
        let url_path = this.serverURL + "bills/ID/" + id;
        return super.doXHttp(url_path)
     }      
}
