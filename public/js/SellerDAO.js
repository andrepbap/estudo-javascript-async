class SellerDAO {

    constructor() {
        this._url = "http://localhost:3000/";
    }

    getSeller(id, callback) {

        $.get(this._url + "seller/" + id, function(data, status) {
            callback(data);
        });
    }

}