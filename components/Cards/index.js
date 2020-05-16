// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(object => {
    let articles = object.data;
    for(x in articles){
        let newArticles = (articles[x]);
        for(x in newArticles){
            let arrayArticles = newArticles[x]
            arrayArticles.forEach(el => {
                newCard(el)
            })
        }
    }
})

function newCard (object){

    //html markup creation
    let cardsAppend = document.querySelector('.cards-container');
    let cardContainer = document.createElement('div');
    let headlineDiv = document.createElement('div');
    let authorDiv = document.createElement('div');
    let imgContainer = document.createElement('img');
    let authorNameSpan = document.createElement('span');

    //Class List
    cardContainer.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    //Append Children

    cardContainer.append(headlineDiv, authorDiv);
    authorDiv.append(imgContainer, authorNameSpan);

    //update content

    headlineDiv.textContent = object.headline;
    imgContainer.src = object.authorPhoto;
    authorNameSpan.textContent = object.authorName;
    cardsAppend.append(cardContainer)
    return cardContainer
} 

