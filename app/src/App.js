import { useState } from "react";
// import { CompareComponent } from "./components/SampleComponent.tsx";
// import Example from "./components/Example.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import A from "./components/A.tsx";
import Test from "./components/Test.tsx";

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      {/* <Example /> */}
      {/* <button onClick={() => setVisible(p => !p)}>Show</button> */}
      {/* {visible && <CompareComponent />} */}

      {/* <ErrorBoundary>
        <Child />
      </ErrorBoundary> */}

      {/* <A /> */}

      <Test />

    </div>
  );
}

function Child() {
  const [error, setError] = useState(false);

  const handleClick = () => {
    setError((prev) => !prev);
  };

  if (error) {
    throw new Error("Error has been ocurred");
  }

  return <button onClick={handleClick}>Error!!!</button>;
}

export default App;
