TypeScript: "useDefineForClassFields": true로 설정합니다.

Babel: 7.12 버전 이상만 사용 가능하며, 아래와 같이 설정합니다.
{
"plugins": [["@babel/plugin-proposal-class-properties", { "loose": false }]],
// Babel >= 7.13.0 (https://babeljs.io/docs/en/assumptions)
"assumptions": {
"setPublicClassFields": false
}
}

## Mobx

기본적으로 Mobx는 최적의 성능과 호환성을 위해 <strong>Proxy</strong> 를 사용한다고 한다.
아마 Vue의 <strong>Observer pattern + proxy 객체</strong> 를 사용하여 reactive한 state를 만들듯, Mobx 에서도 같은 방식으로 state를 업데이트 해주는 것 으로 보인다.

### 개념

Mobx는 3가지 방식으로 구동된다.

1. State (상태)
2. Action (동작)
3. Derivation (파생)

예제)

```js
import { makeObservable, observable, action } from "mobx";

class Todo {
  id = Math.random();
  title = "";
  finished = false;

  constructor(title) {
    makeObservable(this, {
      title: observable,
      finished: observable,
      toggle: action,
    });
    this.title = title;
  }

  toggle() {
    this.finished = !this.finished;
  }
}
```

Mobx의 내장 메서드인 makeObservable, observable으로 state의 반응성을 갖게 만들어주는 것 같다. toggle은 action 메서드로 지정.
