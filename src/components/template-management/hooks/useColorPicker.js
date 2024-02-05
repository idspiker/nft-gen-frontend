import { useState } from 'react';

export default function useColorPicker() {
  const [redMinX, setRedMinX] = useState(255);
  const [greenMinX, setGreenMinX] = useState(0);
  const [blueMinX, setBlueMinX] = useState(0);

  function setMinXSliderPosition(
    sliderPosition /* Number between 0 and 1530 */
  ) {
    const rgb = [0, 0, 0];
    const sectorNumber = Math.floor(sliderPosition / 255);
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

    const change = sliderPosition % 255;

    const newValue = sectorIsEven ? change : 255 - change;

    rgb[changeIndex] = newValue;
    rgb[constantIndex] = 255;

    setRedMinX(rgb[0]);
    setGreenMinX(rgb[1]);
    setBlueMinX(rgb[2]);
  }

  return [setMinXSliderPosition, redMinX, greenMinX, blueMinX];
}
