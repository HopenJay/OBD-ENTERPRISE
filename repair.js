const images = document.querySelectorAll('.image');


let index = 0;
const intervalID = setInterval(() => {
    images.forEach((image, i) => {
        if(i === index) {
            image.classList.add('active');
        } else{
            image.classList.remove('active');
        }
    })
    index++
        if (index >= images.length) {
            index = 0;
        }
}, 2000)


document.querySelectorAll('.icon_img').forEach((link) => {
    link.addEventListener('click', () => {
        redirectLink('a laptop');
    })
});


function redirectLink(productName, rawMsg = `Hello, I would like to repair ${productName}`) {
    const phoneNumber = '2348153871685';
    // alert(`U clicked on ${productName}`);
    const encodedMsg = encodeURIComponent(rawMsg);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMsg}`;
    
    window.open(whatsappLink, "_blank")
};
