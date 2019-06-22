class ProductDAO {

    constructor() {
        this._url = "http://localhost:3000/";
    }

    getProduct(id, callback) {
        
        $.get(this._url + "product/" + id, function(data, status) {
            callback(data);
        });
    }

}