/**
 * @name    Shuffle Letters
 * @author    Martin Angelov
 * @version   1.0
 * @custom   Leecoder / 함수 수정(입력받은 값만으로 셔플 가능하게 변경)
 * @url     http://tutorialzine.com/2011/09/shuffle-letters-effect-jquery/
 * @license   MIT License
 */

(function($){
  
  $.fn.shuffleLetters = function(prop){
    this.addClass("is-active");    //active
    
    var options = $.extend({
      "step"    : 12,      // How many times should the letters be changed
      "fps"   : 15,     // Frames Per Second
      "text"    : "",       // Use this text instead of the contents
      "random"    : "",
      "callback"  : function(){}  // Run once the animation is complete
    },prop)
    
    return this.each(function(){
      
      var el = $(this);
      var str = "";
      var thistext = el.text();
      var thisRandom = options.random;


      // Preventing parallel animations using a flag;

      if(el.data('animated')){
        return true;
      }

      el.data('animated',true);

      if(options.text) {
        str = options.text.split('');
      }
      else {
        str = el.text().split('');
      }

      // The types array holds the type for each character;
      // Letters holds the positions of non-space characters;

      var types = [],
        letters = [];

      // Looping through all the chars of the string
      
      for(var i=0;i<str.length;i++){
        
        var ch = str[i];
        
        if(ch == " "){
          types[i] = "space";
          continue;
        }
        else if(/[a-z]/.test(ch)){
          types[i] = "lowerLetter";
        }
        else if(/[A-Z]/.test(ch)){
          types[i] = "upperLetter";
        }
        else if(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(ch)){
          types[i] = "koreanLetter";
        }
        else {
          types[i] = "symbol";
        }
        
        letters.push(i);
      }
      
      el.html("");

      // Self executing named function expression:
      
      (function shuffle(start){
      
        //옵션에 지정한 프레임과 속도만큼 실행
        var i,
          len = letters.length, //전체 문자열 길이
          strCopy = str.slice(0); //기존 문자 슬라이스

        if(start>len){
          //애니메이션 끝나면 콜백 실행
          el.data('animated',false);
          options.callback(el);
          return;
        }

        // All the work gets done here
        for(i=Math.max(start,0); i < len; i++){

          // The start argument and options.step limit
          // the characters we will be working on at once
          
          if( i < start+options.step){
            //셔플문자를 문자열에 심어주기
            strCopy[letters[i]] = randomCharSelf(types[letters[i]], thisRandom);
          }
          else {
            strCopy[letters[i]] = "";
          }
        }

        //문자 이어 붙이기(셔플 후 기존 문자로)
        el.text(strCopy.join(""));
        setTimeout(function(){
          
          shuffle(start+1);
          
        },1000/options.fps);
        
      })(-options.step);
    });
  };
  //영문 대소문자, 국문, 심볼 구분해서 셔플 문자 추출 (106 라인에 사용)
  function randomChar(type, thistext){
    var pool = "";
    
    if (type == "lowerLetter"){
      pool = "abcdefghijklmnopqrstuvwxyz0123456789";
    }
    else if (type == "upperLetter"){
      pool = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    }
    else if (type == "koreanLetter"){
      pool = "대한민국초시대를열어가겠습니다";
    }
    else if (type == "symbol"){
      pool = "1234567890‘?’“!”(%)[#]{@}/&-+÷×=®©$€£¥¢:;,.*";
    }

    var arr = pool.split('');
    return arr[Math.floor(Math.random()*arr.length)];
  }
  //입력받은 글자를 이용해서 셔플
  function randomCharSelf(type, thisRandom){
    var arr = thisRandom.split('');
    return arr[Math.floor(Math.random()*arr.length)];
  }
})(jQuery);
