$(function() {
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
    getProject();
});

function getProject(){
    $.ajax({
        url:'/js/project.json',
        dataType:'json',
        type:'GET',
        success:function(item){
            // console.log(item);

            var itemHTML = "";
            for(var i = 0; i < item.length; i++){
                itemHTML += '<div class="box" data-aos="zoom-out-up">';
                console.log("item.type"+item[i].type);
                if(item[i].type == "link") {
                    itemHTML += '<a class="link" href="' + item[i].linkUrl + '" title="새창열림" target="_blank"  style="background-image: url('+ item[i].imgUrl +')">';
                    itemHTML += '<div class="txt">';
                    itemHTML += '<span class="label">'+ item[i].label +'</span>';
                    itemHTML += '<strong>'+ item[i].title +'</strong>';
                    itemHTML += '<ul>';
                    itemHTML += '</ul>';
                    itemHTML += '<em>VIEW</em>';
                    itemHTML += '</div>';
                    itemHTML += '</a>';
                }else if(item[i].type == "modal"){
                    itemHTML += '<button  style="background-image: url('+ item[i].imgUrl +')" type="button" class="link" data-button="modal" data-target="'+ item[i].target +'" data-width="auto">';
                        itemHTML += '<div class="txt">';
                            itemHTML += '<span class="label type1">'+ item[i].label +'</span>';
                            itemHTML += '<strong>'+ item[i].title +'</strong>';
                            itemHTML += '<ul>';
                            itemHTML += '</ul>';
                            itemHTML += '<em>VIEW</em>';
                        itemHTML += '</div>';
                    itemHTML += '</button>';
                }
                itemHTML += '</div>';

            }
            $('#projects .box_wrap').html(itemHTML);
        }
    });
}

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
