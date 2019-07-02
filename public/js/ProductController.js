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

        this.request = async function request(productId) {
            let product = await new ProductDAO().getProduct(productId);
            let seller = await new SellerDAO().getSeller(product.seller);

            return {
                product: product,
                seller: seller
            }
        }
    }

    getProduct(productId) {
        this.request(productId).then(data => {
            console.log(data);
            this._render(data);
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