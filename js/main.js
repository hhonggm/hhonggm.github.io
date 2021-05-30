$(document).ready(function(){
    $(window).on("scroll",function(){
    
    });

    $(document).on('click','#gnb_layout ul li a',function(){
        let pageTop = $(this).attr('href');

        $('html, body').animate({
          scrollTop : $(pageTop).offset().top
        },1000)
      });


    visualTextshuffle();
    AOS.init();


    $.ajax({
        url:'/js/project.json',
        dataType:'json',
        type:'get',
        success:function(item){
            console.log(item);

        }
    });


});

function visualTextshuffle() {
    var $textShuffle01 = $(".textshuffles.txt1");
    var $textShuffle02 = $(".textshuffles.txt2");
    $textShuffle01.shuffleLetters({
        'text': 'Web Publisher',
        'random': 'Web Publisher Front-and Developer',
        'fps': 10,
        'callback': function() {
            $textShuffle01.removeClass("is-active");
        }
    });
    $textShuffle02.shuffleLetters({
        'text': "Front-and Developer",
        'random': 'Web Publisher Front-and Developer',
        'fps': 10,
        'callback': function() {
            $textShuffle02.removeClass("is-active");
        }
    });
}
