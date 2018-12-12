/**
 * Created by nzy on 2016/2/16.
 */
var left= 1;
var right= 1;
var firstNode,lastNode,ltempNode,rtempNode;
var tempNode;
$(document).ready(function(){
    $('.bodyTopCenter_2 button').hide();
    $('.inp').click(function(){
        $('.header_1_2_1').css('display','none').next().toggleClass('inp_2_1');
    }).focusout(function(){
        $('.header_1_2_1').css('display','block').next().toggleClass('inp_2_1');
    });

    $('.header_2_1').mousemove(function(){
        $('.header_2_2').css('display','block');
    }).mouseleave(function(){
        $('.header_2_2').css('display','none');
    });
    $('.header_2_2').mousemove(function(){
        $(this).css('display','block');
    }).mouseleave(function(){
        $(this).css('display','none');
    });

    $('.bodyTopLeft>ul>li').each(function(index){
          $(this).mouseenter(function(){
             $(this).addClass('bodyTopLeftActive').append('<small></small>')
             .siblings().removeClass('bodyTopLeftActive').find('small').remove();
          $('.bodyTopLeftContent div:nth-of-type('+(index+1)+')').css('display','block')
             .siblings().css('display','none');
          });
    });

    $('.bodyTopLeft').mouseleave(function(){
        $('.bodyTopLeft>ul>li').removeClass('bodyTopLeftActive').find('small').remove();
        $('.bodyTopLeftContent div').css('display','none')
    });

    $('#carousel-example-generic').carousel({
        interval: 2000
    })

	//向左
    $('.Left').on('click',function(){
        $('.Left').off();
        leftImg();
        $('.Left').on('click',reLeftImg);
    });
    function reLeftImg(){
        $('.Left').off();
        setTimeout(function(){
            leftImg();
            $('.Left').on('click',reLeftImg);
        },200);
    }
    function leftImg(){
        firstNode = $('.bodyTopCenter_2 img').first();
        ltempNode = firstNode.clone();
        $('.bodyTopCenter_2 img').css({left:''}).animate({
            right:'182px'
        },200,function(){
            $('.imgContent img').css({
                right:'0px'
            });
            $('.imgContent').append(ltempNode);
            firstNode.remove();
        });
    }

	//向右
    $('.Right').on('click',function(){
        $('.Right').off();
        rightImg();
        $('.Right').on('click',reRightImg);
    });
    function reRightImg(){
        $('.Right').off();
        setTimeout(function(){
            rightImg();
            $('.Right').on('click',reRightImg);
        },200);
    }
    function rightImg(){
        lastNode = $('.bodyTopCenter_2 img').last();
        rtempNode = lastNode.clone();
        $('.bodyTopCenter_2 img').css({right:''}).animate({//同时让所有img移动
            left:'182px'
        },200,function(){ //这有5个img 所以会执行5次回调函数 但这5次回调都是同时执行
            $('.imgContent img').css({
                left:'0px'
            });
            $('.imgContent').prepend(rtempNode); //所以这里原本添加5个node,但都是一瞬,所以机器在那一时刻接受的就像只有一次而已
                                                 //使用lastNode.clone()就会产生效率问题,不能达到同时
            lastNode.remove();
        });
    }

    $('.bodyTopCenter_2').mouseenter(function(){
        $('.bodyTopCenter_2 button').fadeIn(500);
    }).mouseleave(function(){
        $('.bodyTopCenter_2 button').fadeOut(500);
    });

    $('.bodyTopButtomRight ul li').each(function(index){
        $(this).mouseenter(function(){
            $(this).addClass('bodyTopButtomRightActive').append('<s></s>')
                .siblings().removeClass('bodyTopButtomRightActive').find('s').remove();
            $('.bodyTopButtomRightContent:nth-of-type('+(index+1)+')') .css({ display:'block'})
                .siblings().css({display:'none'});
        });
    });

    $('.contentDiv ul li').each(function(index){
        $(this).mouseenter(function(){
            $(this).find('.contentDivP').slideDown(210);
            $(this).find('.player').css({'display':'block'});
            $(this).find('.thumbnail').css({'z-index': 100}).animate({
                'height':'130%'
            },50);
        }).mouseleave(function(){
            $('.contentDivP').slideUp(210);
            $(this).find('.player').css({'display':'none'});
            $('.thumbnail').css({'z-index': ''}).animate({
                'height':'100%'
            },50);
        });
    });

    $('.contentUl li').each(function(index){
        $(this).mouseenter(function(){
            $(this).addClass('contentUlActive').siblings().removeClass('contentUlActive');
            $('.contentDiv>div:nth-child('+(index+1)+')').css({'display':'block'}).siblings().css({'display':'none'});
        });
    });

   $('.content_2 ul li').each(function(){
       $(this).mouseenter(function(){
          $(this).css({'border':'1px solid #35b558'}).find('.liBu').addClass('liBuChange').siblings().find('.liBu').removeClass('liBuChange');
       }).mouseleave(function(){
          $(this).css({'border':''}).find('.liBu').removeClass('liBuChange');
       });
   })
});