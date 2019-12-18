# File title
- 기한 ( 2019.08.21~2019.09.01 )

------------------

## 문서 정의

| Document Type     | `<!DOCTYPE html>` ( html5 로 지정 ) |
| :---------------------| :-------------------   |
| Incoding              | `<meta charset="utf-8" />`         |
| Cross Browsing     |  Chrome | 


## CSS 구조
| Directory            | File Name         | Discription        |
| :------------------- | :----------------- | :----------------- |
| dist/css  | common.css	     |  이전 공통 (초기화까지 포함)   |
| dist/css  | common_v2.css	     |  신규 공통 (초기화까지 포함)   |
| dist/css  | main_v2.css	     |   메인페이지 css   |
| dist/css  | sub_v2.css	     |   서브페이지 css   |

> note :
> - html5로 작업
> - css class 이름은 알파벳(대소문자)로 시작하되 숫자/특수문자로 시작하여선 안된다.
> - css id 는 Camel case 방식으로 이름을 명기한다.
> - 기존 common.css 는 호출하도록 하고 있으나 footer 부분은 새로진 부분이 많아서 common.css에서 footer에 관련한 css는 제거함.

----------

## Image 및 Font 구조
| Directory                             | Discription                 |
| :--------------------------------- | :-------------------------- |
| dist/imgs              |  이미지 경로                    |
| dist/imgs/common |  공통요소 이미지 경로   |
| dist/imgs/main |  메인페이지 이미지 경로   |
| dist/imgs/pages |  서브페이지 이미지 경로   |

>note :
> - font는 **NanumSquareRound(나눔스퀘어라운드)**
> - 폰트 정의는 **common_v2.css** 상단에 정의 되어 있다.

-----



## Javascript 및 라이브러리 구조

| Directory | Discription |
|:---|:---|
| dist/js   |  javascript 경로               |
| dist/vendors/greensock | 모션 유틸 라이브러리 ( TweenMax 라이브러리 )  |
| dist/vendors/jquery    | 화면(dom) 컨트롤 지원 ( jquery js라이브러리 )  |



# TASK list


## 프로세스
|1depth|2depth|3depth|4depth|5depth| Directory | Description |  
|:---|:---|:---|:---|:---|:---|:---|  
| 메인 |--|--|--|--|  [M.1.0.html](./M.1.0.html) | - |
| 메인 |로그인 후|--|--|--|  [M.1.1.html](./M.1.1.html) | - |
| -- |로그인|비밀번호경고|--|--|  [M.0.0.html](./M.0.0.html) | - |
| -- | -- |비밀번호변경안내|--|--|  [M.0.1.html](./M.0.1.html) | - |
| -- |--|로그인전|--|--|  [M.1.2.html](./M.1.2.html) | - |
| -- |--|로그인후|--|--|  [M.1.3.html](./M.1.3.html) | - |
| -- |시세조회|시세조회결과|--|--|  [M.2.1.html](./M.2.1.html) | - |
| -- |판매하기(랜딩페이지)|--|--|--|  [M.3.0.html](./M.3.0.html) | - |
| -- |판매하기|--|--|--|  [M.3.0.0.html](./M.3.0.0.html) | - |
| -- |--|베이직판매하기|제조사|--|  [M.3.1.0.html](./M.3.1.0.html) | - |
| -- |--|--|시리즈|--|  [M.3.1.1.html](./M.3.1.1.html) | - |
| -- |--|--|모델명|--|  [M.3.1.2.html](./M.3.1.2.html) | - |
| -- |--|--|시세조회결과|--|  [M.3.1.3.html](./M.3.1.3.html) | - |
| -- |--|--|판매신청/등록|--|  [M.3.1.4.html](./M.3.1.4.html) | - |
| -- |--|--|등록확인|--|  [M.3.1.5.html](./M.3.1.5.html) | - |
| -- |--|--|등록완료결과|--|  [M.3.1.6.html](./M.3.1.6.html) | - |
| -- |--|스마트판매하기|Qcheck검사|--|  [M.3.2.0.html](./M.3.2.0.html) | - |
| -- |--|--|검사결과코드입력 |--|  [M.3.2.1.html](./M.3.2.1.html) | - |
| -- |--|--|판매모델정보확인 |--|  [M.3.2.2.html](./M.3.2.2.html) | - |
| -- |--|--|판매신청|--|  [M.3.2.3.html](./M.3.2.3.html) | - |
| -- |--|--|등록확인|--|  [M.3.2.4.html](./M.3.2.4.html) | - |
| -- |--|--|등록완료결과|--|  [M.3.2.5.html](./M.3.2.5.html) | - |
| -- |기부하기(랜딩페이지)|--|--|--|   [M.4.0.html](./M.4.0.html)  | - |
| -- |기부하기|제조사|--|--|  [M.4.3.html](./M.4.3.html) | - |
| -- |--|시리즈|--|--|  [M.4.4.html](./M.4.4.html) | - |
| -- |--|모델명|--|--|  [M.4.5.html](./M.4.5.html) | - |
| -- |--|시세조회결과|--|--|  [M.4.6.html](./M.4.6.html) | - |
| -- |--|기부신청/등록|--|--|  [M.4.7.html](./M.4.7.html) | - |
| -- |--|등록확인|--|--|  [M.4.8.html](./M.4.8.html) | - |
| -- |--|등록완료결과|--|--|  [M.4.9.html](./M.4.9.html) | - |
| -- |상세페이지|온라인판매가이드|--|--|  [M.5.0.html](./M.5.0.html) | - |
| -- |--|ATM|--|--|  [M.5.1.html](./M.5.1.html) | - |
| -- |기부하기(랜딩페이지)|--|--|--|   [M.4.0.html](./M.4.0.html)  | - |
| -- |민팃 중고폰ATM 찾기|--|--|--|  [M.6.0.html](./M.6.0.html) | - |
| -- |거래조회|접수번호입력|--|--|  [M.7.0.html](./M.7.0.html) | - |
| -- | -- |조회결과확인|--|--|  [M.7.1.html](./M.7.1.html) | - |



---------


### 필수 호출해야되는 javascript 파일
> note:
> - https://code.jquery.com/jquery-3.4.1.min.js (  상단 ``` <head></head>``` 안에 위치 )
> - https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js (  상단 ``` <head></head>``` 안에 위치 )
> - ./dist/vendors/greensock/TweenMax.min.js(  상단 ``` <head></head>``` 안에 위치 )
> - ./dist/vendors/greensock/easing/EasePack.min.js(  상단 ``` <head></head>``` 안에 위치 )
> - ./dist/js/Utils.js (   ``` <body></body>``` 안에 맨 하단 위치 )
> - ./dist/js/common.js (   ``` <body></body>``` 안에 맨 하단 위치 )
> - 호출되는 순서를 맞추어야 한다.  defer속성을 써서 순서를 맞추어도 된다.
> - defer 는 HTML 구문 분석이 완전히 완료되면 스크립트 파일을 실행한다.
```<script defer src="script.js"></script>``` 
> - 하지만 dom을 컨트롤 하는 js 경우 왠만하면   ```</body>```  요소 바로 전에 선언하는 것이 좋다.


### TweenMax 모션 라이브러리 사용.


```
var tween = TweenMax.to(
    $box, // 제이쿼리 셀렉터 이여도 되고 선택자 문자열을 대입해도 된다.
    1,  // 모션 스피드 - 단위 초 
    {
        x: '-=50', // 현재의 x좌표에서 50씩 x좌표로 차감하여 이동.
        y: '+=50', // 현재의 y좌표에서 50씩 y좌표로 증가하여 이동.
        onComplete: myFunction,   //tween 모션이 완료후 실행할 함수 
        ease:Back.easeOut  //easing 함수 
});
```



## **스마트판매하기 추가 작업 및 베이직판매 변경 내용** 
> note:  2019.12.17  - **하위 탭 노출 관련 수정**
> - 수정부분 주석 검색키워드 js, css  - 2019.Dec.17



|파일         |  수정사항    | 
|:-----------|:-----------|
| dist/css/sub_v2.css| 수정 내용 2019.Dec.17 주석 |
| dist/js/common.js| 수정 내용 2019.Dec.17 주석 |

----

## **스마트판매하기 추가 작업 및 베이직판매 변경 내용** 
> note:  2019.12.4  - **시세조회결과 페이지 추가, 외관상태조회 변경, 파일명 화면ID로 변경**
> - 수정부분 주석 검색키워드 html, css  - 2019.Dec.4
> - 페이지 추가 - M.2.1.html
> - 외관상태조회를 시세조회로 변경 - M.3.1.3.html, M.4.6.html


|파일         |  수정사항    | 
|:-----------|:-----------|
| [M.2.1.html](./M.2.1.html) | 시세조회 결과 페이지 추가 |
| [M.3.1.3.html](./M.3.1.3.html) | 시세조회로 변경 |
| [M.4.6.html](./M.4.6.html) | 시세조회로 변경 |
| dist/css/sub_v2.css| 추가 내용 2019.Dec.4 주석 |
| dist/imgs/common/icn-review-prev.png | 이미지 추가 |
| dist/imgs/common/icn-review-next.png | 이미지 추가 |

----

## **스마트판매하기 추가 작업 및 베이직판매 변경 내용** 
> note:  2019.11.22  - **로그인_비밀번호변경 경고 및 안내, 매장찾기 페이지 기능 추가작업, 거래조회 페이지 추가, 거래조회 메뉴 추가**
> - 수정부분 주석 검색키워드 html, css  - 2019.Nov.22
> - 페이지 추가 - M.0.1.html,M.7.0.html,M.7.1.html


|파일         |  수정사항    | 
|:-----------|:-----------|
| [M.0.0.html](./M.0.0.html) | 벨리데이션 문구 마크업 추가 |
| [M.0.1.html](./M.0.1.html) | 비밀번호 변경 안내 |
| [M.1.2.html](./M.1.2.html) | gnb 마크업 수정 |
| [M.1.3.html](./M.1.3.html) | gnb 마크업 수정 |
| [M.6.0.html](./M.6.0.html) | 매장찾기 - 항목 및 아이콘 추가 |
| [M.7.0.html](./M.7.0.html) | 거래조회 - 접수번호입력 |
| [M.7.1.html](./M.7.1.html) | 거래조회 - 조회결과확인 |
| dist/css/sub_v2.css| 추가 내용 2019.Nov.22 주석 |
| dist/css/common_v2.css| 추가 내용 2019.Nov.22 주석 |
| dist/imgs/common/icn-sale-inquiry.png | 이미지 추가 |
| dist/imgs/pages/ico-etc.png | 이미지 추가 |
| dist/imgs/pages/ico-sk.png | 이미지 추가 |
| dist/imgs/pages/pin-etc.png | 이미지 추가 |
| dist/imgs/pages/pin-sk.png | 이미지 추가 |
| dist/imgs/pages/pin-sk.png | 이미지 추가 |
| dist/imgs/pages/img-password-minti@3x.png | 이미지 추가 |
| dist/imgs/pages/img-code@3x-kakao.png | 이미지 추가 |

----

## **스마트판매하기 추가 작업 및 베이직판매 변경 내용** 
> note:  2019.11.15 - **스마트판매 페이지 추가 및 수정**
> - 페이지 수정 - M.3.1.7.html, M.4.10.html
> 
> - 페이지 추가 - M.3.0.0.html, M.3.2.0.html, M.3.2.1.html, M.3.2.2.html, M.3.2.3.html, M.3.2.4.html, M.3.2.5.html
> 
> - sub_v2.css line 317 ~ 520 추가
>
> - style.js line 210 ~ 223 추가


|파일         |  수정사항    | 
|:-----------|:-----------|
| [M.3.0.0.html](./M.3.0.0.html) | 판매하기 |
| [M.3.1.7.html](./M.3.1.7.html) | 베이직판매하기_등록확인 |
| [M.3.2.0.html](./M.3.2.0.html) | 스마트판매하기_Qcheck검사 |
| [M.3.2.1.html](./M.3.2.1.html) | 스마트판매하기_검사결과코드입력 |
| [M.3.2.2.html](./M.3.2.2.html) | 스마트판매하기_판매모델정보확인 |
| [M.3.2.3.html](./M.3.2.3.html) | 스마트판매하기_판매신청 |
| [M.3.2.4.html](./M.3.2.4.html) | 스마트판매하기_등록확인 |
| [M.3.2.5.html](./M.3.2.5.html) | 스마트판매하기_등록완료결과 |
| [M.4.10.html](./M.4.10.html) | 기부하기-등록확인 |
| ./dist/css/sub_v2.css| 스마트판매하기 관련 css 추가 line 317 ~ 520 |
| ./dist/jscript/style.js| 스마트판매하기 관련 js 추가 line 210 ~ 223 |
| ./dist/imgs/pages/btn-arrow.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/icn-appstore@3x.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/icn-googleplay@3x.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/img-code@3x.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/icn-helpbox@3x.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/icn-qcheckdetail-mobile@3x.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/img-finished@3x.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/img-appstore@3x.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/icn-next@3x.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/img-googleplay@3x.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/img-basicsale@3x.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/icn-exit@3x.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/img-smartsale@3x.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/img-android@3x.png | 스마트판매하기 관련 이미지 추가 |
| ./dist/imgs/pages/img-i-os@3x.png | 스마트판매하기 관련 이미지 추가 |

----------
> note:  2019.11.01  - sub_v2.css  길찾기 버튼 및 주소텍스트 길이값 조절.

|파일         |  수정사항    | 
|:-----------|:-----------|
| [./dist/css/sub_v2.css](./dist/css/sub_v2.css) |  line: 1056  width 및 단어별 줄바꿈 설정. / line:1070: top 위치 조절 |

----------

> note:  2019.10.28  - store_03.html  스토어 리스트 클릭시 창닫기 기능 line: 465 ~ 469 추가

|파일         |  수정사항    | 
|:-----------|:-----------|
| [store_03.html](./store_03.html) | 스토어 리스트 클릭시 창닫기 기능 line: 465 ~ 469 추가|
| [./dist/css/sub_v2.css](./dist/css/sub_v2.css) |  line: 1050  z-index 추가|

----------

> note:  2019.10.24  - store_03.html 페이지 추가( store_01.html + store_02.html 의 기능 병합 )

|파일         |  수정사항    | 
|:-----------|:-----------|
| [store_03.html](./store_03.html) | store 페이지 기능 병합 작업 |
| ./dist/css/sub_v2.css| store 기능 병합 관련 css 추가 |
| ./dist/imgs/pages/group@3x.png | store 관련 이미지 추가 |

----------

> note:  2019.10.14  - store_01.html, store_02.html  페이지 추가.

|파일         |  수정사항    | 
|:-----------|:-----------|
| [store_01.html](./store_01.html) | store 페이지 추가 작업 |
| [store_02.html](./store_02.html) | store 리스트 페이지 추가 작업 |
| ./dist/css/common_v2.css| store 관련 css 추가 |
| ./dist/css/sub_v2.css| store 관련 css 추가 |
| ./dist/js/vendors/jquery.mCustomScrollbar.js | js 파일 추가 |
| ./dist/imgs/pages/pin-samsung.png | store 관련 이미지 추가 |
| ./dist/imgs/pages/mapmarker-homeplus@3x.png | store 관련 이미지 추가 |
| ./dist/imgs/pages/mapmarker-emart@3x.png | store 관련 이미지 추가 |
| ./dist/imgs/pages/mapmarker-emart-popup@3x.png | store 관련 이미지 추가 |
| ./dist/imgs/pages/ico-samsung.png | store 관련 이미지 추가 |
| ./dist/imgs/pages/icn-up-small@3x.png | store 관련 이미지 추가 |
| ./dist/imgs/pages/icn-mylocation@3x.png | store 관련 이미지 추가 |
| ./dist/imgs/pages/icn-list@3x.png | store 관련 이미지 추가 |
| ./dist/imgs/pages/icn-home-black@3x.png | store 관련 이미지 추가 |
| ./dist/imgs/pages/icn-down@3x.png | store 관련 이미지 추가 |
| ./dist/imgs/pages/icn-down-small@3x.png | store 관련 이미지 추가 |
| ./dist/imgs/pages/group@3x.png | store 관련 이미지 추가 |
| ./dist/imgs/pages/btn-drawermenu-black@3x.png | store 관련 이미지 추가 |

----------

> note:  2019.09.02  - 내용 추가
> 수정부분 주석 검색키워드 - 2019-09-02

|파일         |  수정사항    | 
|:-----------|:-----------|
| [index.html](./index.html) | footer 수정 |
| [detaile_01.html](./detaile_01.html) | footer 수정 |
| [detaile_02.html](./detaile_02.html) | footer 수정 |
| ./dist/css/common_v2.css	 | footer 수정 | 


----------

> note:  2019.08.29  - 내용 추가
> 수정부분 주석 검색키워드 - 20190829

|파일         |  수정사항    | 
|:-----------|:-----------|
| [index.html](./index.html) | 하단에 스크립트 추가 -  1. 버튼 추가 |







------

