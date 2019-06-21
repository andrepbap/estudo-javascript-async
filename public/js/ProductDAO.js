class ProductDAO {

    constructor() {
        this._url = "http://localhost:3000/";
    }

    getProduct(id) {
        
        return new Promise((resolve, reject) => {
            $.get(this._url + "product/" + id, function(data, status) {
                resolve(data);
            });
        });
    }

}