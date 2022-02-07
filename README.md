# 원티드 프리온보딩 코스
원티드 프리온보딩 프론트엔드 코스 제출용 과제입니다.

## DEMO

[link] https://thirsty-kowalevski-0f10b8.netlify.app/

## ⚒️ 기술 스택
- Javascript(ES6+)
- styled-componetns
- React

## 💻 구현 결과

### 1. Toggle

- 구현한 방법과 이유

    CSS로만 구현, JS보다 더 빠르기 때문에 구현하였습니다.

    CSS in JS인 styled-components를 사용하므로 큰 차이를 기대하기 어렵지만, 추후 SCSS나 CSS로 구현하게 된다면 JS로 구현하는 것보다 성능면에서 좋다는 것을 알게 되어 CSS로만 구현하게 되었습니다.

    React에서는 state를 가지고 on/off를 체크하지만, CSS로만 구현할 때에는 checkbox input을 이용해서 구현하게 됩니다.

    checkbox input은 보이지 않게 하고, 대신 click을 받을 label을 이용해서 스위치를 꾸미고, input의 checked를 이용해서 ON/OFF를 구현합니다.

- 구현하면서 어려웠던 점과 해결 방법

    처음에 구현할 때에는 Switch rail 모양 div, 흰색 버튼 모양 label, background(색 채워지는) div 각각 따로 요소를 생성하여 구현하였는데,

    이렇게 되면 Wrap 안에 div, label, background만 있고, Toggle Switch ON/OFF 이 글귀는 밖에 두어야 했습니다.

    이는 즉, 결국에 state를 사용해야 구현이 가능해졌습니다.

    따라서, div, label, div를 따로 생성하지 않고, label은 흰색 버튼을 나타내도록 하고, label을 감싸는 div는 Switch Rail 및 backround(색)으로 두고
    Wrap안에 p의 after의 content에는 OFF, before에는 ON이 되도록 설정하여 state 사용없이 Toggle을 구현할 수 있었습니다.

- 자세한 실행 방법

![1  Toggle](https://user-images.githubusercontent.com/80020227/152763537-795cab62-9cd9-4e8b-9cdd-3ef7da3bf5f7.gif)

### 2. Modal

- 구현한 방법과 이유

    Modal show 여부를 boolean으로 나타내는 state를 사용하여 button이 클릭되었을 때 true, Modal 창의 x 버튼이 클릭되었을 때 false로 동작하도록 했습니다.
    
    Modal은 상위 요소에 구애받지 않고 창 전체에 나타내주고 싶어 position fixed를 사용하여 나타냈고, display를 통해 실제 content 요소가 가운데 오도록 설정했습니다. 

- 구현하면서 어려웠던 점과 해결 방법

    처음 Modal을 position absolute로 지정하였으나 App에 모든 컴포넌트를 보여주도록 설정했기 때문에 fixed로 변경하여 나타냈습니다.

- 자세한 실행 방법

![2  Modal](https://user-images.githubusercontent.com/80020227/152772058-ee081479-2cd2-4bb5-9fe0-2364a1e05494.gif)

### 3. Tab

- 구현한 방법과 이유

    항목이 클릭된 곳이 어딘지 알 수 있도록 currentMenu state와 그에 따라 보여질 currentContent state를 사용했습니다.
    
    menu(Tab1, Tab2, Tab3) array 에 map을 사용하여 항목을 나열하고, 그 항목이 클릭되었을 때의 index를 이용하여 currentMenu를 set해주고, currentMenu가 바뀔 때마다 currentContent가 바뀌어서 렌더링될 수 있도록 했습니다.
    
- 구현하면서 어려웠던 점과 해결 방법

    currentContent를 어떻게 보여줄지 잘 몰랐습니다. 그래서 JSX 요소 안에서 currentMenu가 0,1,2일 때를 각각 삼항 연산자로 나타내 주었는데, 너무 가독성이 떨어지고, return하는 요소들이 길어졌습니다.
    
    그래서 useEffect를 이용하여 currentMenu가 바뀔 때마다 span안에 해당하는 요소를 담아서 currentContent에 set 해주고, 그 currentContent를 render 요소에 넣어주어 가독성을 높였습니다.

- 자세한 실행 방법

![3  Tab](https://user-images.githubusercontent.com/80020227/152773237-02709aba-c55e-435d-859c-6117cfb1fde7.gif)

### 4. Tag

- 구현한 방법과 이유

    state는 inpur의 text를 담는 state와 tag 내용들을 담고 있는 배열 state가 필요했습니다.
    
    input에 값을 넣어 사용자가 enter를 입력했을 때 submit을 동작하도록 하여 input에 담긴 내용을 tags 배열에 추가해주는 방법을 사용하였습니다.
    
    또한, delete는 tags 요소 하나하나의 id를 가지고, 클릭된 요소의 id와 같을 때 그것을 filtering하여 삭제를 구현했습니다.
    
- 구현하면서 어려웠던 점과 해결 방법

    처음에 삭제를 구현하려고 했을 때, id를 어떤 것으로 사용할지 고민했습니다. 내용을 그대로 id로 사용하기에는 겹칠 수도 있었으며, index도 가변적이기 때문에 위험하다고 판단했습니다.
    
    그래서, nanoid/uuid를 도입해야겠다고 생각했고, 가벼운 프로젝트이므로 더 용량이 작고 빠른 nanoid를 사용하기로 했습니다.
    
    따라서 tag 생성 시 value에는 input의 내용, id는 nanoid를 생성하여 unique한 id를 구현했고, 안전하게 요소를 관리할 수 있도록 했습니다.

- 자세한 실행 방법

![4  Tag](https://user-images.githubusercontent.com/80020227/152774277-5bdd3139-dc6f-4e26-b3d9-75fd0e6de35c.gif)

### 5. AutoComplete

- 구현한 방법과 이유

    input에서 단어를 받아 onChange에서 data들의 단어 포함 여부를 판단하여 filtering하여 나타내주도록 구현했습니다.
    
- 구현하면서 어려웠던 점과 해결 방법

    사용자가 input을 입력하자마자 변했기 때문에 onChange 이벤트 핸들러를 사용하여 구현하고, 대소문자를 모두 확인했으나 
    
    단어가 빈 문자열일 경우 filtering에 걸리지 않는 현상이 있었습니다.(모든 문자가 다 찾아짐)
    
    따라서, onChange 함수에서 찾는 단어가 빈 문자열 일 경우는 결과 state를 빈 배열로 초기화하고 early return 하도록 구현하여 해결했습니다.

- 자세한 실행 방법

![5  AutoComplete](https://user-images.githubusercontent.com/80020227/152808743-1f442f5e-9652-414b-b8d1-9dda274b2431.gif)

### 6. ClictToEdit

- 구현한 방법과 이유

    먼저, 클릭하기 전에 diplay 되는 요소는 div로 두고, div가 클릭되었을 때 input이 그 value를 가지고 나타나도록 구현했습니다.
    
    그리고, input을 수정한 후 바깥 부분을 클릭했을 때 바뀐 결과가 원래의 div에 반영되고, 하단 결과에도 반영되어야 했기 때문에 하나의 항목(이름, 나이)마다 각각 state가 두개씩 필요했습니다.
    
    또한, 수정 중인지 아닌지를 판단할 수 있는 boolean state isEditing이 필요했습니다.
    
    따라서 div ref를 클릭하면 isEditing이 true가 되어 input이 나타나고, input ref의 바깥 요소를 클릭했을 때 input의 내용이 set되고, isEditing이 다시 false가 되어 div가 나타나도록 구현했습니다.
    
- 구현하면서 어려웠던 점과 해결 방법

    바깥 부분을 클릭했을 때 동작하도록 하는 함수를 구현하는 것이 어려웠습니다.
    
    window.addEventListener에서 click 되었을 때 e.target과 ref.current랑 다른 경우에 return을 시키도록 구현했으나 되지 않아 바깥 영역을 클릭 했을 때 구현 방법을 찾아보았습니다.
    
    일단 기본적으로 document가 클릭되었을 때 outsideClick 함수를 동작시키고, 그 안에서 inputRef.current && !inputRef.current.contains(e.target)이 조건으로 바깥쪽 영역이 클릭되었을 시 하게 될 동작을 구현합니다.
    
    이 때 isEditing을 false로 하고, input에 입력되었던 값들을 결과 state에 담아주어 구현했습니다.

- 자세한 실행 방법

![6  ClickToEdit](https://user-images.githubusercontent.com/80020227/152780799-75716264-5677-4c41-839c-351d06f81aa3.gif)
