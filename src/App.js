import { Slider } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Box from "./Box/Box";
import Checkbox from "@material-ui/core/Checkbox";
import { SketchPicker } from "react-color";

function App() {
  const [blur, setBlur] = useState(40);
  const [transparency, setTransparency] = useState(25);
  const [checked, setChecked] = useState(true);
  const [color, setColor] = useState("#ffffff");

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div className="app">
      <div className="controls">
        <h2>Glass Morphism Generator</h2>

        <div className="control_input">
          <div className="control_top">
            <h4>Blur Value:</h4>
            <input type="text" value={blur / 10} />
          </div>
          <Slider
            min={0}
            max={200}
            value={blur}
            onChange={(e, blur) => setBlur(blur)}
          />
        </div>
        <div className="control_input">
          <div className="control_top">
            <h4>Transparency</h4>
            <input type="text" value={transparency / 100} />
          </div>
          <Slider
            min={0}
            max={100}
            value={transparency}
            onChange={(e, transparency) => setTransparency(transparency)}
          />
        </div>

        <div className="control_input checkInput">
          <div className="control_top">
            <h4>Outline:</h4>
            <Checkbox
              checked={checked}
              color="primary"
              onChange={handleChange}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </div>
        </div>

        <div className="control_input">
          <SketchPicker
            color={color}
            onChangeComplete={(color) => setColor(color.hex)}
          />
        </div>
      </div>
      <Box
        blur={blur}
        transparency={transparency}
        checked={checked}
        color={color}
      />
    </div>
  );
}

export default App;
