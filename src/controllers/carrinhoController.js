
let prodList = { items: [] }
let lista = prodList.items;

exports.get = (req, res, next) => {
    res.end('Seu carrinho será exibido daqui a pouco!');
};

exports.getById = (req, res, next) => {
    res.end('Seu carrinho será exibido daqui a pouco!');
};

exports.post = (req, res, next) => {
 
    res.end('Produto adicionado no carrinho!');
};

exports.put = (req, res, next) => {
    res.end('Seu produto foi alterado no carrinho!');
};

exports.delete = (req, res, next) => {
    res.end('Item removido do carrinho!');
};