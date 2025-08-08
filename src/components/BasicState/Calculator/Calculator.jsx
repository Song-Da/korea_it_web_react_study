import { useState } from "react";

// state 쓸 때 꼭 const 를 씀. 권장이 아니라 강제적...?인 듯? count 변수는 set 으로만 변경이 가능함.
// 자바의 접근 제어자 걸려있고 setter 가 아니면 바뀔 수 없는 것이라 보면 됨.
// 바꾸게 되면 버그가 일어나거나 diff 가 불가함. 상태 변화가 감지가 안 될 가능성이 있음.
function Calculator() {
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(0);

  const onClickHandler = (e) => {
    const clickedValue = e.target.value;

    const lastChar = input.charAt(input.length - 1);
    if ((lastChar === "+" || lastChar === "-") && clickedValue === "0") {
      return;
    }

    if (
      (lastChar === "+" || lastChar === "-") &&
      (clickedValue === "+" || clickedValue === "-")
    ) {
      return;
    }
    // +2 거나 -2 이면서 클릭드벨류가 0이면 추가하지 않고 리턴 시켜버리는 것. 이러면 0이 수식 뒤에 오지 않음.

    if (clickedValue === "r") {
      const inputArray = input.slice(0, -1);
      setInput(newInput);
      //   const newInputArray = inputArray.filter((char, index) => {
      //     return index < inputArray.length - 1;
      //   });
      //   setInput(newInputArray.join(""));
      return;
    }

    if (clickedValue === "=") {
      setResult(eval(input));
      setInput("0");
      return;
    }

    if (input === "0") {
      if (clickedValue === "+" || clickedValue === "-") {
        return;
      } else {
        setInput(clickedValue);
      }
      setInput(clickedValue);
    } else {
      setInput(input + clickedValue);
    }
  };

  return (
    <div>
      <h1>입력:{input}</h1>
      <h1>결과:{result}</h1>
      <div>
        <button onClick={onClickHandler} value={0}>
          0
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={1}>
          1
        </button>
        <button onClick={onClickHandler} value={2}>
          2
        </button>
        <button onClick={onClickHandler} value={3}>
          3
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={4}>
          4
        </button>
        <button onClick={onClickHandler} value={5}>
          5
        </button>
        <button onClick={onClickHandler} value={6}>
          6
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={7}>
          7
        </button>
        <button onClick={onClickHandler} value={8}>
          8
        </button>
        <button onClick={onClickHandler} value={9}>
          9
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={"+"}>
          +
        </button>
        <button onClick={onClickHandler} value={"-"}>
          -
        </button>
        <button onClick={onClickHandler} value={"="}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
