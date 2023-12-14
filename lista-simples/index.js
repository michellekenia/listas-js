const produtos = [
    { id: 1, nome:"detergente", valor: 2.00, categoria: "limpeza"}, 
    { id: 2, nome:"sabao", valor: 5.00, categoria: "limpeza"}, 
    { id: 3, nome:"arroz", valor: 10.00, categoria: "alimento"}, 
    { id: 4, nome:"leite", valor: 4.00, categoria: "alimento"}, 
    { id: 5, nome:"chocolate", valor: 15.00, categoria: "alimento"}
]; 

// função callback produto 
// const ids = produtos.map(produto => produto.id); 

const nomes = produtos.map(produtos => produtos.nome);

console.log(nomes); 

