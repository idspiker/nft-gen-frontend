import useColorPicker from './hooks/useColorPicker';
import { useState } from 'react';

export default function ColorPicker() {
  const [sliderPosition, setSliderPosition] = useState(1530);
  const [setMinXSliderPosition, redMinX, greenMinX, blueMinX] =
    useColorPicker();

  function handleSliderChange(e) {
    setSliderPosition(e.target.value);
    setMinXSliderPosition(e.target.value);
  }

  return (
    <div>
      <input
        type='range'
        min={0}
        max={1530}
        value={sliderPosition}
        onChange={handleSliderChange}
      />
      <div
        style={{ color: `rgb(${redMinX}, ${greenMinX}, ${blueMinX})` }}
      >{`rgb(${redMinX}, ${greenMinX}, ${blueMinX})`}</div>
    </div>
  );

  // Panel on left
  /*
  The x axis controls the amount of the two secondary color parts between
  a threshold and 255, and the y axis controls all values between their 
  threshold and 0
  */

  // Panel on right
  /*
  Sets the color thresholds. Starts at the top with (255, 0, 0), then as
  it goes down it increases the second number. Once the second number 
  hits 255, the first decreases to 0 and then the third starts to 
  increase. Once the third increases, the second will decrease until 0.
  After this, it wraps back to increasing the first and then decreasing 
  the third.
   */
}
