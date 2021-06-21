$(function() {
    $(window).on("scroll",function(){
        var scrollTop = $(window).scrollTop();
        var offsetTop = $("#projects .box_wrap").offset().top;
        var height = $("#projects .box_wrap").height();
        var offsetBottom = offsetTop + height;
        var thisHeight = $("#projects .box_wrap .list1").height();
        var abBottom = offsetBottom - thisHeight;

        if(offsetTop < scrollTop && scrollTop <= abBottom){
            $("#projects .box_wrap").addClass("fix");
        }else if(abBottom < scrollTop){
            $("#projects .box_wrap").addClass("bottom");
            $("#projects .box_wrap").removeClass("fix");
        }else{
            $("#projects .box_wrap").removeClass("fix");
            $("#projects .box_wrap").removeClass("bottom");
        }
    });

    $(document).on('click','#gnb_layout ul li a',function(){
        let pageTop = $(this).attr('href');

        $('html, body').animate({
          scrollTop : $(pageTop).offset().top
        },1000)
      });


    visualTextshuffle();
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
            for(var i = 1; i < item.length; i++){
                itemHTML += '<div class="box">';
                // console.log("item.type"+item[i].type);
                if(item[i].type == "link") {
                    itemHTML += '<a class="link" href="' + item[i].linkUrl + '" title="새창열림" target="_blank">';
                    itemHTML += '<div class="thumb">';
                    itemHTML += '<img src="'+ item[i].imgUrl +'" alt="">';
                    itemHTML += '</div>';
                    itemHTML += '<div class="txt">';
                    itemHTML += '<span class="label">'+ item[i].label +'</span>';
                    itemHTML += '<strong>'+ item[i].title +'</strong>';
                    itemHTML += '<ul>';
                    itemHTML += '</ul>';
                    itemHTML += '<em>VIEW</em>';
                    itemHTML += '</div>';
                    itemHTML += '</a>';
                }else if(item[i].type == "modal"){
                    itemHTML += '<button type="button" class="link" data-button="modal" data-target="'+ item[i].target +'" data-width="auto">';
                    itemHTML += '<div class="thumb">';
                    itemHTML += '<img src="'+ item[i].imgUrl +'" alt="">';
                    itemHTML += '</div>';
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
            
            var itemHTML2 = "";
            itemHTML2 += '<div class="box">';
            // console.log("item.type"+item[i].type);
            if(item[0].type == "link") {
                itemHTML2 += '<a class="link" href="' + item[0].linkUrl + '" title="새창열림" target="_blank">';
                itemHTML2 += '<div class="thumb">';
                itemHTML2 += '<img src="'+ item[0].imgUrl +'" alt="">';
                itemHTML2 += '</div>';
                itemHTML2 += '<div class="txt">';
                itemHTML2 += '<span class="label">'+ item[0].label +'<b>01</b></span>';
                itemHTML2 += '<strong>'+ item[0].title +'</strong>';
                itemHTML2 += '<ul>';
                itemHTML2 += '</ul>';
                itemHTML2 += '<em>VIEW</em>';
                itemHTML2 += '</div>';
                itemHTML2 += '</a>';
            }else if(item[0].type == "modal"){
                itemHTML2 += '<button type="button" class="link" data-button="modal" data-target="'+ item[0].target +'" data-width="auto">';
                itemHTML2 += '<div class="thumb">';
                itemHTML2 += '<img src="'+ item[0].imgUrl +'" alt="">';
                itemHTML2 += '</div>';
                itemHTML2 += '<div class="txt">';
                        itemHTML2 += '<span class="label type1">'+ item[0].label +'<b>01</b></span>';
                        itemHTML2 += '<strong>'+ item[0].title +'</strong>';
                        itemHTML2 += '<ul>';
                        itemHTML2 += '</ul>';
                        itemHTML2 += '<em>VIEW</em>';
                    itemHTML2 += '</div>';
                itemHTML2 += '</button>';
            }
            itemHTML2 += '</div>';

            $('#projects .box_wrap .list2').html(itemHTML);
            $('#projects .box_wrap .list1').html(itemHTML2);
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
