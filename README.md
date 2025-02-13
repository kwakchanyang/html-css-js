# HTML

1 .HTML이란? HyperTextMarkdownLanguage - 웹페이지는 만드는 언어 - 웹페이지 뼈대

2. HTML의 구성요소

   1. head: meta,link,style 등등 넣을 수 있음
   2. body: 나머지 모든 태크가 들어갈 수 있음
      **주의사항**: script태그는 바디의 끝자락에 추가해주면 됨

3. body에 들어가는 태그들

   - header: 웹페이지에서 딱 한 번 들어가면 됨, 웹페이지의 제목, 메뉴버튼,
     네브바, 메뉴 이동 버튼들
   - footer: 바닥글로 딱 한 번 들어감. 기타 잡다한 내용들(넣고 싶은 거 넣으면 됨).
     사업자등록번호, 사업장소재지, 대표자명 등이 들어갑니다.
   - main: 모든 태그 넣으면 됨. 정말 중요한 요소들만 넣어줌.

4. article: 기사
   main을 나눠주는 컴포넌트를 감싸주는 태그

5. section: 구간
   article 태그 안에서 영역을 나눠주는 태그

6. div: division 나눔
   article, section을 제외하고 모든 순간에서 나눠줄 때 씀.
   **주의사항**: p태그 안에서는 못씀

   - 웹페이지의 99% div태그일 듯: netflix

7. Text를 표시하는 태그들

   - h1~h6
   - p
     - 만약 p태그의 특정 부분을 선택해서 다른 스타일을 주고 싶다면 사용하는 태그는? b, span

8. button: 클릭할 수 있을 것만 같은 태그

9. 컴포넌트가 시작되는 부모요소는 늘 하나다.
    - 클래스를 부모요소에게 준 다음에 시작한다.
    - 클래스를 마구잡이로 부여하지 않는다. 시멘틱 태그를 써서 해결

# CSS

    CSS이란? : CascadingStyleSheet
        - 웹 꾸미기

        ## in-line style
            <div style="display:flex;">

        ## style tag
            <head>
                <style>
                div{
                    display: flex;
                }
                </style>

        ## 외부 스타일시트 연결
            1. html > head안에 link태그로 스타일시트 연결
            2. styleFile.css를 만들어서 스타일 작성

    1. 인라인스타일링, 스타일태그, 외부스타일시트 작성으로 스타일 할 수 있음
    **우선순위**:인라인스타일링 >  스타일태그 > 외부스타일시트
    **주의사항**: 스타일링은 많다. 그래서 따로 분리하는 것이 좋다.(무조건 외부스타일시트 연결하라는 말임)

    2. 선택자
        - 태그이름: body태그 안의 해당 태그의 이름을 가진 모든 태그를 선택하여 스타일링함
        - 부모태그 > 자식요소 : 왼쪽의 부모태그 안에 있는 자식요소를 선택
            * :nth-child(순서): 몇 번째 자식을 선택할지 정할 수 있음
            * :first-child: 첫 번째 자식 요소
            * :last-child: 마지막 자식 요소
        - 클래스: .클래스이름으로 표기
            * 하나의 태그에 여러가지 클래스를 줄 수 있음
            * 다른 태그에도 동일한 클래스를 적용할 수 있음
        - 아이디: #아이디이름으로 표기
            * 하나의 태그에 여러가지 아이디를 줄 수 있음
            **주의사항**: 다른태그에서 쓰면 안됨.(무조건 고유한 값을 유지해야 함.)

    3. .클래스.클래스....: 여러가지 클래스가 한꺼번에 들어간 태그를 선택
                 -응용 : #아이디#아이디...:여러가지 아이디가 한꺼번에 들어간 태그를 선택  
                 -한 번 정의해둔 
    4. 선행 선택자 + 마지막 선택자 : 마지막선택자가 내가 스타일링을 줄 태그임.
    5. position : 
            - relative : 부모요소로 지정, 기준이 됨
            - absolute : 자식요소로 지정, 기준을  따라감
                   **주의사항**: top,left 또는 top,right또는 bottom,left또는 buttom,right로만 작성하면 됨.
            - content: '';
                    **가상요소만드는 친구**: absoulte를 섞어서 사용하면 개꿀
    6. object-fit : 
            -cover : 찌그러진 사진을 예쁘게 펴줌. 단점 : 위치 조정은 안됨.     
    7. 태그 + 태그 : 태그 옆의 태그를 선택할 수 있음.
    8. input에서 : checked 라고 하는 상태를 선택할 수 있음.
    9. transition: 애니메이션 효과를 적용할 수 있음.
        -예시: transition: all .5s(속도)
    10. label, span: display속성을 block으로 줘야만 눈으로 확인할 수 있음.


# JS

1. document: DOM (Document Object Model): 웹 그잡채
2. document.querySelector: 추노, CSS 작성 규칙을 따라서 잡아옴
    -예시: const body = document.querySelector("body")
    -예시: const btn = document.querySelector("body .btn")
        **주의** 클래스명은 많은 곳에서 사용할 수 있기 때문에 btn은 복수가 될 수도 있음
3. document.createElement: 태그를 만들어줌
    -예시: const button = document.createElement("button")    
4. 잡아온태그.onclick = 화살표 함수를 사용해서 클릭하는 이벤트를 설정할 수 있음.
5. setInterval: 설정한 시간 단위마다 계속해서 반복적으로 실행되는 코드를 짤 수 있음.
    -예시
    const intervalId = setInterval(
        ()=>{
            ...실행할 코드
        }, 3000 // 밀리세컨드 단위 1000 = 1초
    )         
    **주의사항**: 새로고침 이외에 멈출 방법이 하나밖에 없음, intervalId를 사용해서 꺼줘야 함.
        -예시: cleaInterval(intervalId) // 이거 쓰면 멈춤
