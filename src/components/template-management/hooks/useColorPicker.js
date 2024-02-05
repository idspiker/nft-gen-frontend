import { useEffect, useState } from 'react';

/* 
TODO:
  - Fix inconsitant ranges in sliders
  - Add x position functionality
*/

export default function useColorPicker(
  initialMinSliderPosition,
  initialXPosition,
  initialYPosition
) {
  const [minXSliderPosition, setMinXSliderPosition] = useState(
    initialMinSliderPosition
  );
  const [xPosition, setXPosition] = useState(initialXPosition);
  const [yPosition, setYPosition] = useState(initialYPosition);

  const [redMinX, setRedMinX] = useState(255);
  const [greenMinX, setGreenMinX] = useState(0);
  const [blueMinX, setBlueMinX] = useState(0);

  const [red, setRed] = useState(255);
  const [blue, setBlue] = useState(255);
  const [green, setGreen] = useState(255);

  const [constantValMax, setConstantValMax] = useState(initialYPosition);

  function setMinXSlider(sliderPosition /* Number between 0 and 1530 */) {
    const numPositions = constantValMax * 6;
    const convertedSliderPosition = Math.floor(
      (sliderPosition / 1530) * numPositions
    );

    const rgb = [0, 0, 0];
    const sectorNumber = Math.floor(convertedSliderPosition / constantValMax);
    const sectorIsEven = sectorNumber % 2 === 0;

    const changeIndex =
      sectorNumber === 0
        ? 2
        : 3 - sectorNumber >= 0
        ? 2 - (3 - sectorNumber)
        : Math.abs(2 - Math.abs(3 - sectorNumber) - 1);

    // const constantIndex = changeIndex >= 1 ? changeIndex - 1 : changeIndex + 2;

    const constantIndex = sectorIsEven
      ? changeIndex <= 1
        ? changeIndex + 1
        : changeIndex - 2
      : changeIndex >= 1
      ? changeIndex - 1
      : changeIndex + 2;

    const change = convertedSliderPosition % constantValMax;

    const newValue = sectorIsEven ? change : constantValMax - change;

    rgb[changeIndex] = newValue;
    rgb[constantIndex] = constantValMax;

    setRedMinX(rgb[0]);
    setGreenMinX(rgb[1]);
    setBlueMinX(rgb[2]);
    setMinXSliderPosition(sliderPosition);
  }

  function setColorPosition(x, y) {
    // y position handles the max values when related to the slider (not always 255)
    // x position handles the min values of the two values not effected by minX

    setXPosition(x);

    setYPosition(y);
    setConstantValMax(y);
    setMinXSlider(minXSliderPosition);
  }

  return [
    minXSliderPosition,
    xPosition,
    yPosition,
    setMinXSlider,
    setColorPosition,
    redMinX,
    greenMinX,
    blueMinX,
  ];
}
