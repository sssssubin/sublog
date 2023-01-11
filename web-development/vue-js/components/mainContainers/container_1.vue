<template>
<div class="contents-wrap" id="mainAnimation">    
    <div class="ani line box1"></div>
    <div class="ani line box2"></div>
    <div class="ani line box3"></div>
    <div class="ani line box4"></div>
    <div class="ani line box5"></div>
    <div class="ani line box6"></div>
    <div class="ani line box7"></div>
    <div class="ani line box8" v-if="!isMobile"></div>
    <!-- //라인 -->

    <div class="ani draw item1"></div>
    <div class="ani draw item2"></div>
    <div class="ani draw item3"></div>
    <div class="ani draw item4"></div>
    <div class="ani draw item5"></div>
    <div class="ani draw item6"></div>
    <div class="ani draw item7"></div>
    <div class="ani draw item8"></div>
    <div class="ani draw item9"></div>
    <!-- //모양 -->

    <div class="inner-con">
        <h1 class="text first">이제 금성이 변화합니다</h1>
        <h2 class="text second">
          <div v-if="$parent.isMobile">
            <p class="first">에듀테크로<br/>준비하는 미래</p>
            <p>휴먼터치로<br/>채워가는 교육</p>
          </div>
          <div v-else>
            <p class="first">에듀테크로 준비하는 미래</p>
            <p>휴먼터치로 채워가는 교육</p>
          </div>
        </h2>
    </div>
    <!-- //텍스트 -->
</div>  
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name : 'MainVisualAnimation',
  computed : {
    ...mapGetters('ui' , {
      isMobile : 'getIsMobile'
    })
  },
  methods: {
    mainAnimation () {
      const firstText = document.querySelector('h1.text.first')
      const secondText = document.querySelector('h2.text.second')
      const mainContainer = document.querySelector('#mainAnimation')
      this.animationFN( firstText , 'add' , 'on' 	, 100 )
      this.animationFN( mainContainer , 'add' , 'line' , 1000 )
      this.animationFN( firstText , 'add' , 'off' 	, 2000 )
      this.animationFN( mainContainer , 'add' , 'draw' , 3000 )
      this.animationFN( secondText , 'add' , 'on' , 3500 )
      this.animationFN( mainContainer , 'add' , 'color' , 5000 )
    },
    animationFN ( target , type , classNm , interval ) {
      setTimeout( () => {
        if( type === 'add' ) 	target.classList.add( classNm )
        if( type === 'remove' ) target.classList.remove( classNm )
      } , interval )
    }
  },
  mounted () {
    this.mainAnimation()
  }
}
</script>

<style lang="scss">
#mainAnimation.contents-wrap { 
  position: relative; width: 100%; height: 100vh; overflow: hidden; display: flex; justify-content: center; align-items: center; z-index: 300; background: #F7F9FA; box-sizing: content-box;
  .ani { position: absolute; transition: all 1s ease; }
  .line { opacity: 0; border: 1px solid #dedede;
		&.box1 { width: 100%; height: 0px; bottom: 290px; left:0; border-width: 2px; border-right: 0; border-left: 0; }
		&.box2 { width: 100%; height: 0px; bottom: 341px; left:0; border-right: 0; border-left: 0; }
		&.box3 { width: 0px; height: 100%; top: 0; left: 154px; border-bottom: 0; border-top: 0; }
		&.box4 { width: 0px; height: 100%; top: 0; left: 599px; border-width: 2px; border-bottom: 0; border-top: 0; }
		&.box5 { width: 0px; height: 100%; top: 0; left: 683px; border-bottom: 0; border-top: 0; }
		&.box6 { width: 0px; height: 100%; top: 0; right: 0; border-bottom: 0; border-top: 0; }
		&.box7 { width: 0px; height: 0; top: auto; right: -764.55px; bottom: -100%; transform:rotate(-135deg); }
    &.box8 { width: 0px; height: 0; top: auto; right: -1195.55px; bottom: -100%; transform:rotate(-135deg); }
	}  
  &.line {
		.line { opacity: 1;
			&.box1 { height: 290px; }
			&.box2 { height: 134px; }
			&.box3 { width: 154px; }
			&.box4 { width: 181px; }
			&.box5 { width: 555px; }
			&.box6 { width: 298px; }
			&.box7 { width: 1576.85px; height: 1576.85px; }
      &.box8 { width: 1576.85px; height: 1576.85px; }
		}
	}

  .draw { opacity :0;
    &.item1 { background: #999999; width: 181px; height: 290px; transition-delay: .0s; bottom: 0; left: 0; }
    &.item2 { background: #d1d1d1; width: 600px; height: 290px; transition-delay: .2s; bottom:0; left: -600px; }
    &.item3 { background: #ffffff; width: 290px; height: 290px; transition-delay: .3s; bottom:0; left: -290px; border-radius: 0 145px 145px 0; }
    &.item4 { background: #F7F9FA; width: 581px; height: 581px; transition-delay: .5s; top: -290px; right: -283px; border-radius: 50%; }
    &.item5 { background: #4b4b4b; width: 291px; height: 290px; transition-delay: .5s; bottom: 290px; left: 308px; border-radius: 0 0 146px 146px; }
    &.item6 { background: #a1a1a1; width: 144px; height: 290px; transition-delay: .5s; bottom: 290px; left: 154px; border-radius: 0 145px 145px 0; }
    &.item7 { background: #a1a1a1; width: 144px; height: 290px; transition-delay: .8s; bottom: 290px; left: 0px; border-radius: 0 145px 145px 0; }
    &.item8 { background: #a1a1a1; width: 144px; height: 290px; transition-delay: .8s; bottom: 0px; right: 154px; border-radius: 145px 0 0 145px; }
    &.item9 { background: #a1a1a1; width: 144px; height: 290px; transition-delay: .8s; bottom: 0px; right: 0px;	border-radius: 145px 0 0 145px; }
  }  	
	&.draw {
    .draw { opacity: 1;
      &.item1 { left: 600px; }
      &.item2,
      &.item3 { left: 0; }
    }
	}
	&.color {
    .draw {
      &.item1 { background: #FA6C03; }
      &.item2 { background: #FFC854; }
      &.item3 { background: #F7F9FA; }
      &.item4 { background: #f3f3f3; }
      &.item5 { background: #366CF0; }
      &.item6 { background: #01B5B1; }
      &.item7 { background: #01B5B1; }
      &.item8 { background: #01B5B1; }
      &.item9 { background: #01B5B1; }
    }					
	}

	div.inner-con { width: 100%; height: -webkit-fill-available; display: flex; align-items: center; flex-direction: column; z-index: 1; margin-top: 283px;
		.text { 
      &.first { @include font($type: test2); color: #aaa; margin-top: 50%; opacity: 0; transition: all ease 1s; 
        &.on { margin-top: 120px; margin-bottom: 60px; opacity:1; }
        &.off { margin-top: 0; opacity:0; }
      }
      &.second { font-size: 58px; line-height: 145%; letter-spacing: -0.03em; color: #212121; opacity: 0;         
        > div { height: 168px; max-height: 168px; display: flex; align-items: center; justify-content: center; flex-direction: column; }
        &.on { margin-bottom: 187px; opacity: 1;
          p { margin-top: 0; }
        }
        p { margin-top: 200px; transition: all ease-out 1.5s;
          &.first { margin-top: -10px; }
        }
      }
    }
	}
}

@include mobile {
  #mainAnimation {
    background: #F7F9FA;
    div.inner-con { z-index: 100; margin-top: unset;
      h1.text.first { @include font($type: test); }
      h2.text.second { @include font($type: test);
        p { text-align: left !important; padding-left: 30px; margin: unset; }
        p.first { margin-top: unset; }
      }
          h1.text.first.on { margin-top: unset; }
      h1.text.first.off {opacity: 0; margin-top: -35%; }
      // h2.text.second.on { 
      // 	p { }
      // }
          // h1 , h2 , p { }
    }
    div.ani 	{ position: absolute; }
    div.draw 	{ transition: all 1s ease; }
    div.item1 	{ width: 76px; height: 110px; background: #999;	 transition-delay: 0;	opacity:0;	bottom:0; left: 600px; }
    div.item2 	{ width: 228px; height: 110px; background: #d1d1d1; transition-delay: .2s;	opacity:0;	bottom:0; left: 0px; }
    div.item3 { width: 110px; height: 110px; background: #fff; 	 transition-delay: .3s;	opacity:0;	bottom:0; left: 0px;		border-radius: 0 55px 55px 0;  }
    div.item4 	{ width: 188px; height: 188px; background: #F7F9FA; transition-delay: .5s;	opacity:0;	top: -40px; right: -70%;	border-radius: 50%;  }
    div.item5 	{ width: 113px; height: 110px; background: #4b4b4b; transition-delay: .5s;	opacity:0;	bottom: 110px; left: 308px; border-radius: 0 0 55px 55px; }
    div.item6 	{ width: 54px; height: 110px; background: #a1a1a1; transition-delay: .5s;	opacity:0;	bottom: 110px; left: 57px; border-radius: 0 55px 55px 0;}
    div.item7 	{ width: 54px; height: 110px; background: #a1a1a1; transition-delay: .8s;	opacity:0;	bottom: 110px; left: 0px;	border-radius: 0 55px 55px 0;}
    div.item8 	{ width: 54px; height: 110px; background: #a1a1a1; transition-delay: .8s;	opacity:0;	bottom: calc(100% - 200px); right: 57px; 	border-radius: 55px 0 0 55px;}
    div.item9 	{ width: 54px; height: 110px; background: #a1a1a1; transition-delay: .8s;	opacity:0;	bottom: calc(100% - 200px); right: 0px;	border-radius: 55px 0 0 55px;}

    div.line { border: 1px solid #dedede; opacity:0; transition: all 1s ease;
      &.box1 { width: 100%; height: 0px; bottom: 290px; left:0; }
      &.box2 { width: 100%; height: 0px; bottom: 341px; left:0; }
      &.box3 { width: 0px;height: 100%;  top: 0; left:153px; }
      &.box4 { width: 0px;height: 100%;  top: 0; left:599px; }
      &.box5 { width: 0px;height: 100%;  top: 0; left:683px; }
      &.box6 { width: 0px;height: 100%;  top: 0; right:unset; left:0; }
      &.box7 { width: 0px;height: 100%;  top: -150px; right:453px; transform: rotate(45deg); border-bottom: none; }
    }
    &.on {
      div.item1 	{ bottom:0; left: 228px; }
      div.item2 	{ bottom:0; left: 0px; }
      div.item3 { bottom:0; left: 0px; }
      div.item4 	{ background: #f3f3f3; 	top: -40px; 	right: 70%; 	}
      div.item5 	{ background: #2B66F6; 	bottom: 110px; 	left: 308px;	}
      div.item6 	{ background: #01B5B1; 	bottom: 110px; 	left: 57px; 	}
      div.item7 	{ background: #01B5B1; 	bottom: 110px; 	left: 0px;		}
      div.item8 	{ background: #01B5B1; 	bottom: calc(100% - 200px); right: 57px; 	}
      div.item9 	{ background: #01B5B1; 	bottom: calc(100% - 200px); right: 0px;		}
    }
    &.line {
      div.line { border: 1px solid #dedede; opacity: 1;
        &.box1 { width: 100%; 	height: 110px; bottom: unset; top: 90px; left:0; }
        &.box2 { width: 100%; 	height: 220px; bottom: 0px; left:0; }
        &.box3 { width: 76px;	height: 100%;  top: 0; left:228px; }
        &.box4 { width: 181px;	height: 100%;  top: 0; left:599px; }
        &.box5 { width: calc(100% - 170px);	height: 100%;  top: 0; left: 114px; }
        &.box6 { width: 57px;	height: 100%;  top: 0; right:unset; left:0; }
        &.box7 { width: 100px;	height: 170%;  top: -78%; right:0; transform: rotate(45deg); border-bottom: none; opacity: 1; }
      }
    }
    &.draw {
      div.item1 	{ opacity: 1;	bottom:0; 		left: 228px; 	}
      div.item2 	{ opacity: 1;	bottom:0; 		left: 0px; 		}
      div.item3 { opacity: 1;	bottom:0; 		left: 0px; 		}
      div.item4 	{ opacity: 1;	top: -40px; 	right: 70%; 	}
      div.item5 	{ opacity: 1;	bottom: 110px; 	left: 308px; 	}
      div.item6 	{ opacity: 1;	bottom: 110px; 	left: 57px; 	}
      div.item7 	{ opacity: 1;	bottom: 110px; 	left: 0px;		}
      div.item8 	{ opacity: 1;	bottom: calc(100% - 200px); 	right: 57px; 	}
      div.item9 	{ opacity: 1;	bottom: calc(100% - 200px); 	right: 0px;		}
    }
    &.color {
      div.item1 	{ background: #FA6C03;	}
      div.item2 	{ background: #FFC854; }
      div.item3 { background: #F7F9FA;  	}
      div.item4 	{ background: #f3f3f3; }
      div.item5 	{ background: #366CF0; }
      div.item6 	{ background: #01B5B1; }
      div.item7 	{ background: #01B5B1; }
      div.item8 	{ background: #01B5B1; }
      div.item9 	{ background: #01B5B1; }
    }
  }
}
</style>