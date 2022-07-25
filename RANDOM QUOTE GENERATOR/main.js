//object of quotes in an array

let quotes=[
  {
      quote:"Failure is an option. If you are not failing,you are not innovating",
      person:"Richard Branson"
  },


  {
    quote:"We don't seem to make the world better. We seem to make the world ours",
    person:"Lauren Asher"
},

{
    quote:"We don't build services to make money,We make money to build better services",
    person:"Mark Zuckerberg"
},

{
    quote:"Work like you only have a dollar and you never have to worry about anything",
    person:"Jeffery Millano"
},


{
    quote:"The only option we have is to work like the best if we really want to be the greatest of all time",
    person:"Ceasar Ahumuza"
},

{
    quote:"Work every working waking hour",
    person:"Elon Musk"
}

]




//selecting the quote paragraph and the owner of the quote
let displayQuote=document.querySelector('.quote');
let saidby=document.querySelector('.sayer');



//selecting a a button that will generate the quotes
let btn=document.querySelector('.generate');

//function that will generate our quotes when we click the button
function display(){
    let randomQuote=Math.floor(Math.random()*quotes.length)+1;
    displayQuote.innerHTML=quotes[randomQuote].quote;
    saidby.innerHTML=quotes[randomQuote].person;
}


//adding an evvent listener to the  generator button
btn.addEventListener('click',display);







