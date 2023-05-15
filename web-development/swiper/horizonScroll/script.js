// 전체 스크립트 엄격 모드 구문
"use strict";

var $scrItem = $(".horizonScroll__item");

// var scrIWidth = 0;
// for (var i=0; i<$scrItem.length; i++) {
//     scrIWidth += $scrItem.eq(i).outerWidth();
// }
$(".swiper-pagination").css("width", "max-content");

$scrItem.click(function () {
  var target = $(this);
  // $scrItem.removeClass("on");
  // target.addClass("on");
  muCenter(target);
});
function muCenter(target) {
  var box = $(".horizonScroll");
  var boxItem = box.find(".horizonScroll__item");
  var boxHarf = box.width() / 2;
  var pos;
  var listWidth = 0;
  var targetLeft = 0;

  boxItem.each(function () {
    listWidth += $(this).outerWidth();
  });

  for (var i = 0; i < target.index(); i++)
    targetLeft += boxItem.eq(i).outerWidth(); // 선택요소 까지 길이

  var selectTargetPos = targetLeft + target.outerWidth() / 2;
  if (selectTargetPos <= boxHarf) {
    // left
    pos = 0;
  } else if (listWidth - selectTargetPos <= boxHarf) {
    //right : target 절반 이후 영역이 boxHarf 보다 작을경우 right 정렬
    pos = listWidth - box.width();
  } else {
    pos = selectTargetPos - boxHarf; // 중앙정렬
  }

  setTimeout(function () {
    box.animate({ scrollLeft: pos }, 300);
  }, 200);
}
