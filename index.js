 // headr mobail
 let list = document.querySelector('.list')
 let close = document.querySelector('.close')
 let parent_li = document.querySelector('.parent-li')
 list.addEventListener('click', function () {
     parent_li.classList.add('right-0')
 })
 close.addEventListener('click', function () {
     parent_li.classList.remove('right-0')
 })


 // main scroll-----------------------
 let x = document.getElementsByTagName('main')[0]
 let count_scroll = 0;
 let box_img = document.querySelectorAll('.box-img>img')
 x.addEventListener('scroll', (e) => {
     count_scroll = (Math.round(e.target.scrollTop));

     function hidden_previous() {
         box_img[0].classList.add('hidden')
         box_img[1].classList.add('hidden')
         box_img[2].classList.add('hidden')
         box_img[3].classList.add('hidden')
         box_img[4].classList.add('hidden')
         box_img[5].classList.add('hidden')
         box_img[6].classList.add('hidden')
         box_img[7].classList.add('hidden')
         box_img[8].classList.add('hidden')
         box_img[9].classList.add('hidden')
     }

     if (count_scroll == 40) {
         hidden_previous()
         box_img[1].classList.remove('hidden')
     }
     if (count_scroll > 50 && count_scroll < 80) {
         hidden_previous()
         box_img[2].classList.remove('hidden')
     }
     if (count_scroll > 90 && count_scroll < 120) {
         hidden_previous()
         box_img[3].classList.remove('hidden')
     }
     if (count_scroll > 130 && count_scroll < 170) {
         hidden_previous()
         box_img[4].classList.remove('hidden')
     }
     if (count_scroll > 180 && count_scroll < 220) {
         hidden_previous()
         box_img[5].classList.remove('hidden')
     }
     if (count_scroll > 230 && count_scroll < 270) {
         hidden_previous()
         box_img[6].classList.remove('hidden')
     }
     if (count_scroll > 280 && count_scroll < 320) {
         hidden_previous()
         box_img[7].classList.remove('hidden')
     }
     if (count_scroll > 330 && count_scroll < 370) {
         hidden_previous()
         box_img[8].classList.remove('hidden')
     }
     if (count_scroll > 390 && count_scroll < 420) {
         hidden_previous()
         box_img[9].classList.remove('hidden')
     } if (count_scroll > 390 && count_scroll < 420) {
         hidden_previous()
         box_img[9].classList.remove('hidden')
     }
 })
 //box-section2---------------------------
 let box_section2 = document.querySelectorAll('.box-section2');
 let img = document.querySelectorAll('.box-section2>img');
 let box_h4 = document.querySelectorAll('.box-section2>h4');
 let box_p = document.querySelectorAll('.box-section2>p');


 box_section2.forEach((val, i) => {
     val.addEventListener('mousemove', function () {
         box_p[i].classList.add('mt-[0%]');
         img[i].classList.add('mt-[-8%]');
         box_h4[i].classList.add('mt-[-1%]');


     })

     val.addEventListener('mouseleave', function () {
         box_p[i].classList.remove('mt-[0%]');
         img[i].classList.remove('mt-[-8%]');
         box_h4[i].classList.remove('mt-[-1%]');
     })

 })
 //flower rotaed ----------------------------------------
 let img_rotate =document.querySelector('.img-rotate')
 x.addEventListener('scroll',function(){
     let temp = ((this.scrollTop)/500)*50
     img_rotate.classList.add('rotate-['+temp+'deg]')
 })
