// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";

// const quoteDataArr = [
//   {
//     quote:
//       "Forget all the reasons why it won't work and believe the one reason why it will",
//     author: "Unknown",
//   },
//   {
//     quote: "You miss 100% of the shots you don't take.",
//     author: "Wayne Gretzky",
//   },
//   {
//     quote: "The only way to do great work is to love what you do.",
//     author: "Steve Jobs",
//   },
//   {
//     quote:
//       "Success is not the key to happiness. Happiness is the key to success.",
//     author: "Albert Schweitzer",
//   },
//   {
//     quote: "In the middle of difficulty lies opportunity.",
//     author: "Albert Einstein",
//   },
//   {
//     quote: "Believe you can and you're halfway there.",
//     author: "Theodore Roosevelt",
//   },
//   {
//     quote:
//       "The future belongs to those who believe in the beauty of their dreams.",
//     author: "Eleanor Roosevelt",
//   },
//   {
//     quote: "The best way to predict the future is to create it.",
//     author: "Peter Drucker",
//   },
//   {
//     quote: "Don't watch the clock; do what it does. Keep going.",
//     author: "Sam Levenson",
//   },
//   {
//     quote:
//       "The only limit to our realization of tomorrow will be our doubts of today.",
//     author: "Franklin D. Roosevelt",
//   },
//   {
//     quote:
//       "The greatest glory in living lies not in never falling, but in rising every time we fall.",
//     author: "Nelson Mandela",
//   },
//   {
//     quote: "Your time is limited, don't waste it living someone else's life.",
//     author: "Steve Jobs",
//   },
//   {
//     quote: "In a gentle way, you can shake the world.",
//     author: "Mahatma Gandhi",
//   },
//   {
//     quote:
//       "The best way to find yourself is to lose yourself in the service of others.",
//     author: "Mahatma Gandhi",
//   },
//   {
//     quote:
//       "Dream, dream, dream. Dreams transform into thoughts and thoughts result in action.",
//     author: "Dr. APJ Abdul Kalam",
//   },
//   {
//     quote: "You have to dream before your dreams can come true.",
//     author: "Dr. APJ Abdul Kalam",
//   },
//   {
//     quote: "I can, I will, and I must.",
//     author: "Ratan Tata",
//   },
//   {
//     quote:
//       "None can destroy iron, but its own rust can! Likewise, none can destroy a person, but its own mindset can!",
//     author: "Dr. APJ Abdul Kalam",
//   },
//   {
//     quote: "The future depends on what you do today.",
//     author: "Mahatma Gandhi",
//   },
//   {
//     quote: "Every adversity comes with an opportunity.",
//     author: "Dr. APJ Abdul Kalam",
//   },
//   {
//     quote:
//       "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
//     author: "Roy T. Bennett",
//   },
//   {
//     quote: "Success is not the destination, it's a journey.",
//     author: "Ratan Tata",
//   },
//   {
//     quote:
//       "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
//     author: "Ratan Tata",
//   },
//   {
//     quote:
//       "Education is the most powerful weapon which you can use to change the world.",
//     author: "Dr. APJ Abdul Kalam",
//   },
//   {
//     quote:
//       "Life is a difficult game. You can win it only by retaining your birthright to be a person.",
//     author: "Dr. APJ Abdul Kalam",
//   },
//   {
//     quote: "The mind is everything. What you think, you become.",
//     author: "Swami Vivekananda",
//   },

//   {
//     quote: "Arise, awake and do not stop until the goal is achieved.",
//     author: "Swami Vivekananda",
//   },
// ];

// let x = Math.floor(Math.random() * quoteDataArr.length);

// function App() {
//   return (
//     <div className="main">
//       <Card />
//     </div>
//   );
// }

// function Card() {
//   return (
//     <div className="card">
//       <QuoteBlock />
//       <Btn />
//     </div>
//   );
// }

// function btnclicked() {
//   x = Math.floor(Math.random() * quoteDataArr.length);
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// }

// function QuoteBlock() {
//   return (
//     <div className="quote-block">
//       <QuoteSentence />
//       <QuoteAuthor />
//     </div>
//   );
// }

// function QuoteSentence() {
//   return (
//     <div className="quote-sentence">
//       <p>{quoteDataArr[x].quote}</p>
//     </div>
//   );
// }

// function QuoteAuthor() {
//   return (
//     <div className="quote-author">
//       <p>~ {quoteDataArr[x].author}</p>
//     </div>
//   );
// }

// function Btn() {
//   return (
//     <div>
//       <button onClick={btnclicked} className="btn">
//         Get Another Quote
//       </button>
//     </div>
//   );
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

let quote = "You miss 100% of the shots you don't take.";
let author = "Wayne Gretzky";

function App() {
  return (
    <div className="main">
      <Card />
      <Btn />
    </div>
  );
}

function Card() {
  return (
    <div className="card">
      <QuoteBlock />
    </div>
  );
}

function QuoteBlock() {
  return (
    <div className="quote-block">
      <QuoteSentence />
      <QuoteAuthor />
    </div>
  );
}

function btnclicked() {
  const url = "https://api.quotable.io/random";

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      quote = data.content;
      author = data.author;

      ReactDOM.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>,
        document.getElementById("root")
      );
    });
}

function QuoteSentence() {
  return (
    <div className="quote-sentence">
      <p>{quote}</p>
    </div>
  );
}

function QuoteAuthor() {
  return (
    <div className="quote-author">
      <p>~ {author}</p>
    </div>
  );
}

function Btn() {
  return (
    <div>
      <button onClick={btnclicked} className="btn">
        Get Another Quote
      </button>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
