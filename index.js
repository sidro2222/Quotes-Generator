let botton = document.getElementById('clicking');
let quote = document.querySelector('.texte');
let person = document.querySelector('.name');

let quotes = [
    {
        quote: "Change will not come if we wait for some other person or some other time.We are the ones we ve been waiting for. We are the change that we seek",

        person: 'Barack Obama'
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        person: 'Nelson Mandela',
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        person: "Walt Disney"
    },
    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking",
        person: "Steve Jobs"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        person: "Eleanor Roosevelt",
    },
    {
        quote: "If you look at what you have in life, you ll always have more. If you look at what you don't have in life, you'll never have enough.",
        person: "Oprah Winfrey",
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        person: "James Cameron",
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        person: "John Lennon",
    },

];


botton.addEventListener('click', function () {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
}) 