class Products{
    // id;
    // name;
    // image;
    // price; this are usually not needed so far it's in the constructor

    constructor(ProductDetails) {
        this.id = ProductDetails.id;
        this.name = ProductDetails.name;
        this.image = ProductDetails.image;
        this.price = ProductDetails.price;
        this.getHTML();
        this.renderProduct();
        this.btnLink();
        this.imgLink();
    };

    //Method for returning the HTML
    getHTML() {
        return `
        <div class="product">
            <div class="product_image">
                <img src=${this.image} alt="" class="product_img">
            </div>
            <div class="product_name">
                <p>${this.name}</p>
            </div>

            <div class="product_price">
                <p>${this.price}</p>
            </div>

            <div>
                    <a href="#" class="purchase_btn" data-product-name="${this.name}">
                        PURCHASE
                    </a>
            </div>
        </div>
        `
    };

    renderProduct() {
        document.querySelector('.product_parent').innerHTML += this.getHTML();
    };

    btnLink() {
        document.querySelectorAll('.purchase_btn').forEach((button) => {
            button.addEventListener('click', () => {
                this.redirectLink(button.dataset.productName);
            });
        });
    };

    imgLink() {
        document.querySelectorAll('.icon_img').forEach((link) => {
            link.addEventListener('click', () => {
                this.redirectLink('a laptop');
            })
        })
    };

    redirectLink(productName, rawMsg = `Hello, I would like to purchase  ${productName}`) {
        const phoneNumber = '2348153871685';
        // alert(`U clicked on ${productName}`);
        const encodedMsg = encodeURIComponent(rawMsg);
        const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    
        window.open(whatsappLink, "_blank")
    };

}

const products = [
    new Products({
        id: '1',
        image: "istockphoto-691926962-612x612.jpg",
        name: 'NAME',
        price: 'PRICE'
    }),

    new Products({    
        id: '2',
        image: "istockphoto-691927266-612x612.jpg",
        name: 'Name',
        price: 'price'
    }),

    new Products({id:'4', image:'sdksdlk', name:'adfsd', price:'sdkds'}),
    new Products({id:'5', image:'ksdjnksd', name:'sbssdbuiuiuis'})
];


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
};


//The code below is to check product id
// addNewProduct('5');

//NOTE: In case of future growth of his product I hve to create n automatic n manual render