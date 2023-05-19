"use strict";

//팝업 오늘은 그만보기 check
function fnc_PopupClose(valDiv, idLayer, idChk) {
	try {
		if (valDiv == "D") {
			if ($("#" + idChk).is(":checked") == true) {
				setCookie("coo_" + idLayer, "Y", 1);
			}
		}
		$("#" + idLayer).css("display", "none");
	} catch (e) {
	}
}
//팝업 다시는 보지 않기 check
function fnc_PopupNeverClose(valDiv, idLayer, idChk) {
	try {
		if (valDiv == "D") {
			if ($("#" + idChk).is(":checked") == true) {
				setCookie("coo_" + idLayer, "Y", 365);
			}
		}
		$("#" + idLayer).css("display", "none");
	} catch (e) {
	}
}
//팝업 보이기
function openPopupDiv() {
	var popupCnt=$("div[name=popUpDiv]").length;
	if($(window).width()>=1200){
		for(var i=0;i<popupCnt;i++){
			var id=$("div[name=popUpDiv]:eq("+i+")").attr("id");
			$("#divLayerPop"+i).draggable({
				cursor : "move",
				revert : false
			}).css("display", "none");

			if (getCookie(id) == "Y") {
				$("#"+id).css("display", "none");
			}else{
				$("#"+id).css("display", "block");
			}
		}
	}else{
		$("div[name=popUpDiv]").css("display","none");
	}
}
//강사 목록
function mainTeacherListGet(subjCd) {
	url="/mainTeacher.ks";
	param="subjCd="+subjCd;
	ajaxAction(url, param, function(data){
		var result = this.result;
		var data='';
		
		var subjTeacherList=this.subjTeacherList;
		var teacherSubjList=this.teacherSubjList;
		if(subjTeacherList){
			for(var i=0;i<subjTeacherList.length;i++){
				data+='<li><a href="/productGuide/teacher/subjTeacherList.ks?subjCd='+subjCd+'#'+subjTeacherList[i].LECTURERNO+'">'
					+'<dl class="img_wrap">'
					+'<dt><img src=\"'+subjTeacherList[i].FILEURL+'\" alt=""></dt>'
					+'<dd><img src="/assets/img/main/main03_teaMask.png" alt=""></dd>'
					+'</dl>'
					+'<div class="txt">'
					+'<p>'+subjTeacherList[i].LECTURERNAME+'<span>선생님</span></p>'
					+'<span>'+subjTeacherList[i].TEACHERTITLE+'</span>'
					+'</div></a></li>'
			}
			$("#mainTeacherList").empty();
			$("#mainTeacherList").append(data);
		}
		if(teacherSubjList){
			for(var i=0;i<teacherSubjList.length;i++){
				for(var j=0;j<teacherSubjList[i].teacherList.length;j++){
					data+='<li><a href="/productGuide/teacher/subjTeacherList.ks?subjCd='+subjCd+'#'+teacherSubjList[i].teacherList[j].lecturerNo+'">'
					+'<dl class="img_wrap">'
					+'<dt><img src=\"'+teacherSubjList[i].teacherList[j].fileUrl+'\" alt=""></dt>'
					+'<dd><img src="/assets/img/main/main03_teaMask.png" alt=""></dd>'
					+'</dl>'
					+'<div class="txt">'
					+'<p>'+teacherSubjList[i].teacherList[j].lecturerName+'<span>선생님</span></p>'
					+'<span>'+teacherSubjList[i].teacherList[j].teacherTitle+'</span>'
					+'</div></a></li>'
				}
			}
			$("#mainTeacherList").empty();
			$("#mainTeacherList").append(data);
		}
	});
}
//구성 강좌 팝업
function mainCorsVodPopup(vodUrl, vodCotnIn){
	$("#vodUrl").val(vodUrl);
	$("#vodCotnIn").val(vodCotnIn);
	var filter = "win16|win32|win64|mac";
	if(navigator.platform){
		if(0 > filter.indexOf(navigator.platform.toLowerCase())){
			playMainMobile();
		}else{
			playVodSubjMain();
		}
	}		
}
//자동 스크롤 설정
function mainVodPlay() {	
	$('video[id="intro"]').css("display", "block");
	$('video[id="intro"]').get(0).play();
	
	MAIN_SWIPER.autoplay.stop();
	$('img[id="playImg"]').css("display","none");
	$('img[class="mo_img intro_thumb"]').css("display","none");
	$('img[class="pc_img intro_thumb"]').css("display","none");
}
//지정한 이벤트(DOMContentLoaded)를 수신할 객체
function mainListener() {  
	if($(window).width()>=1200){
		$("div[name=popUpDiv]").css("display","");
	}else{
		$("div[name=popUpDiv]").css("display","none");
	}

	//팝업 x 버튼
	$('div[id="close"]').click(function(){
		$(this).closest("div.ui-draggable.ui-draggable-handle").css('display', 'none');
	});

	var mobilecheck = function () {
    var check = false;
    (function(a,b){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
    return check;
	}
	var isMobile = mobilecheck(); 
	if(isMobile){		
		$("#slide2").css("pointer-events","none");
	}else{
		$("#slide2").css("pointer-events","all");
		
		$("#slide2").on("click", function(){
			$('#goNotice').find("#bbsDataNo").val("3001191135");
			$('#goNotice').attr("action", contextPath + '/customerService/customer/eduNewsDetail.ks');
			$('#goNotice').submit();
		});
	}

	openPopupDiv();

  /* ------------------- 
        new2023 
  -------------------*/
  const MAIN_SWIPER = new Swiper(".main-swiper-intro", {
    slidesPerView: 1, // Mobile 해상도 : ~ 1200px
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    loop: true,
    allowTouchMove : true, // false시에 스와이핑이 되지 않으며 버튼으로만 슬라이드 조작이 가능
    watchOverflow : true, // 슬라이드가 1개 일 때 pager, button 숨김 여부 설정
    pagination: {
      el: ".swiper-pagination.main-con",
      type: 'bullets',
      clickable: true,
      renderBullet: function (index, className) {
        const BULLETS = document.querySelectorAll(".main-swiper-intro .swiper-slide[data-slide-title]");
        let BULLET_TITLE = BULLETS[index + 1].dataset.slideTitle;
        return `<span class="${className}">${BULLET_TITLE}</span>`;
      }
    }, 
    breakpoints: {
      1200: {}  // PC 해상도 : 1200px ~
    },
    on: {
      init: function(MAIN_SWIPER) {
        var mainIdx2 = $("#mainIdx2").val();
        var mainIdx3 = $("#mainIdx3").val();
  
        if(MAIN_SWIPER.currentBreakpoint !== 'max') { // PC
          // 카운팅
          $({ val : 0 }).animate({ val : mainIdx3 }, {
            duration: 1500,
            step: function() {
              var num = numberWithCommas(Math.floor(this.val));
              $(".count_num").text(num);
            },
            complete: function() {
              var num = numberWithCommas(Math.floor(this.val));
              $(".count_num").text(num);
            }
          });
      
          $({ val : 0 }).animate({ val : mainIdx2 }, {
            duration: 1000,
            step: function() {
              var num = numberWithCommas(this.val.toFixed(1));
              $(".count_num2").text(num);
            },
            complete: function() {
              var num = numberWithCommas(this.val.toFixed(1));
              $(".count_num2").text(num);
            }
          }); 
        } 
  
        function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },
      slideChange: function(MAIN_SWIPER) {
        var mainIdx2 = $("#mainIdx2").val();
        var mainIdx3 = $("#mainIdx3").val();
  
        if(MAIN_SWIPER.currentBreakpoint === 'max') { // Mobile
           // 카운팅
          if ( this.realIndex == 2 ) {
            $({ val : 0 }).animate({ val : mainIdx3 }, {
              duration: 1500,
              step: function() {
                var num = numberWithCommas(Math.floor(this.val));
                $(".count_num").text(num);
              },
              complete: function() {
                var num = numberWithCommas(Math.floor(this.val));
                $(".count_num").text(num);
              }
            });
          } else if( this.realIndex == 1) {
            $({ val : 0 }).animate({ val : mainIdx2 }, {
              duration: 1000,
              step: function() {
                var num = numberWithCommas(this.val.toFixed(1));
                $(".count_num2").text(num);
              },
              complete: function() {
                var num = numberWithCommas(this.val.toFixed(1));
                $(".count_num2").text(num);
              }
            });
          }
        }
  
        function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      },    
      resize: function(MAIN_SWIPER) {
        var mainIdx2 = $("#mainIdx2").val();
        var mainIdx3 = $("#mainIdx3").val();      
  
        if(MAIN_SWIPER.currentBreakpoint !== 'max') { // PC   
          // 카운팅
          $({ val : 0 }).animate({ val : mainIdx3 }, {
           duration: 1500,
           step: function() {
             var num = numberWithCommas(Math.floor(this.val));
             $(".count_num").text(num);
           },
           complete: function() {
             var num = numberWithCommas(Math.floor(this.val));
             $(".count_num").text(num);
           }
         });
     
         $({ val : 0 }).animate({ val : mainIdx2 }, {
           duration: 1000,
           step: function() {
             var num = numberWithCommas(this.val.toFixed(1));
             $(".count_num2").text(num);
           },
           complete: function() {
             var num = numberWithCommas(this.val.toFixed(1));
             $(".count_num2").text(num);
           }
         });  
        } else { // Mobile
          MAIN_SWIPER.slideTo(1, 100) 
        }
  
        function numberWithCommas(x) {
          return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
      }
    }
  });
  
  const CON1_SWIPER = new Swiper(".con1-swiper", {
    slidesPerView: 1, 
    spaceBetween: 39,
    loop: false,  
    allowTouchMove : true,
    watchOverflow : true, 
    pagination: {
        el: '.swiper-pagination.con1',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next.con1',
        prevEl: '.swiper-button-prev.con1',
    },
    breakpoints: {
        1200: { 
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
  })
  
  const CON2_SWIPER = new Swiper(".con2-swiper", {
    slidesPerView: 1, 
    spaceBetween: 39,
    loop: false,  
    allowTouchMove : true,
    watchOverflow : true, 
    pagination: {
        el: '.swiper-pagination.con2',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next.con2',
        prevEl: '.swiper-button-prev.con2',
    },
    breakpoints: {
        1200: { 
            slidesPerView: 3,
            spaceBetween: 30, 
        }
    },
  })
  
  const CON3_SWIPER = new Swiper(".con3-swiper", {
    slidesPerView: 1, 
    spaceBetween: 39,
    loop: false,
    allowTouchMove : true,
    watchOverflow : true, 
    pagination: {
        el: '.swiper-pagination.con3',
        type: 'bullets',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next.con3',
        prevEl: '.swiper-button-prev.con3',
        enabled: true,
    },
    breakpoints: {
        1200: { 
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
            enabled: false,
          },
        }
    },
  })
  
  const TEACHER_SWIPER = new Swiper(".teacher-swiper", {
    slidesPerView: 1, 
    spaceBetween: 0,
    allowTouchMove : true,
    watchOverflow : true, 
    navigation: {
      nextEl: ".swiper-button-next.con4",
      prevEl: ".swiper-button-prev.con4",
    },
    pagination: {
      el: ".swiper-pagination.con4",
      clickable: true,
      renderBullet: function (index, className) {
        const BULLETS = document.querySelectorAll(".con4 .teacher-swiper .swiper-slide[data-slide-title]");
        let BULLET_TITLE = BULLETS[index].dataset.slideTitle;
        return `<a href="#" class="${className} horizonScroll__item"><span class="horizonScroll__itemText">${BULLET_TITLE}</span></a>`;
      }
    },
    breakpoints: {
      1200: {} 
    },
    on: {
      init: function(TEACHER_SWIPER) {
        const BOX_ITEM = document.querySelector(".horizonScroll .swiper-pagination");
        BOX_ITEM.style.width = 'max-content';
        
        if(TEACHER_SWIPER.currentBreakpoint === 'max') { // Mobile
          BOX_ITEM.style.gap = '5px';
        } else { // PC        
          BOX_ITEM.style.gap = '15px';
        }
      },
      realIndexChange: function(TEACHER_SWIPER) {              
        const BOX = document.querySelector('.horizonScroll');
        const BOX_ITEM = document.querySelector(".horizonScroll .swiper-pagination");
        const BOX_ITEM_LIST = document.querySelectorAll('.horizonScroll .swiper-pagination .swiper-pagination-bullet');
        const BOX_WIDTH = BOX.clientWidth;
        const BOX_WIDTH_HARF = BOX_WIDTH / 2; 
        const BOX_ITEM_WIDTH = BOX_ITEM.clientWidth;        
        let target = BOX_ITEM_LIST[this.realIndex];
        let targetLeft = target.offsetLeft;
        let targetWidth = target.clientWidth;
        let selectTargetPos = targetLeft + targetWidth / 2;
        let pos;
        
        if (selectTargetPos <= BOX_WIDTH_HARF) {
          // left
          pos = 0;
        } else if (BOX_ITEM_WIDTH - selectTargetPos <= BOX_WIDTH_HARF) {
          //right : target 절반 이후 영역이 BOX_WIDTH_HARF 보다 작을경우 right 정렬
          pos = BOX_ITEM_WIDTH - BOX_WIDTH;
        } else {
          pos = selectTargetPos - BOX_WIDTH_HARF; // 중앙정렬
        } 
        
        setTimeout(function () {
          BOX.scroll({
            left: pos,
            top: 0,
            behavior: 'smooth'
          })
        }, 200);
      },
      resize: function(TEACHER_SWIPER) { 
        const BOX_ITEM = document.querySelector(".horizonScroll .swiper-pagination");
        
        TEACHER_SWIPER.slideTo(0, 100);       
        if(TEACHER_SWIPER.currentBreakpoint === 'max') { // Mobile
          BOX_ITEM.style.gap = '5px';
        } else {        
          BOX_ITEM.style.gap = '15px';
        }
      }
    }
  });
  
  // Autoplay start when scroll to element
  const CON1 = document.querySelector('.con1');
  const CON2 = document.querySelector('.con2');
  const CON3 = document.querySelector('.con3');
  const ELERECT1 = CON1.getBoundingClientRect();
  const ELERECT2 = CON2.getBoundingClientRect();
  const ELERECT3 = CON3.getBoundingClientRect();
  
  function swiperAutoPlay() {
    let windowY = window.scrollY;
    
    // Scroll to element
    if(windowY > ELERECT1.y) {
      CON1_SWIPER.autoplay.start()
    } else {
      CON1_SWIPER.autoplay.stop()
    }
  
    if(windowY > ELERECT2.y) {
      CON2_SWIPER.autoplay.start()
    } else {
      CON2_SWIPER.autoplay.stop()
    }
    
    if(windowY > ELERECT3.y) {
      CON3_SWIPER.autoplay.start()
    } else {
      CON3_SWIPER.autoplay.stop()
    }
  }
  window.addEventListener("scroll", swiperAutoPlay);
  
  // 하단 고정 배너 show & hide
  const FIX_BANNER = document.querySelector('#divLayerPop.pc');
  const FIX_BANNER_CLOSE = document.getElementById("id_InputChkDay_Popup");
  const FOOTER_GAP = document.querySelector('.foot_wrap');
  
  FIX_BANNER.classList.add('show');
  FOOTER_GAP.style.padding = "1.88rem 0 160px"
  
  FIX_BANNER_CLOSE.addEventListener("click", function() {
    FIX_BANNER.classList.remove("show");
    FOOTER_GAP.style.padding = "1.88rem 0"
  });
  
  function footerGapToggle() {
    if (window.innerWidth < 1200) { // Mobile ver
      FIX_BANNER.classList.remove("show");
      FOOTER_GAP.style.padding = "1.88rem 0 calc(1.88rem + 54px)"
    } else {    
      if(FIX_BANNER.style.display != "none") {
        FIX_BANNER.classList.add('show');
        FOOTER_GAP.style.padding = "1.88rem 0 160px"
      } else if(FIX_BANNER.style.display == "none") {
        FOOTER_GAP.style.padding = "1.88rem 0"
      }
    }
  }
  
  let timer = null;
  function reportWindowSize() {
    if (timer) {
      clearTimeout(timer); // 3초 이전에 이벤트가 발생하면 이전 타이머는 취소하고 새로운 타이머를 다시 설정
    }
    
    timer = setTimeout(footerGapToggle, 300); // 타이머가 만료된 뒤 실행
  }
  
  window.addEventListener('load', footerGapToggle, {capture: false, once: true, passive: false});
  window.addEventListener("resize", reportWindowSize, false);  
}
//DOM이 완전히 로드되었을 때의 핸들러
document.addEventListener("DOMContentLoaded", mainListener, false)
