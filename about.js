class Contact{
    constructor(contactDetails) {
        this.social = contactDetails.social;
        this.link = contactDetails.link;
        this.accName = contactDetails.accName;
        this.contactHTML();
    };

    contactInfo()  {
    return `
        <div>
            <p>via <span>${this.social}</span></p>
            <ul>
                <li>
                    <a href="${this.link}" target = "_blank">
                        ${this.accName}
                    </a>
                </li>
            </ul>
        </div>
    `
    };

    contactHTML() {
        document.querySelector('.contact_list').innerHTML += this.contactInfo();
    }
}

const Whatsapp = new Contact({
        social: 'Whatsapp',
        link: `https://wa.me/2348078141898?`,
        accName: 'Elisha'
    });

const Tiktok = new Contact({
        social: 'Twitter',
        link: `https://tiktok.com/?`,
        accName: 'myzack'
     });
    

const Facebook = new Contact({social: 'facebook', link: `https://facebook.com/?`, accName: 'zackme'});

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