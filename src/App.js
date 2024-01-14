import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // HOW TO ADD DAY(S) TO DATE IN JAVASCRIPT
  const date = new Date("June 24 2027");
  date.setDate(date.getDate() + count);

  return (
    <div className="App">
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
