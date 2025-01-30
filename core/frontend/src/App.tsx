import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="maincontent">
      <h1>welcome to cento with friends!!</h1>
      <p>if you are curious what a cento is feel free to check out <a href="https://www.poetryfoundation.org/education/glossary/cento">this website</a></p>
      <ul>
        <li>here is some stuff in a list</li>
      </ul>
      <button onClick={() => setCount((count) => count + 15)}>
        count is {count}
      </button>
      <p>oh to see without my eyes... the first time that you kissed me...</p>
    </div>
  );
}

export default App;
