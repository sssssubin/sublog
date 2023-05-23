# sublog

frontend study

## nuxt 설치

```bash
# vue-cli 설치
$ npm install -g @vue/cli @vue/cli-init

# starter-template 다운로드/ 설치
$ vue init nuxt-community/starter-template <project-name>

# 프로젝트 실행하기
$ cd <project-name>
$ npm install #Or yarn

# 설치 완료 후 실행하기
$ npm run dev
```

## SASS 설치

### node-sass, sass-loader 설치 및 셋팅

```bash
$ npm install --save-dev node-sass sass-loader@10

// nuxt.config.js
export default {
	css : [
		'~assets/scss/app.scss'
	]
}
```

### @nuxtjs/style-resources 설치 및 셋팅

```bash
$ npm install --save-dev @nuxtjs/style-resources

// nuxt.config.js
module.exports = {
	modules:['@nuxtjs/style-resources'],
	styleResources: {
		scss :[
			'@/assets/scss/_*.scss'
		]
	}
}

참고) https://junglast.com/blog/nuxt-style-resources
```

## git log --> 명령어 'hist' 지정

```bash
$ git config --global alias.hist "log --graph --all --pretty=format:'%C(yellow)[%ad]%C(reset) %C(green)[%h]%C(reset) | %C(white)%s %C(bold red){{%an}}%C(reset) %C(blue)%d%C(reset)' --date=short"

# ex) git hist -n
```

## Nuxt.js로 github pages에 정적 사이트 배포하기

### nuxt.config.js 변경

```bash
#nuxt.config.js 파일에 아래 코드를 추가한다.

export default {
  target: 'static', // 정적 웹사이트임을 명시
  router: {
    base: '/<repository-name>/' // github repository 이름 넣기
  }
}
```

### push-dir 사용

```bash
#1. push-dir 패키지 깔기
$ npm install push-dir --save-dev

#2. package.json에 deploy script코드 추가
"scripts": {
  "dev": "nuxt",
  "build": "nuxt build",
  "start": "nuxt start",
  "generate": "nuxt generate",
  "deploy": "push-dir --dir=dist --branch=gh-pages --cleanup"
},

#3. 배포할 파일 만들기
$ npm run generate

#4. gh-pages 브랜치에 올리기
$ npm run deploy

#5. github 저장소 > Settings - Pages 메뉴
Source 영역에서 바라보고 있는 브랜치가 gh-pages여아만 github pages 도메인으로 올라간다. 만약 다른 브랜치라면 변경

*원격 main 브랜치가 최신화인 상태에서 deploy 하기
```
