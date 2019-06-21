class SellerDAO {

    constructor() {
        this._url = "http://localhost:3000/";
    }

    getSeller(id) {
        
        return new Promise((resolve, reject) => {
            $.get(this._url + "seller/" + id, function(data, status) {
                resolve(data);
            });
        });
    }

}