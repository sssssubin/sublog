## @nuxtjs/style-resources
<b>< Nuxt에서 별도의 import 없이 전역 스타일링 로직(변수, 믹스인) 사용하기 ></b>

Vue의 단일 파일 컴포넌트 환경에서는 sass-loader를 통해 <style> 영역에 확장 CSS 문법을 사용할 수 있으므로, SCSS 등에서 지원하는 변수, 믹스인, 함수 등의 문법을 그대로 이용할 수 있습니다.

동일한 로직이 많아지게 되면 자연스럽게 프로젝트 내의 모든 변수/믹스인을 정의한 파일을 별도로 구성하게 됩니다. 이 경우에는 <style> 영역에 해당 파일을 import하여 동일하게 사용할 수 있습니다. 

하지만 이 역시도 컴포넌트 개수가 많아진다면, 변수나 믹스인을 사용하기 위해 각 컴포넌트에 import를 해야 하는 번거로운 과정을 거쳐야합니다.

따라서 이러한 문제를 해결하기 위해 @nuxtjs/style-resources 라는 모듈이 존재합니다. 해당 모듈을 설치하고, 자동으로 import하고 싶은 스타일링 로직 파일을 지정해두면, 앱을 빌드할 때 각각의 컴포넌트의 <style> 영역에 해당 스타일 파일들을 자동으로 import합니다.
<br>
<br>
  
---
### 설치
nuxt.config.js 파일의 buildModules 값에 @nuxtjs/style-resources를 추가하고, styleResources 값에 자동으로 import하고자 하는 파일을 설정합니다.

``` bash
{
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
   scss: [
     '@/assets/styles/_mixin.scss',
     '@/assets/styles/_colors.scss',
   ],
  }
}
```
<br>
<br>

### 사용
컴포넌트의 <style> 영역에서 @import 문을 사용하지 않고 외부에 있는 요소를 사용할 수 있습니다.
<br>
<br>
  
### 작동 방식과 주의사항
@nuxtjs/style-resources의 역할은, 빌드 과정에서 css를 번들링하기 이전에 nuxt.config.js의 styleResources에 추가했던 파일들을 각각의 .vue 파일의 <style> 영역에 자동으로 import하는 것입니다. 이렇게 자동으로 import를 한 이후에는 일반적인 빌드와 동일한 과정을 거칩니다.

주의할 점은 모든 컴포넌트의 <style> 영역에 동일한 css를 모두 import하므로, 만약 styleResources에 변수/믹스인/함수가 아닌 일반적인 스타일 규칙이 있을 경우 번들 사이즈와 HMR 성능에 문제를 일으킬 수 있습니다.

@nuxtjs/style-resources의 레포지토리에도 모듈로 사용할 css 파일에 "actual style"을 절대 사용하지 말라는 주의사항이 언급되어 있습니다.
<br>
<br>

### nuxt.config.js의 css 속성과의 차이점
먼저, nuxt.config.js의 css 속성에 추가한 파일은 글로벌 영역에 추가되기는 하지만, 각각의 vue 컴포넌트에서 별도로 import를 하지 않는 이상 css 속성에 추가한 파일의 변수, 믹스인, 함수 등에 접근할 수 없습니다.

css 속성에 추가한 파일(css, scss, sass, less, ...)과 각 .vue 컴포넌트의 <style>은 서로 독립적으로 컴파일 되기 때문입니다.


예를 들어, app.vue는 _mixin.scss와 독립적으로 css로 컴파일 될 것이므로, _mixin.scss를 컴포넌트 내에 직접 import하지 않는 이상 app.vue는 css로 컴파일이 완료된 버전의 _mixin.scss만 참조할 수 있을 것입니다. 따라서 _mixin.scss에 일반적인 스타일 규칙이 있다면 해당 페이지에 포함된 모든 컴포넌트가 영향을 받겠지만, 스타일 규칙이 아닌 변수/믹스인/함수의 정의는 css로 컴파일 되는 과정에서 사라질 것이므로 개별 컴포넌트에서 사용할 수 없습니다.


  
참고: https://junglast.com/blog/nuxt-style-resources
