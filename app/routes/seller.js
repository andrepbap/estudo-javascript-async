module.exports = function (app) {
    
    app.route("/seller/:id").get((req, res) => {
        let product = {
            id: req.params.id,
            name: "Tully Vendedor",
            description: "Loja de produtos emulados",
            image_url: app.get("img-url") + "gato-emulado.jpg"
        };

        res.send(product);
    });

};


