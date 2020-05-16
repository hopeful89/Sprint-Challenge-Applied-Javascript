// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let headerAppend = document.querySelector('.header-container');//append container here

    //html markup variables
    let headerContainer = document.createElement('div');
    let headerDateSpan = document.createElement('span');
    let headerH1 = document.createElement('h1');
    let headerTempSpan = document.createElement('span');

    //appened children to container
    headerContainer.append(headerDateSpan, headerH1, headerTempSpan);

    //add classList
    headerContainer.classList.add('header');
    headerDateSpan.classList.add('date')
    headerTempSpan.classList.add('temp')

    //update textContent
    headerDateSpan.textContent = "SMARCH 28, 2019";
    headerH1.textContent = "Lambda times";
    headerTempSpan.textContent = "98°";

    headerAppend.append(headerContainer)
    return headerContainer
}
Header();
