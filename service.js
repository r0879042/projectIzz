const services =  ["clothing rentals","style descovery","closet earing"];
function createServiceCard(name) {
    const card = document.createElement('div')
    card.className='service';
    card.innerHTML= `<a href="#" >${name}</a>`
    return card

}
const container = document.getElementById("frames")
container.innerHTML=""
services.forEach(element => {
 container.appendChild(createServiceCard(element))   
});