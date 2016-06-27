var tplHome = require('../templates/home.string');

// 引用公共方法
var util = require('../utils/fn.js');

SPA.defineView('home', {
  html: tplHome,

  plugins: ['delegated'],

  init: {
    mySwiper: null
  },

  bindActions: {
    'tap.slide': function (e, data) {
      this.mySwiper.slideTo($(e.el).index())
    }
  },

  bindEvents: {
    'show': function () {
			var mySwiper = new Swiper ('.swiper-container', {
			direction: 'horizontal',
			loop: true,
			
			// 如果需要分页器
			pagination: '.swiper-pagination',  
			});
    }
  }
  
});
