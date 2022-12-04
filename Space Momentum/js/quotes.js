const quotes = [
  {
    quote: "To infinity and beyond!",
    author: "Toy Story",
  },
  {
    quote:
      "The heart isn’t not so easily changed but the head can be persuaded.",
    author: "Frozen",
  },
  {
    quote: "Life is a little bit messy. We all make mistakes.",
    author: "Zootopia",
  },
  {
    quote:
      "Thou sword of truth fly swift and sure. That evil die and good endure.",
    author: "Sleeping Beauty",
  },
  {
    quote: "Whatever choice you make, let it come from heart.",
    author: "The Princess Diaries 2",
  },
  {
    quote:
      "You can’t be happy every day. But there are happy things every day.",
    author: "Winnie the Pooh",
  },
  {
    quote:
      "Money is like gasoline during a road trip. You do not want to run out of gas on your trip, but you are not doing a tour of gas stations.",
    author: "Tim O Reilly",
  },
  {
    quote: "The greatest risk any of us will take, is to be seen as we are.",
    author: "Cinderella",
  },
  {
    quote: "I can't go back to yesterday, because I was different person then.",
    author: "Cinderella",
  },
  {
    quote: "You mean more to me than anything in this world.",
    author: "Peter pan",
  },
  {
    quote: "Even miracles take a little time.",
    author: "Cinderella",
  },
  {
    quote: "Today’s special moments are tomorrow’s memories.",
    author: "Aladdin",
  },
  {
    quote: "I fell for a while now, but I’m going to get up.",
    author: "Bambi",
  },
  {
    quote:
      "Don’t close your eye, Look! The reality of fear can be different than you think.",
    author: "Finding Nemo",
  },
  {
    quote: "All one can do is the next right thing.",
    author: "Frozen",
  },
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
