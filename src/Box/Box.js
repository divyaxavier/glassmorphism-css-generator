import React from "react";
import "./Box.css";

const Box = ({ blur, transparency, checked, color }) => {
  const hexToRgb = (color) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };
  var outline = "";
  if (checked) {
    outline = "border: 1px solid rgba( 255, 255, 255, 0.18 )";
    console.log(outline);
  } else {
    outline = "";
    console.log(outline);
  }
  return (
    <div className="box">
      <div
        className="box_preview"
        style={{
          background: `rgba( ${hexToRgb(color).r}, ${hexToRgb(color).g}, ${
            hexToRgb(color).b
          }, ${transparency / 100} )`,
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: `blur( ${blur / 10}px )`,
          borderRadius: "10px",
          border: `${outline.slice(8)}`,
        }}
      >
        <textarea
          value={`background: rgba( ${hexToRgb(color).r}, ${
            hexToRgb(color).g
          }, ${hexToRgb(color).b}, ${
            transparency / 100
          } ), \nbox-shadow: rgb(31 38 135, 0.37 ) \nbackdrop-filter: blur(${
            blur / 10
          }px);\nborder-radius: 10px;\n${outline}`}
        ></textarea>
      </div>
    </div>
  );
};

export default Box;
