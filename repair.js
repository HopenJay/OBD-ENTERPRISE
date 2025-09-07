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

//Toggling
const toggle = document.querySelectorAll('.nav_links');
const toggle1 = document.querySelectorAll('.nav_link');

// Function for toggling the navlinks (reusable snippets);
toggle.forEach((button) => {
    button.addEventListener('click', () => {
        
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            }
             else {
                turnOffPreviousButton();
                button.classList.add('active');
             }
        }
    )
})

function turnOffPreviousButton() {
    const previousButton = document.querySelector('.active');
    if (previousButton) {
        previousButton.classList.remove('active');
    }
}


toggle1.forEach((button) => {
    button.addEventListener('click', () => {
        
            if (button.classList.contains('active')) {
                button.classList.remove('active');
            }
            else {
                turnOffPreviousButton();
                button.classList.add('active');
            }
        }
    )
})

// function turnOffPreviousButton() {
    //     const previousButton = document.querySelector('.active');
    //     if (previousButton) {
        //         previousButton.classList.remove('active');
        //     }
        // }
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('slide_in');
    document.querySelector('.hamburger').style.display = "none"
})

document.querySelector('.close_nav').addEventListener('click', () => {
    document.querySelector('.nav').classList.toggle('slide_in')
    document.querySelector('.hamburger').style.display = "flex"
});