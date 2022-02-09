# Bundler

: 여러 js 파일에서 따로 작성을 해지만 변수 이름이 같은 것들이 있어서 충돌이 일어나기도 한다. 그러한 문제를 해결하는 것이 바로 번들러이다.

-   webpack
-   broserify
-   parcel

## Webpack

하나의 js 파일에 js, css, image들을 하나의 파일로 가져올 수 있다.

webpack이 없는 경우에 js 코드들을 작성하게 되면 먼저 동일한 이름을 가진 변수 파일들을 사용할 수 없게 된다.

```
src
	index.html
  index.js
  1.js
  2.js
```

이렇게 생긴 구조의 폴더 구조에서 `index.html` 에서 먼저 `index.js` 파일을 로딩한다.

`index.js` 파일은 `1.js`, `2.js` 파일을 또 `import` 한다. 이렇게 하게 되면 html 파일에서는 3개의 파일은 로딩을 하기 때문에 만약 로드하는 파일이 3개가 아니라면 용량도 용량이지만 로딩할 파일이 많기 때문에 네트워크 통신을 하는 과정에서 속도가 저하가 되는 요인이 되기도 합니다.

### [Loader](https://webpack.js.org/loaders/)

: 뒤쪽에 있는 로더부터 동작하게 됨.

```
{
		// 파일 형태 지정
    test: /\.css$/,
    // 로더 설정
    use: ["style-loader", "css-loader"],
},
```

#### [style](https://webpack.kr/loaders/#styling)

-   style-loader : DOM에 스타일로 모듈 내보내기를 추가합니다
-   css-loader : 리졸브된 가져오기로 CSS 파일을 로드하고 CSS 코드를 반환합니다.
-   less-loader : LESS 파일을 로드하고 컴파일합니다.
-   sass-loader : SASS/SCSS 파일을 로드하고 컴파일합니다.
-   postcss-loader : PostCSS를 사용해 CSS/SSS 파일을 로드하고 변환합니다.
-   stylus-loader : Stylus 파일을 로드하고 컴파일 함.

### [PlugIn](https://webpack.kr/plugins)

-   HtmlWebpackPlugin : 동일한 이름을 가진 html, js 파일을 하나로 만들어서 export 해주는 플러그인
