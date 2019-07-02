module.exports = function (app) {
    
    app.route("/product/:id").get((req, res) => {
        let product = {
            id: req.params.id,
            sellerId: 100,
            name: "Gato Emulado",
            price: "R$ 200,00",
            description: "Lindo gato emulado.",
            image_url: app.get("img-url") + "gato-emulado.jpg"
        };

        res.send(product);
    });

};


