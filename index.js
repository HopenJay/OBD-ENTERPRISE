const products = [
    {
        id: '1',
        image: "istockphoto-691926962-612x612.jpg",
        name: 'NAME',
        price: 'PRICE'
    },

    {
        id: '2',
        image: "istockphoto-691927266-612x612.jpg",
        name: 'Name',
        price: 'price'
    }
];

let productHTML = '';

products.forEach((product) => {
    productHTML += `
        <div class="product">
            <div class="product_image">
                <img src=${product.image} alt="" class="product_img">
            </div>
            <div class="product_name">
                <p>${product.name}</p>
            </div>

            <div class="product_price">
                <p>${product.price}</p>
            </div>

            <div>
                    <a href="#" class="purchase_btn" data-product-name="${product.name}" id = 'whatsappLink'>
                        PURCHASE
                    </a>
            </div>
        </div>
    `;
})

document.querySelector('.product_parent').innerHTML = productHTML;

document.querySelectorAll('.purchase_btn').forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.dataset.productName;
        alert(`U clicked on ${productName}`);
        const phoneNumber = '2348153871685';
        const rawMsg1 = `Hello, I would like to purchase  ${productName}`;
        const encodedMsg = encodeURIComponent(rawMsg1);
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
        document.getElementById('whatsappLink').href = whatsappLink;        
    });
});

function productExist(id) {
    return products.some(product => {
        return product.id === id;
    })
}

function addNewProduct(id) {
    if (productExist(id)) {
        alert('Yo dummy, you\'ve already got the same product Id');
    } else {
        alert('na u good');
    }
}


//The code below is to check product id
//addNewProduct('3');