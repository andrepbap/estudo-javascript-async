module.exports = function (app) {
    
    app.route("/seller/:id").get((req, res) => {
        let product = {
            id: req.params.id,
            name: "Tully Vendedor",
            description: "Loja de produtos emulados",
            image_url: "https://img.elo7.com.br/product/main/26B18C0/teste-nao-comprar-18-jhkhjkq.jpg"
        };

        res.send(product);
    });

};


