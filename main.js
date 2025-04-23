 // Função para buscar os produtos
 async function fetchProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const products = await response.json();
    return products.slice(0, 10); // Retorna os 10 primeiros produtos
}

// Função para exibir os produtos na tabela
function displayProducts(products) {
    const tableBody = document.getElementById('product-table-body');
    products.forEach(product => {
        const row = `
            <tr>
                <td>${product.id}</td>
                <td>${product.title}</td>
                <td>R$ ${product.price.toFixed(2)}</td>
                <td>${product.description.substring(0, 50)}...</td>
                <td>${product.category}</td>
                <td><img src="${product.image}" alt="${product.title}" class="product-image"></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Chama as funções para buscar e exibir os produtos
fetchProducts().then(displayProducts);