class ProductController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._name = $("#name");
        this._img = $("#img");
        this._description = $("#description");
        this._price = $("#price");

        this._sellerName = $("#sellerName");
        this._sellerAvatar = $("#sellerAvatar");
        this._sellerDescription = $("#sellerDescription");
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

            this._render({
                product: data[0],
                seller: data[1]
            });
        });
    }

    _render(data) {
        this._name.innerHTML = data.product.name;
        this._img.src = data.product.image_url;
        this._description.innerHTML = data.product.description;
        this._price.innerHTML = data.product.price;
        this._sellerName.innerHTML = data.seller.name;
        this._sellerAvatar.src = data.seller.image_url;
        this._sellerDescription.innerHTML = data.seller.description;
    }
}