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
        type:'post',
        success:function(item){
            var itemHTML = "";
                itemHTML += '<div class="box" data-aos="zoom-out-up">';


                if(item.type == "link") {
                    itemHTML += '<a class="link" href="' + item.linkUrl + '" title="새창열림" target="_blank"  style="background-image: url('+ item.imgUrl +')">';
                    itemHTML += '<div class="txt">';
                    itemHTML += '<span class="label">'+ item.label +'</span>';
                    itemHTML += '<strong>'+ item.title +'</strong>';
                    itemHTML += '<ul>';
                    itemHTML += '</ul>';
                    itemHTML += '<em>VIEW</em>';
                    itemHTML += '</div>';
                    itemHTML += '</a>';
                }else if(item.type == "modal"){
                }
                itemHTML += '</div>';
                elements.push($(itemHTML).get(0));
                $("#projects .box_wrap").append(itemHTML);
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
