const produtos = [
    { id: 1, nome:"detergente", valor: 2.00, categoria: "limpeza"}, 
    { id: 2, nome:"sabao", valor: 5.00, categoria: "limpeza"}, 
    { id: 3, nome:"arroz", valor: 10.00, categoria: "alimento"}, 
    { id: 4, nome:"leite", valor: 4.00, categoria: "alimento"}, 
    { id: 5, nome:"chocolate", valor: 15.00, categoria: "alimento"}
]; 

//.map

const ids = produtos.map(produto => produto.id);
console.log(ids);

const nomes = produtos.map(produtos => produtos.nome);
console.log(nomes); 

//.filter
const alimentos = produtos.filter(produtos => produtos.categoria === 'alimento'); 
console.log(alimentos.map(alimentos => alimentos.nome));

//.reduce

const numeros = [1, 2, 3, 4]; 

const total = numeros.reduce((acumulado, numero) => acumulado + numero); 

console.log(total); 

const totali = produtos.reduce((acc, produto) => acc + produto.valor, 0); 
console.log(totali); 
