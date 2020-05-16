/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src"="./assets/carousel/computer.jpeg />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const imgArrayRef = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"]
function stretchCarosel(imgArray) {
  carouselAppend = document.querySelector('.carousel-container')
  //html markup creation
  let carouselContainer = document.createElement('div');
  let leftButton = document.createElement('div');
  let rightButton = document.createElement('div');

  //Parent Child
  carouselContainer.append(leftButton)
  imgArray.forEach(el => {
    let image = document.createElement('img');
    image.src = el;
    carouselContainer.append(image)
  })
  carouselContainer.append(rightButton)

  //Class list
  carouselContainer.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  //add content
  leftButton.textContent = ' < ';
  rightButton.textContent = ' > ';
  carouselAppend.append(carouselContainer)
  return carouselContainer
}
stretchCarosel(imgArrayRef)

function buttons(){
  let newone = document.querySelectorAll('.carousel-container img');
  newone[0].style.display = 'inline-block';
  let rightButton = document.querySelector('.right-button');
  let leftButton = document.querySelector('.left-button');
  let rightInterval;
  let i = 0;

  setInterval(rightButton.addEventListener('click', () => {    
    if(i <= newone.length){
      newone[i].style.display = 'none';
      i++
        if(i <= newone.length - 1 && i != 0){
          newone[i].style.display = 'inline-block';
        }
        if(i === newone.length){
          newone[0].style.display = 'inline-block'
          i = 0;
        }
      }
    }), 1000)


    // leftButton.addEventListener('click', () => {    
    //   if(i <= newone.length && i < 0){
    //     newone[i].style.display = 'none';
    //     i--
    //       if(i <= newone.length - 1 && i != 0){
    //         newone[i].style.display = 'inline-block';
    //       }
    //       if(i === newone.length){
    //         newone[0].style.display = 'inline-block'
    //         i = 0;
    //       }
    //     }
    //   })
}
buttons()





