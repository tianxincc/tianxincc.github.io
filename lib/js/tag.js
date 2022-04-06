/**
 * 使用js仿标签云
 * @param tagName 选中标签名称
 * @constructor
 */

function TagListShow(tagName)
{
    $(".tags").addClass("sr-only"); // 追加样式

    $(".archive").removeClass("sr-only"); //移除

    $("."+tagName).removeClass("sr-only"); //移除

}

// 回到顶部
jQuery(document).ready(function($){
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_top_duration = 700,
        //grab the "back to top" link
        $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
        ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('') : $back_to_top.removeClass('sr-only');
        if( $(this).scrollTop() > offset_opacity ) {
            $back_to_top.addClass('cd-fade-out');
        }
    });

    //smooth scroll to top
    $back_to_top.on('click', function(event){
        event.preventDefault();
        $('body,html').animate({
                scrollTop: 0 ,
            }, scroll_top_duration
        );
    });

});