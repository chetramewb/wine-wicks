


$('.slide-full').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots:true,
    fade: true,
    autoplaySpeed: 10000,
    nextArrow: '<button class="next-arrow">   <img src="./src/images/next-arrow.png" alt="next-arrow">  </button>', 
    prevArrow: '<button class="back-arrow">  <img src="./src/images/back-arrow.png" alt="next-arrow"> </button>', 
   

    responsive: [
    {
    breakpoint: 992,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    },
    {
    breakpoint: 525,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    
    ]
    
    });
     
   
     
  $('.slide-box').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: '<button class="next-arrow"> <i class="fas fa-angle-right"></i> </button>', 
    prevArrow: '<button class="back-arrow"> <i class="fas fa-angle-left"></i> </button>', 
    responsive: [
    {
    breakpoint: 992,
    settings: {
    slidesToShow: 2,
    slidesToScroll: 1
    }
    },
    {
    breakpoint: 525,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    
    ]
    
    });

  $('.testmonials-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    nextArrow: '<button class="next-arrow"> <i class="fas fa-angle-right"></i> </button>', 
    prevArrow: '<button class="back-arrow"> <i class="fas fa-angle-left"></i> </button>', 
    responsive: [ 
    {
    breakpoint: 992,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    },
    {
    breakpoint: 525,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
    }
    ]
    });
    
    
  
    
  