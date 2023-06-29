import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import { Button } from "./components/Button";
import { useState } from "react";

function App() {
  let cities = ["Gurugram", "Dehradun", "Bangalore", "Noida"];
  const handleOnSelectedItem = (city: string) => console.log(city);
  let [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibility(true)}>
        Click me!
      </Button>
    </div>
  );
}

export default App;
