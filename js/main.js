
var elAdvantagesHeading = document.querySelectorAll(".advantages__title");
var elAdvantagesText = document.querySelectorAll(".advantages__text");


var advantages = [{
  "title": "Dozens of pleased shippers daily!",
  "text":"We are able to minimize all possible risks in the process of cargo transportation"
},
{
  "title": "Qualified Carriers",
  "text": "Each freight carrier of our company is a professional in their field. Easy Motors Corporation ensures the safety and security of each load and justifies the trust of shippers annually."
},{
  "title": "Extensive experience in bankruptcy support",
  "text": "We have extensive experience in supporting bankruptcy procedures of enterprises."
}]


let counter1 = 0;
elAdvantagesHeading.forEach( heading =>{
  heading.textContent = advantages[counter1].title;
})

let counter2 = 0;
elAdvantagesText.forEach(text => {
  text.textContent = advantages[counter2].text;
});

