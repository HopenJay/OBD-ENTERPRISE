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