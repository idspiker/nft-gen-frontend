import useColorPicker from './hooks/useColorPicker';

export default function ColorPicker() {
  const [
    minXSliderPosition,
    xPosition,
    yPosition,
    setMinXSlider,
    setColorPosition,
    redMinX,
    greenMinX,
    blueMinX,
  ] = useColorPicker(1530, 255, 255);

  function handleSliderChange(e) {
    setMinXSlider(e.target.value);
  }

  return (
    <div>
      <label htmlFor='minX'>minX</label>
      <input
        type='range'
        id='minX'
        min={0}
        max={1530}
        value={minXSliderPosition}
        onChange={handleSliderChange}
      />
      <label htmlFor='x'>x</label>
      <input type='range' id='x' min={0} max={255} />
      <label htmlFor='y'>y</label>
      <input
        type='range'
        id='y'
        min={0}
        max={255}
        value={yPosition}
        onChange={(e) => setColorPosition(xPosition, e.target.value)}
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
