import { useEffect, useState } from 'react';

/* 
TODO:
  - Fix inconsitant ranges in sliders
  - Add x position functionality
*/

export default function useColorPicker(
  initialSliderPosition,
  initialXPosition,
  initialYPosition
) {
  const [sliderPosition, setSliderPosition] = useState(initialSliderPosition);
  const [xPosition, setXPosition] = useState(initialXPosition);
  const [yPosition, setYPosition] = useState(initialYPosition);

  // Make this be calculated from initial positions
  const [red, setRed] = useState(255);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  function setColor(sliderPosition, xPosition, yPosition) {
    const constantValMax = 255;

    const numPositions = constantValMax * 6;
    const convertedSliderPosition = Math.floor(
      (sliderPosition / 1530) * numPositions
    );

    let rgb = [0, 0, 0];
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

    rgb = rgb.map((shadeAmount, index) => {
      if (index === constantIndex) return shadeAmount;

      return Math.round(
        (255 - shadeAmount) * ((255 - xPosition) / 255) + shadeAmount
      );
    });

    rgb = rgb.map((shadeAmount) => Math.round(shadeAmount * (yPosition / 255)));

    setSliderPosition(sliderPosition);
    setXPosition(xPosition);
    setYPosition(yPosition);
    setRed(rgb[0]);
    setBlue(rgb[1]);
    setGreen(rgb[2]);
  }

  return [sliderPosition, xPosition, yPosition, red, green, blue, setColor];
}
