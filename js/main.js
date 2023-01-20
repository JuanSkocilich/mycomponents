import { all, bios, footer, heroImage, heroSliders, modals, navbar, quotes, tabs, timeline, tooltips, verticalCards } from "./components.js"

const openClose = document.getElementById('open-close')
const aside = document.getElementById('aside')
const section = document.getElementById('section')

/* if (screen.width >= 858) { */
openClose.addEventListener('click', () => {
    aside.classList.toggle('desplegar')
    section.classList.toggle('cambiar')
})
/* } */


/* if (screen.width <= 858) {
    openClose.addEventListener('click', () => {
        aside.classList.toggle('desplegar')
        section.classList.toggle('sacar')
    })
}
 */

const containerategory = document.querySelector('.categories')

const showCategory = all.forEach((data) => {
    containerategory.innerHTML += `
    <div class="container-category ${data.class}">
        <img src="https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png" alt="">
        <div class="rt">
            <h1 id="nameSearch">${data.name}</h1>
            <h1><i class="fa-solid fa-download"></i></h1>
        </div>
        <div class="container-btn">
            <button id="copyHtml"><i class="fa-regular fa-paste"></i> HTML</button>
            <button id="copyCss"><i class="fa-regular fa-paste"></i> CSS</button>
            <button id="copyJs"><i class="fa-regular fa-paste"></i> JS</button>
        </div>
    </div>
    `

    const copyHtml = document.querySelectorAll('#copyHtml')
    copyHtml.forEach((btn) => {

        /* btn.addEventListener('click', function (e) {
            all.forEach((f) => {

                console.log(f.name)
            })
        }) */
    })
})





document.querySelector('#allLenth').innerHTML += `${all.length}`
document.querySelector('#biosLenth').innerHTML += `${bios.length}`
document.querySelector('#footerLenth').innerHTML += `${footer.length}`
document.querySelector('#heroImageLenth').innerHTML += `${heroImage.length}`
document.querySelector('#heroSlidersLenth').innerHTML += `${heroSliders.length}`
document.querySelector('#modalsLenth').innerHTML += `${modals.length}`
document.querySelector('#navbarLenth').innerHTML += `${navbar.length}`
document.querySelector('#quotesLenth').innerHTML += `${quotes.length}`
document.querySelector('#tabsLenth').innerHTML += `${tabs.length}`
document.querySelector('#timelineLenth').innerHTML += `${timeline.length}`
document.querySelector('#tooltipsLenth').innerHTML += `${tooltips.length}`
document.querySelector('#verticalCardsLenth').innerHTML += `${verticalCards.length}`

const allBtn = document.querySelector('#all')
const biosBtn = document.querySelector('#bios')
const footerBtn = document.querySelector('#footer')
const heroImageBtn = document.querySelector('#heroImage')
const heroSlidersBtn = document.querySelector('#heroSliders')
const modalsBtn = document.querySelector('#modals')
const navbarsBtn = document.querySelector('#navbar')
const quotesBtn = document.querySelector('#quotes')
const tabsBtn = document.querySelector('#tabs')
const timelineBtn = document.querySelector('#timeline')
const tooltipsBtn = document.querySelector('#tooltips')
const verticalCardsBtn = document.querySelector('#verticalCards')

const classBios = document.querySelectorAll('.bios')
const classFooter = document.querySelectorAll('.footer')
const classHeroImage = document.querySelectorAll('.heroImage')
const classHeroSliders = document.querySelectorAll('.heroSliders')
const classModals = document.querySelectorAll('.modals')
const classNavbar = document.querySelectorAll('.navbar')
const classQuotes = document.querySelectorAll('.quotes')
const classTabs = document.querySelectorAll('.tabs')
const classTimeline = document.querySelectorAll('.timeline')
const classTooltips = document.querySelectorAll('.tooltips')
const classVerticalCards = document.querySelectorAll('.verticalCards')

const blockCat = document.querySelectorAll('.container-category')
const namekCatColor = document.querySelectorAll('.name-category')

const infoP = document.querySelector('#description-category')

const searchBus = document.querySelector('#search')

function block() {
    searchBus.style.display = 'none'
    namekCatColor.forEach((e) => {
        e.style.color = 'white'
    })
    infoP.style.display = 'block'
    blockCat.forEach((e) => {
        e.style.display = 'block'
    })
}

const nameCategory = document.querySelector('#name-category')

const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora doloribus suscipit, maxime iure facere molestiae aut inventore perspiciatis, consequuntur eos corrupti nihil ad modi quibusdam, distinctio non reiciendis alias obcaecati? Quae perferendis blanditiis molestiae dignissimos eligendi inventore minus laudantium voluptatem doloremque cumque eveniet, est non ipsa repellendus, beatae quibusdam, dolorem commodi voluptates iste quos? Vel voluptatem tempore laudantium debitis, impedit dolorem suscipit necessitatibus deleniti, ad atque, eligendi praesentium minima veritatis."

allBtn.addEventListener('click', function () {
    //block()
    window.location.reload()
    allBtn.style.color = 'rgb(255, 208, 0)'
    nameCategory.innerHTML = 'All Components'
})

biosBtn.addEventListener('click', function () {
    block()
    biosBtn.style.color = 'rgb(255, 208, 0)'
    nameCategory.innerHTML = 'Bios'
    infoP.textContent = lorem
    classFooter.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroImage.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroSliders.forEach((e) => {
        e.style.display = 'none'
    })
    classModals.forEach((e) => {
        e.style.display = 'none'
    })
    classNavbar.forEach((e) => {
        e.style.display = 'none'
    })
    classQuotes.forEach((e) => {
        e.style.display = 'none'
    })
    classTabs.forEach((e) => {
        e.style.display = 'none'
    })
    classTimeline.forEach((e) => {
        e.style.display = 'none'
    })
    classTooltips.forEach((e) => {
        e.style.display = 'none'
    })
    classVerticalCards.forEach((e) => {
        e.style.display = 'none'
    })
})

footerBtn.addEventListener('click', function () {
    block()
    footerBtn.style.color = 'rgb(255, 208, 0)'
    nameCategory.innerHTML = 'Footer'
    infoP.textContent = 'The footer is the section of content found at the bottom of a web page. It usually contains a copyright notice, a link to the privacy policy, a site map, a logo, contact information, social media icons, and an email registration form. In short, a footer contains information that promotes the overall usability of a website.'
    classBios.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroImage.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroSliders.forEach((e) => {
        e.style.display = 'none'
    })
    classModals.forEach((e) => {
        e.style.display = 'none'
    })
    classNavbar.forEach((e) => {
        e.style.display = 'none'
    })
    classQuotes.forEach((e) => {
        e.style.display = 'none'
    })
    classTabs.forEach((e) => {
        e.style.display = 'none'
    })
    classTimeline.forEach((e) => {
        e.style.display = 'none'
    })
    classTooltips.forEach((e) => {
        e.style.display = 'none'
    })
    classVerticalCards.forEach((e) => {
        e.style.display = 'none'
    })
})

heroImageBtn.addEventListener('click', function () {
    block()
    heroImageBtn.style.color = 'rgb(255, 208, 0)'
    nameCategory.innerHTML = 'Hero Image'
    infoP.textContent = 'A hero image is an image, photograph, graphic, video, or other type of design that appears at the start of a website. It serves to highlight its message, its products or the essence of a company.'
    classBios.forEach((e) => {
        e.style.display = 'none'
    })
    classFooter.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroSliders.forEach((e) => {
        e.style.display = 'none'
    })
    classModals.forEach((e) => {
        e.style.display = 'none'
    })
    classNavbar.forEach((e) => {
        e.style.display = 'none'
    })
    classQuotes.forEach((e) => {
        e.style.display = 'none'
    })
    classTabs.forEach((e) => {
        e.style.display = 'none'
    })
    classTimeline.forEach((e) => {
        e.style.display = 'none'
    })
    classTooltips.forEach((e) => {
        e.style.display = 'none'
    })
    classVerticalCards.forEach((e) => {
        e.style.display = 'none'
    })
})

heroSlidersBtn.addEventListener('click', function () {
    block()
    heroSlidersBtn.style.color = 'rgb(255, 208, 0)'
    nameCategory.innerHTML = 'Hero Sliders'
    infoP.textContent = lorem
    classBios.forEach((e) => {
        e.style.display = 'none'
    })
    classFooter.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroImage.forEach((e) => {
        e.style.display = 'none'
    })
    classModals.forEach((e) => {
        e.style.display = 'none'
    })
    classNavbar.forEach((e) => {
        e.style.display = 'none'
    })
    classQuotes.forEach((e) => {
        e.style.display = 'none'
    })
    classTabs.forEach((e) => {
        e.style.display = 'none'
    })
    classTimeline.forEach((e) => {
        e.style.display = 'none'
    })
    classTooltips.forEach((e) => {
        e.style.display = 'none'
    })
    classVerticalCards.forEach((e) => {
        e.style.display = 'none'
    })
})

modalsBtn.addEventListener('click', function () {
    block()
    modalsBtn.style.color = 'rgb(255, 208, 0)'
    nameCategory.innerHTML = 'Modals'
    infoP.textContent = 'A modal window or modal box is a box that appears on the page, with the particularity that it blocks all functions and concentrates the focus on a particular action, so that the user can only do that action or close the window.'
    classBios.forEach((e) => {
        e.style.display = 'none'
    })
    classFooter.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroImage.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroSliders.forEach((e) => {
        e.style.display = 'none'
    })
    classNavbar.forEach((e) => {
        e.style.display = 'none'
    })
    classQuotes.forEach((e) => {
        e.style.display = 'none'
    })
    classTabs.forEach((e) => {
        e.style.display = 'none'
    })
    classTimeline.forEach((e) => {
        e.style.display = 'none'
    })
    classTooltips.forEach((e) => {
        e.style.display = 'none'
    })
    classVerticalCards.forEach((e) => {
        e.style.display = 'none'
    })
})

navbarsBtn.addEventListener('click', function () {
    block()
    navbarsBtn.style.color = 'rgb(255, 208, 0)'
    nameCategory.innerHTML = 'Navbars'
    infoP.textContent = 'The navigation bar is a user interface element within a web page that contains links to other sections of the website. This is an important element to comply with the laws of web usability.'
    classBios.forEach((e) => {
        e.style.display = 'none'
    })
    classFooter.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroImage.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroSliders.forEach((e) => {
        e.style.display = 'none'
    })
    classModals.forEach((e) => {
        e.style.display = 'none'
    })
    classQuotes.forEach((e) => {
        e.style.display = 'none'
    })
    classTabs.forEach((e) => {
        e.style.display = 'none'
    })
    classTimeline.forEach((e) => {
        e.style.display = 'none'
    })
    classTooltips.forEach((e) => {
        e.style.display = 'none'
    })
    classVerticalCards.forEach((e) => {
        e.style.display = 'none'
    })
})

quotesBtn.addEventListener('click', function () {
    block()
    quotesBtn.style.color = 'rgb(255, 208, 0)'
    nameCategory.innerHTML = 'Quotes'
    infoP.textContent = 'The quotation tags in HTML is used to represent sentence or phrases which is not part of the original text and is usually referred from the external source. The quotation in HTML can be represented by <blockquote>, <q>, <abbr>, <address>, <cite>,and <bdo> tag.'
    classBios.forEach((e) => {
        e.style.display = 'none'
    })
    classFooter.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroImage.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroSliders.forEach((e) => {
        e.style.display = 'none'
    })
    classModals.forEach((e) => {
        e.style.display = 'none'
    })
    classNavbar.forEach((e) => {
        e.style.display = 'none'
    })
    classTabs.forEach((e) => {
        e.style.display = 'none'
    })
    classTimeline.forEach((e) => {
        e.style.display = 'none'
    })
    classTooltips.forEach((e) => {
        e.style.display = 'none'
    })
    classVerticalCards.forEach((e) => {
        e.style.display = 'none'
    })
})

tabsBtn.addEventListener('click', function () {
    block()
    tabsBtn.style.color = 'rgb(255, 208, 0)'
    nameCategory.innerHTML = 'Tabs'
    infoP.textContent = 'The Tabs Component allows the content author to organize page content within multiple tabs'
    classBios.forEach((e) => {
        e.style.display = 'none'
    })
    classFooter.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroImage.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroSliders.forEach((e) => {
        e.style.display = 'none'
    })
    classModals.forEach((e) => {
        e.style.display = 'none'
    })
    classNavbar.forEach((e) => {
        e.style.display = 'none'
    })
    classQuotes.forEach((e) => {
        e.style.display = 'none'
    })
    classTimeline.forEach((e) => {
        e.style.display = 'none'
    })
    classTooltips.forEach((e) => {
        e.style.display = 'none'
    })
    classVerticalCards.forEach((e) => {
        e.style.display = 'none'
    })
})

timelineBtn.addEventListener('click', function () {
    block()
    timelineBtn.style.color = 'rgb(255, 208, 0)'
    nameCategory.innerHTML = 'Timeline'
    infoP.textContent = 'A timeline is a useful way to display a whole range of information and or data points to a user. Companies use them to showcase their existence across time and what they have done over the years and people can use them to display their portfolio work across time as well.'
    classBios.forEach((e) => {
        e.style.display = 'none'
    })
    classFooter.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroImage.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroSliders.forEach((e) => {
        e.style.display = 'none'
    })
    classModals.forEach((e) => {
        e.style.display = 'none'
    })
    classNavbar.forEach((e) => {
        e.style.display = 'none'
    })
    classQuotes.forEach((e) => {
        e.style.display = 'none'
    })
    classTabs.forEach((e) => {
        e.style.display = 'none'
    })
    classTooltips.forEach((e) => {
        e.style.display = 'none'
    })
    classVerticalCards.forEach((e) => {
        e.style.display = 'none'
    })
})

tooltipsBtn.addEventListener('click', function () {
    block()
    tooltipsBtn.style.color = 'rgb(255, 208, 0)'
    nameCategory.innerHTML = 'Tooltips'
    infoP.textContent = 'A tooltip or balloon is a visual aid tool that works by placing the cursor over a graphic element, showing additional help to inform the user of the purpose of the element on which it is located.'
    classBios.forEach((e) => {
        e.style.display = 'none'
    })
    classFooter.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroImage.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroSliders.forEach((e) => {
        e.style.display = 'none'
    })
    classModals.forEach((e) => {
        e.style.display = 'none'
    })
    classNavbar.forEach((e) => {
        e.style.display = 'none'
    })
    classQuotes.forEach((e) => {
        e.style.display = 'none'
    })
    classTabs.forEach((e) => {
        e.style.display = 'none'
    })
    classTimeline.forEach((e) => {
        e.style.display = 'none'
    })
    classVerticalCards.forEach((e) => {
        e.style.display = 'none'
    })
})

verticalCardsBtn.addEventListener('click', function () {
    block()
    verticalCardsBtn.style.color = 'rgb(255, 208, 0)'
    nameCategory.innerHTML = 'Vertical Cards'
    infoP.textContent = lorem
    classBios.forEach((e) => {
        e.style.display = 'none'
    })
    classFooter.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroImage.forEach((e) => {
        e.style.display = 'none'
    })
    classHeroSliders.forEach((e) => {
        e.style.display = 'none'
    })
    classModals.forEach((e) => {
        e.style.display = 'none'
    })
    classNavbar.forEach((e) => {
        e.style.display = 'none'
    })
    classQuotes.forEach((e) => {
        e.style.display = 'none'
    })
    classTabs.forEach((e) => {
        e.style.display = 'none'
    })
    classTimeline.forEach((e) => {
        e.style.display = 'none'
    })
    classTooltips.forEach((e) => {
        e.style.display = 'none'
    })
})


document.addEventListener('keyup', (e) => {
    if (e.target.matches('#search')) {
        const search = document.querySelectorAll(".container-category")
        search.forEach((name) => {
            if (name.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
                name.classList.remove("filtro")
            } else {
                name.classList.add('filtro')
            }
        })
    }
})


