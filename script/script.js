var panel = $('.panel_btn');
var panelIcon = $('.nav_panel_licon');
panel.on('click',function(){
    if($(this).hasClass('panel_btn_in')){
        panel.removeClass('panel_btn_in');
        $(this).removeClass('panel_btn_in');
        $(this).find('.nav_panel_licon').removeClass('glyphicon-chevron-down');
        $(this).find('.nav_panel_licon').addClass('glyphicon-chevron-left');
    }else{
        panel.removeClass('panel_btn_in');
        $(this).addClass('panel_btn_in');
        panelIcon.removeClass('glyphicon-chevron-down');
        panelIcon.addClass('glyphicon-chevron-left');
        $(this).find('.nav_panel_licon').removeClass('glyphicon-chevron-left');
        $(this).find('.nav_panel_licon').addClass('glyphicon-chevron-down');
    }
});


var closeBtn = $('.panel_close');

closeBtn.on('click',function(){
    $(this).parent().parent().parent().parent().slideUp();
});