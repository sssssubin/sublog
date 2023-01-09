<template>
<div class="contents-wrap" id="mainAnimation">
    <div class="ani line-box box1"></div>
    <div class="ani line-box box2"></div>
    <div class="ani line-box box3"></div>
    <div class="ani line-box box4"></div>
    <div class="ani line-box box5"></div>
    <div class="ani line-box box6"></div>
    <div class="ani line-box box7"></div>
    <div v-if="!isMobile" class="ani line-box box8"></div>

    <div class="ani draw item1"></div>
    <div class="ani draw item2"></div>
    <div class="ani draw item2-1"></div>
    <div class="ani draw item3"></div>
    <div class="ani draw item4"></div>
    <div class="ani draw item5"></div>
    <div class="ani draw item6"></div>
    <div class="ani draw item7"></div>
    <div class="ani draw item8"></div>
    <div class="inner-con">
        <!-- <h1 class="text first">교육의 새로운 패러다임을 열어갑니다.</h1> -->
        <h1 class="text first">이제 금성이 변화합니다</h1>
        <h2 class="text second">
			<template v-if="$parent.isMobile">
				<p class="first">에듀테크로<br/>준비하는 미래</p>
 	          	<p>휴먼터치로<br/>채워가는 교육</p>
			</template>
            <template v-else>
				<p class="first">에듀테크로 준비하는 미래</p>
 	          	<p>휴먼터치로 채워가는 교육</p>
			</template>
        </h2>
    </div>
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
#mainAnimation { 
  position: relative; 
  overflow: hidden; 
  height: 100vh; 
  padding-top: 80px; 
  z-index: 300;
	background: #F7F9FA; 
  &.contents-wrap { 
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex; justify-content: center; align-items: center;
    
    div.inner-con { display: inline-block;    
      @include desktop 	{ width: 1400px; }
      @include mobile 	{ width: 100%; }
    }
  }
	div.inner-con { z-index: 100;
		display: flex; justify-content: center; align-items: center; flex-direction: column;
		h1.text.first { @include font($type: test2); color: #aaa; margin-top: 50%; opacity: 0; transition: all ease 1s; }
		h2.text.second { @include font($type: test3); color: #212121;
			p { margin-top: 200px; transition: all ease-out 1.5s; opacity:0; }
			p.first { margin-top: -10px; }
		}
        h1.text.first.on { margin-top: 20%; opacity:1; }
		h1.text.first.off { margin-top: -10%; opacity:0; }
		h2.text.second.on { 
			p { margin-top: 0; opacity:1; }
		}
        h1 , h2 , p { text-align:center; }
	}
	div.ani 	{ position: absolute; }
	div.draw 	{ transition: all 1s ease; }
	div.item1 	{ width: 181px; height: 290px; background: #999;	 transition-delay: 0;	opacity:0;	bottom:0; left: 600px; }
	div.item2 	{ width: 600px; height: 290px; background: #d1d1d1; transition-delay: .2s;	opacity:0;	bottom:0; left: 0px; }
	div.item2-1 { width: 290px; height: 290px; background: #fff; 	 transition-delay: .3s;	opacity:0;	bottom:0; left: 0px;		border-radius: 0 145px 145px 0;  }
	div.item3 	{ width: 581px; height: 581px; background: #F7F9FA; transition-delay: .5s;	opacity:0;	top: -290px; right: -289px;	border-radius: 50%;  }
	div.item4 	{ width: 291px; height: 290px; background: #4b4b4b; transition-delay: .5s;	opacity:0;	bottom: 290px; left: 310px; border-radius: 0 0 146px 146px; }
	div.item5 	{ width: 144px; height: 290px; background: #a1a1a1; transition-delay: .5s;	opacity:0;	bottom: 290px; left: 154px; border-radius: 0 145px 145px 0;}
	div.item6 	{ width: 144px; height: 290px; background: #a1a1a1; transition-delay: .8s;	opacity:0;	bottom: 290px; left: 0px;	border-radius: 0 145px 145px 0;}
	div.item7 	{ width: 144px; height: 290px; background: #a1a1a1; transition-delay: .8s;	opacity:0;	bottom: 0px; right: 154px; border-radius: 145px 0 0 145px;}
	div.item8 	{ width: 144px; height: 290px; background: #a1a1a1; transition-delay: .8s;	opacity:0;	bottom: 0px; right: 0px;	border-radius: 145px 0 0 145px;}

	div.line-box { border: 1px solid #dedede; opacity:0; transition: all 1s ease;
		&.box1 { width: 100%; height: 0px; bottom: 290px; left:0; }
		&.box2 { width: 100%; height: 0px; bottom: 341px; left:0; }
		&.box3 { width: 0px;height: 100%;  top: 0; left:153px; }
		&.box4 { width: 0px;height: 100%;  top: 0; left:600px; }
		&.box5 { width: 0px;height: 100%;  top: 0; left:683px; }
		&.box6 { width: 0px;height: 100%;  top: 0; right:291px; }
		&.box7 { width: 0px;height: 100%;  top: -150px; right:453px; transform: rotate(45deg); border-bottom: none; }
		&.box8 { width: 100%;height: 0;  top: 0; right:0; }
	}
	&.on {
		div.item1 	{ bottom:0; left: 600px; }
		div.item2 	{ bottom:0; left: 0px; }
		div.item2-1 { bottom:0; left: 0px; }
		div.item3 	{ background: #f3f3f3; 	top: -290px; 	right: -289px;	}
		div.item4 	{ background: #2B66F6; 	bottom: 290px; 	left: 310px; 	}
		div.item5 	{ background: #01B5B1; 	bottom: 290px; 	left: 154px; 	}
		div.item6 	{ background: #01B5B1; 	bottom: 290px; 	left: 0px;		}
		div.item7 	{ background: #01B5B1; 	bottom: 0px; 	right: 154px; 	}
		div.item8 	{ background: #01B5B1; 	bottom: 0px; 	right: 0px;		}
	}
	&.line {
		div.line-box { border: 1px solid #dedede; opacity: 1;
			&.box1 { width: 100%; 	height: 290px; bottom: 290px; left:0; }
			&.box2 { width: 100%; 	height: 134px; bottom: 341px; left:0; }
			&.box3 { width: 157px;	height: 100%;  top: 0; left:153px; }
			&.box4 { width: 181px;	height: 100%;  top: 0; left:600px; }
			&.box5 { width: 555px;	height: 100%;  top: 0; left:683px; }
			&.box6 { width: 555px;	height: 100%;  top: 0; right:297px; }
			&.box7 { width: 220px;	height: 170%;  top: -35%; right:15%; transform: rotate(45deg); border-bottom: none; }
            &.box8 { width: 100%;height: 29%;  top: -50px; right:0; }
		}
	}
	&.draw {
		div.item1 	{ opacity: 1;	bottom:0; 		left: 600px; 	}
		div.item2 	{ opacity: 1;	bottom:0; 		left: 0px; 		}
		div.item2-1 { opacity: 1;	bottom:0; 		left: 0px; 		}
		div.item3 	{ opacity: 1;	top: -290px; 	right: -289px; 	}
		div.item4 	{ opacity: 1;	bottom: 290px; 	left: 310px; 	}
		div.item5 	{ opacity: 1;	bottom: 290px; 	left: 154px; 	}
		div.item6 	{ opacity: 1;	bottom: 290px; 	left: 0px;		}
		div.item7 	{ opacity: 1;	bottom: 0px; 	right: 154px; 	}
		div.item8 	{ opacity: 1;	bottom: 0px; 	right: 0px;		}
	}
	&.color {
		div.item1 	{ background: #FA6C03;	}
		div.item2 	{ background: #FFC854; }
		div.item2-1 { background: #F7F9FA;  	}
		div.item3 	{ background: #f3f3f3; }
		div.item4 	{ background: #366CF0; }
		div.item5 	{ background: #01B5B1; }
		div.item6 	{ background: #01B5B1; }
		div.item7 	{ background: #01B5B1; }
		div.item8 	{ background: #01B5B1; }
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
    div.item2-1 { width: 110px; height: 110px; background: #fff; 	 transition-delay: .3s;	opacity:0;	bottom:0; left: 0px;		border-radius: 0 55px 55px 0;  }
    div.item3 	{ width: 188px; height: 188px; background: #F7F9FA; transition-delay: .5s;	opacity:0;	top: -40px; right: -70%;	border-radius: 50%;  }
    div.item4 	{ width: 113px; height: 110px; background: #4b4b4b; transition-delay: .5s;	opacity:0;	bottom: 110px; left: 115px; border-radius: 0 0 55px 55px; }
    div.item5 	{ width: 54px; height: 110px; background: #a1a1a1; transition-delay: .5s;	opacity:0;	bottom: 110px; left: 57px; border-radius: 0 55px 55px 0;}
    div.item6 	{ width: 54px; height: 110px; background: #a1a1a1; transition-delay: .8s;	opacity:0;	bottom: 110px; left: 0px;	border-radius: 0 55px 55px 0;}
    div.item7 	{ width: 54px; height: 110px; background: #a1a1a1; transition-delay: .8s;	opacity:0;	bottom: calc(100% - 200px); right: 57px; 	border-radius: 55px 0 0 55px;}
    div.item8 	{ width: 54px; height: 110px; background: #a1a1a1; transition-delay: .8s;	opacity:0;	bottom: calc(100% - 200px); right: 0px;	border-radius: 55px 0 0 55px;}

    div.line-box { border: 1px solid #dedede; opacity:0; transition: all 1s ease;
      &.box1 { width: 100%; height: 0px; bottom: 290px; left:0; }
      &.box2 { width: 100%; height: 0px; bottom: 341px; left:0; }
      &.box3 { width: 0px;height: 100%;  top: 0; left:153px; }
      &.box4 { width: 0px;height: 100%;  top: 0; left:600px; }
      &.box5 { width: 0px;height: 100%;  top: 0; left:683px; }
      &.box6 { width: 0px;height: 100%;  top: 0; right:unset; left:0; }
      &.box7 { width: 0px;height: 100%;  top: -150px; right:453px; transform: rotate(45deg); border-bottom: none; }
    }
    &.on {
      div.item1 	{ bottom:0; left: 228px; }
      div.item2 	{ bottom:0; left: 0px; }
      div.item2-1 { bottom:0; left: 0px; }
      div.item3 	{ background: #f3f3f3; 	top: -40px; 	right: 70%; 	}
      div.item4 	{ background: #2B66F6; 	bottom: 110px; 	left: 115px;	}
      div.item5 	{ background: #01B5B1; 	bottom: 110px; 	left: 57px; 	}
      div.item6 	{ background: #01B5B1; 	bottom: 110px; 	left: 0px;		}
      div.item7 	{ background: #01B5B1; 	bottom: calc(100% - 200px); right: 57px; 	}
      div.item8 	{ background: #01B5B1; 	bottom: calc(100% - 200px); right: 0px;		}
    }
    &.line {
      div.line-box { border: 1px solid #dedede; opacity: 1;
        &.box1 { width: 100%; 	height: 110px; bottom: unset; top: 90px; left:0; }
        &.box2 { width: 100%; 	height: 220px; bottom: 0px; left:0; }
        &.box3 { width: 76px;	height: 100%;  top: 0; left:228px; }
        &.box4 { width: 181px;	height: 100%;  top: 0; left:600px; }
        &.box5 { width: calc(100% - 170px);	height: 100%;  top: 0; left: 114px; }
        &.box6 { width: 57px;	height: 100%;  top: 0; right:unset; left:0; }
        &.box7 { width: 100px;	height: 170%;  top: -78%; right:0; transform: rotate(45deg); border-bottom: none; opacity: 1; }
      }
    }
    &.draw {
      div.item1 	{ opacity: 1;	bottom:0; 		left: 228px; 	}
      div.item2 	{ opacity: 1;	bottom:0; 		left: 0px; 		}
      div.item2-1 { opacity: 1;	bottom:0; 		left: 0px; 		}
      div.item3 	{ opacity: 1;	top: -40px; 	right: 70%; 	}
      div.item4 	{ opacity: 1;	bottom: 110px; 	left: 115px; 	}
      div.item5 	{ opacity: 1;	bottom: 110px; 	left: 57px; 	}
      div.item6 	{ opacity: 1;	bottom: 110px; 	left: 0px;		}
      div.item7 	{ opacity: 1;	bottom: calc(100% - 200px); 	right: 57px; 	}
      div.item8 	{ opacity: 1;	bottom: calc(100% - 200px); 	right: 0px;		}
    }
    &.color {
      div.item1 	{ background: #FA6C03;	}
      div.item2 	{ background: #FFC854; }
      div.item2-1 { background: #F7F9FA;  	}
      div.item3 	{ background: #f3f3f3; }
      div.item4 	{ background: #366CF0; }
      div.item5 	{ background: #01B5B1; }
      div.item6 	{ background: #01B5B1; }
      div.item7 	{ background: #01B5B1; }
      div.item8 	{ background: #01B5B1; }
    }
  }
}
</style>