$(function() {
    // 区域
    $(".classify li").eq(0).on({
            touchstart: function() {
                // $(this).css("color", "red")
                $(".outer").toggle();
                $(".price,.type,.more").hide();
                $(this).toggleClass('lic').siblings().removeClass("lic");
                $(".t1 img").eq(0).toggle().siblings().show();
                $(".t2 img").eq(0).toggle().siblings().hide();
            }
        })
        // 价格
    $(".classify li").eq(1).on({
            touchstart: function() {
                // $(this).css("color", "red")
                $(".price").toggle();
                $(".outer,.type,.more").hide();
                $(this).toggleClass('lic').siblings().removeClass("lic");
                $(".t1 img").eq(1).toggle().siblings().show();
                $(".t2 img").eq(1).toggle().siblings().hide();
            }
        })
        // 房型
    $(".classify li").eq(2).on({
            touchstart: function() {
                // $(this).css("color", "red")
                $(".type").toggle();
                $(".price,.outer,.more").hide();
                $(this).toggleClass('lic').siblings().removeClass("lic");
                $(".t1 img").eq(2).toggle().siblings().show();
                $(".t2 img").eq(2).toggle().siblings().hide();
            }
        })
        // 更多
    $(".classify li").eq(3).on({
        touchstart: function() {
            // $(this).css("color", "red")
            $(".more").toggle();
            $(".price,.type,.outer").hide();
            $(this).toggleClass('lic').siblings().removeClass("lic");
            $(".t1 img").eq(3).toggle().siblings().show();
            $(".t2 img").eq(3).toggle().siblings().hide();
        }
    })
    $('.clist li').on({
        touchstart: function() {
            $(this).css("color", "#ff9332").siblings().css("color", "")
        }
    })
    $('.iprice li').on({
        touchstart: function() {
            $(this).css("color", "#ff9332").siblings().css("color", "")
        }
    })
    $('.intype .all').on({
        touchstart: function() {
            $(this).siblings().find("input").prop("checked", false)
            $(this).siblings().find("span").css("color", '')
            $(this).toggleClass("ns");

        }
    })
    $(".intype li input").on({
        change: function() {
            // console.log($(this).prop('checked'));
            $(this).parent().siblings(".all").removeClass('ns');
            if ($(this).prop('checked')) {
                $(this).siblings('span').css("color", "#ff9332")
            } else {
                $(this).siblings('span').css("color", "")

            }
        }
    })
    $(".area button").on({
        touchstart: function() {
            $(this).css("color", "#ff9332").siblings().css("color", "")
        }
    })
})