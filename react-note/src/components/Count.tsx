import * as React from "react";
import store from "../store";
import { observer } from "mobx-react";

const Count = () => {
  const { numberStore } = store;

  const onClickIncrease = () => {
    numberStore.increaseAction(3);
  };

  const onClickDecrease = () => {
    numberStore.decreaseAction(2);
  };

  return (
    <div>
      <p>현재 값: {numberStore.num}</p>

      <button onClick={onClickIncrease}>증가</button>
      <button onClick={onClickDecrease}>감소</button>
    </div>
  );
};

export default observer(Count);
