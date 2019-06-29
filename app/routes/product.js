module.exports = function (app) {
    
    app.route("/product/:id").get((req, res) => {
        let product = {
            id: req.params.id,
            seller: 100,
            name: "Gato Emulado",
            price: "R$ 200,00",
            description: "Lindo gato emulado.",
            image_url: "https://img.elo7.com.br/product/main/26B18C0/teste-nao-comprar-18-jhkhjkq.jpg"
        };

        res.send(product);
    });

    app.route("/product/:id").post((req, res) => {
        
        let requestItens = {
            params: req.params,
            headers: req.headers,
            body: req.body
        };

        console.log(requestItens);

        res.send({response: "response"});
    });

};


