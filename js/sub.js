$(function(){
    let scTop = 0;
    const hd = $("#paris-hd");
    let hdH = hd.height();
    const lnb = $(".lnb-container");
    let lnbPos = lnb.offset().top - hdH;

    $(window).resize(function(){
        init();
    });

    function init() {
        hdH = hd.height();
        lnbPos = lnb.offset().top - hdH;
    }

    $(document).scroll(function(){
        scTop = $(document).scrollTop();
        if(scTop > lnbPos){
            lnb.addClass("fixed").css("top", hdH);
        } else {
            lnb.removeClass("fixed").css("top", "inherit");
        }
    });
});