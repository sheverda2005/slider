let slider = document.querySelector('.slider');
let images = document.querySelectorAll('.slider .slider-line img');
let sliderLine = document.querySelector('.slider-line');
let width;
let traslateLeft = 0;
let arrLeft = [];
count = 0;
init();
function init() {
   width = slider.offsetWidth;
   console.log(width);
   sliderLine.style.width = width * images.length + 'px';
   images.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
   });
   roll();
}
window.addEventListener('resize', init);
function craete() {
   let createElement;
   for (let index = 0; index < images.length; index++) {
      createElement = document.createElement('div');
      createElement.classList.add('blok');
      document.querySelector('.caps__row').appendChild(createElement);
   }

}
craete();
let block = document.querySelectorAll('.blok');
block[0].classList.add('active');
document.querySelector('.prev').onclick = () => {
   count--;
   if (count < 0) {
      count = images.length - 1;
      block[0].classList.remove('active');

   }
   roll();
   block[count].classList.add('active');
   block[count + 1].classList.remove('active');

}
document.querySelector('.next').onclick = () => {
   count++;
   if (count >= images.length) {
      count = 0;
      block[block.length - 1].classList.remove('active');
   }
   roll();
   block[count].classList.add('active');
   block[count - 1].classList.remove('active');


}
for (let i = 0; i < block.length; i++) {
   block[i].onclick = () => {
      for (let j = 0; j < block.length; j++) {
         block[j].classList.remove('active');
      }
      block[i].classList.add('active');
      count = i;
      roll();
      arrLeft.push(-(count * width));
      console.log(arrLeft);

   }
}
function roll() {
   sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}



/*Ловим касание*/
let traslateTop = 0;
let imag = sliderLine.offsetWidth / images.length;
sliderLine.addEventListener('touchstart', function (event) {
   if (event.targetTouches.length == 1) {
      var touch = event.targetTouches[0];
      touchOffsetX = touch.pageX - touch.target.offsetLeft;
      touchOffsetY = touch.pageY - touch.target.offsetTop;
   }
}, false);
/*Передвигаем объект*/
sliderLine.addEventListener('touchmove', function (event) {
   if (event.targetTouches.length == 1) {
      var touch = event.targetTouches[0];
      OffsetLeft = touch.target.offsetLeft;
      OffsetTop = touch.target.offsetTop;
      traslateLeft = (touch.pageX - touchOffsetX) - OffsetLeft;
      traslateTop = (touch.pageY - touchOffsetY) - OffsetTop;

      if (count < images.length - 1) {
         if (count >= 1) {
            if (traslateLeft <= 0 || traslateLeft >= 0) {

               if (arrLeft.length >= 3) {
                  sliderLine.style.transition = 'all ease 0s';
                  let translatefelt = traslateLeft + arrLeft[arrLeft.length - 1];
                  sliderLine.style.transform = "translate(" + (translatefelt) + "px";

               }
               if (arrLeft.length == 2) {
                  sliderLine.style.transition = 'all ease 0s';
                  let translatefelt = traslateLeft + arrLeft[arrLeft.length - 1];
                  sliderLine.style.transform = "translate(" + (translatefelt) + "px";

               }
               if (arrLeft.length == 1) {
                  sliderLine.style.transition = 'all ease 0s';
                  let translatefelt = traslateLeft + arrLeft[arrLeft.length - 1];
                  sliderLine.style.transform = "translate(" + (translatefelt) + "px";

               }
               if (arrLeft.length == 0) {
                  sliderLine.style.transition = 'all ease 0s';
                  sliderLine.style.transform = "translate(" + (traslateLeft) + "px";

               }


            }



         } else if (count < 1) {

            if (traslateLeft <= 0) {

               if (arrLeft.length >= 3) {
                  sliderLine.style.transition = 'all ease 0s';
                  let translatefelt = traslateLeft + arrLeft[arrLeft.length - 1];
                  sliderLine.style.transform = "translate(" + (translatefelt) + "px";

               }
               if (arrLeft.length == 2) {
                  sliderLine.style.transition = 'all ease 0s';
                  let translatefelt = traslateLeft + arrLeft[arrLeft.length - 1];
                  sliderLine.style.transform = "translate(" + (translatefelt) + "px";

               }
               if (arrLeft.length == 1) {
                  sliderLine.style.transition = 'all ease 0s';
                  let translatefelt = traslateLeft + arrLeft[arrLeft.length - 1];
                  sliderLine.style.transform = "translate(" + (translatefelt) + "px";

               }
               if (arrLeft.length == 0) {
                  sliderLine.style.transition = 'all ease 0s';
                  sliderLine.style.transform = "translate(" + (traslateLeft) + "px";

               }

            } else if (traslateLeft > 0) {
               sliderLine.style.transform = "translate(" + (0) + "px";
            }
         }
      }
      if (count == images.length - 1) {
         if (traslateLeft > 0) {
            if (arrLeft.length >= 3) {
               sliderLine.style.transition = 'all ease 0s';
               let translatefelt = traslateLeft + arrLeft[arrLeft.length - 1];
               sliderLine.style.transform = "translate(" + (translatefelt) + "px";

            }
            if (arrLeft.length == 2) {
               sliderLine.style.transition = 'all ease 0s';
               let translatefelt = traslateLeft + arrLeft[arrLeft.length - 1];
               sliderLine.style.transform = "translate(" + (translatefelt) + "px";

            }
            if (arrLeft.length == 1) {
               sliderLine.style.transition = 'all ease 0s';
               let translatefelt = traslateLeft + arrLeft[arrLeft.length - 1];
               sliderLine.style.transform = "translate(" + (translatefelt) + "px";

            }
            if (arrLeft.length == 0) {
               sliderLine.style.transition = 'all ease 0s';
               sliderLine.style.transform = "translate(" + (traslateLeft) + "px";

            }

         }
      }
      console.log(traslateLeft);
   }
}, false);
sliderLine.addEventListener('touchend', function (event) {
   if (count < images.length - 1) {
      if (arrLeft.length >= 3) {
         arrLeft.push(traslateLeft + arrLeft[arrLeft.length - 1]);
      }
      if (arrLeft.length == 2) {
         arrLeft.push(arrLeft[arrLeft.length - 1] + arrLeft[arrLeft.length - 2]);
      }
      if (traslateLeft > 0 && count < 1) {
         sliderLine.style.transform = "translate(" + (0) + "px";
      } else if (traslateLeft <= 0) {
         if (Math.abs(traslateLeft) > imag / 2) {
            sliderLine.style.transition = 'all ease 1s';
            count++;
            sliderLine.style.transform = "translate(-" + (count * width) + "px";
            console.log(arrLeft);
            arrLeft.push(-width * count);
         } else if ((Math.abs(traslateLeft) < imag / 2)) {
            if (arrLeft.length >= 3) {
               arrLeft.pop();
            }
            sliderLine.style.transition = 'all ease 1s';
            sliderLine.style.transform = "translate(" + (arrLeft[arrLeft.length - 1]) + "px";
            console.log(arrLeft);
            if (count < 1) {
               sliderLine.style.transform = "translate(" + (0) + "px";
            }

         }
      } else if (traslateLeft > 0) {
         if (traslateLeft > imag / 2) {
            sliderLine.style.transition = 'all ease 1s';
            count--;
            sliderLine.style.transform = "translate(-" + (count * width) + "px";
            console.log(arrLeft);
            arrLeft.push(-width * count);
         }
         if (traslateLeft < imag / 2) {
            sliderLine.style.transition = 'all ease 1s';
            sliderLine.style.transform = "translate(-" + (count * width) + "px";
            console.log(arrLeft);
            arrLeft.push(-width * count);
         }
      }

   } else if (count == images.length - 1) {
      if (traslateLeft > 0) {
         if (traslateLeft > imag / 2) {
            sliderLine.style.transition = 'all ease 1s';
            count--;
            sliderLine.style.transform = "translate(-" + (count * width) + "px";
            console.log(arrLeft);
            arrLeft.push(-width * count);
         }
         if (traslateLeft < imag / 2) {
            sliderLine.style.transition = 'all ease 1s';
            sliderLine.style.transform = "translate(-" + (count * width) + "px";
            console.log(arrLeft);
            arrLeft.push(-width * count);
         }
      }



   }
   console.log(arrLeft);
   console.log(block);
   for (let i = 0; i < block.length; i++) {
      block[i].classList.remove('active');
      block[count].classList.add('active');

   }


});
