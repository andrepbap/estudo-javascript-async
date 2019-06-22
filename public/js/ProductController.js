class ProductController {

    constructor() {
        let $ = document.querySelector.bind(document);

        this._name = $("#name");
        this._img = $("#img");
        this._description = $("#description");
        this._price = $("#price");
    }

    getProduct(productId) {
        let productDAO = new ProductDAO();
        let sellerDAO = new SellerDAO();

        async function request() {
            let product = await productDAO.getProduct(productId);
            let seller = await sellerDAO.getSeller(product.sellerId);

            return {
                product: product,
                seller: seller
            }
        }

        request().then(data => {
            console.log(data);
            this._render(data.product);
        });

    }

    _render(data) {
        this._name.innerHTML = data.name;
        this._img.src = data.image_url;
        this._description.innerHTML = data.description;
        this._price.innerHTML = data.price;
    }
}