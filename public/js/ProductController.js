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

    getProduct(productId) {

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