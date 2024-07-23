import { useState } from "react";
import { CompareComponent } from "./components/SampleComponent.tsx";
import Example from "./components/Example.tsx";

function App() {
  const [ visible, setVisible] = useState(true);
  return (
    <div>
      {/* <Example /> */}
      {/* <button onClick={() => setVisible(p => !p)}>Show</button> */}
      {visible && <CompareComponent />}
    </div>
  );
}

export default App;
