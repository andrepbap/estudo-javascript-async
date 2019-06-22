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
        let productDAO = new ProductDAO();
        let sellerDAO = new SellerDAO();

        productDAO.getProduct(productId, product => {
            sellerDAO.getSeller(product.sellerId, seller => {

                console.log(product);
                console.log(seller);

                this._render(product)
            });
        });
    }

    _render(data) {
        this._name.innerHTML = data.product.name;
        this._img.src = data.product.image_url;
        this._description.innerHTML = data.productdescription;
        this._price.innerHTML = data.product.price;
        this._sellerName.innerHTML = data.seller.name;
        this._sellerAvatar.src = data.seller.image_url;
        this._sellerDescription.innerHTML = data.seller.description;
    }
}