class ProductController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._name = $("#name");
        this._img = $("#img");
        this._description = $("#description");
        this._price = $("#price");
    }

    getProduct(productId, sellerId) {
        let productDAO = new ProductDAO();
        let sellerDAO = new SellerDAO();

        let promises = [
            productDAO.getProduct(productId),
            sellerDAO.getSeller(sellerId)
        ];

        Promise.all(promises).then(data => {
            console.log(data);

            this._render(data[0]);
        });
    }

    _render(data) {
        this._name.innerHTML = data.name;
        this._img.src = data.image_url;
        this._description.innerHTML = data.description;
        this._price.innerHTML = data.price;
    }
}