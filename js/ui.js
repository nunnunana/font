
  // console.log(Element.prototype);
  (function(global){
    'use strict';

    // 지역 내 참조 변수 선언
    var forEach = Array.prototype.forEach;
    var document, mainBtns, mainContent, subBtns, subContent, typeBtns, typeContent, title, subTitle, whatIsIt, putId, titleValue, mainActiveBtn, subActiveBtn, typeActiveBtn;
    
    // 초기화 함수
    function init() {
      // 컨트롤 수행할 요소를 참조
      document = global.document;
      mainBtns = document.querySelectorAll('.main-btns button');
      mainContent = document.querySelector('.main-content');
      subBtns = document.querySelectorAll('.sub-btns button');
      subContent = document.querySelector('.text');
      title = document.querySelector('.title');
      subTitle = document.querySelector('.sub-title');
      typeBtns = document.querySelectorAll('.type-btns button');
      typeContent = document.querySelector('.type');

      bindEvents();
    }

    // 이벤트 연결 함수
    function bindEvents() {
      forEach.call(mainBtns, function(btn){
        whatIsIt = mainBtns;
        btn.addEventListener('click', changeClass.bind(btn, whatIsIt));
      });
    
      forEach.call(subBtns, function(btn){
        whatIsIt = subBtns;
        btn.addEventListener('click', changeClass.bind(btn, whatIsIt));
      });

      forEach.call(typeBtns, function(btn){
        whatIsIt = typeBtns;
        btn.addEventListener('click', changeClass.bind(btn, whatIsIt));
      });
    }
    
    // 이벤트 핸들러(함수)
    function changeClass(whatIsIt, e) {
      e.preventDefault();
      if(whatIsIt === mainBtns){
        mainActiveBtn = document.querySelector('.main-btns button.active');
        mainActiveBtn.classList = [];
        this.classList = ['active'];
        putId = 'main-content' + ' ' + this.getAttribute('id');
        titleValue = this.textContent;
        title.textContent = titleValue;
        mainContent.classList = [putId];
      } else if (whatIsIt === subBtns) {
        subActiveBtn = document.querySelector('.sub-btns button.active');
        subActiveBtn.classList = [];
        this.classList = ['active'];
        putId = 'text' + ' ' + this.getAttribute('id');
        titleValue = '[ ' + this.textContent + ' ]';
        subTitle.textContent = titleValue;
        subContent.classList = [putId];
      } else {
        typeActiveBtn = document.querySelector('.type-btns button.active');
        typeActiveBtn.classList = [];
        this.classList = ['active'];
        putId = 'text' + ' ' + this.getAttribute('id');
        typeContent.classList = [putId];
      }
    }

    // 초기화
    init();

  })(window);