export default function useColorsetsManager(
  numColors,
  setNumColors,
  setPlaceholderColors,
  setColorsets
) {
  function getSetColorset(colorsetNumber) {
    return function setColorset(newColorset) {
      setColorsets((colorsets) => [
        ...colorsets.slice(0, colorsetNumber),
        typeof newColorset === 'function'
          ? newColorset(colorsets[colorsetNumber])
          : newColorset,
        ...colorsets.slice(colorsetNumber + 1),
      ]);
    };
  }

  function addColorset() {
    setColorsets((colorsets) => colorsets.concat([newColorset(numColors)]));
  }

  function removeColorset(colorsetNumber) {
    setColorsets((colorsets) => [
      ...colorsets.slice(0, colorsetNumber),
      ...colorsets.slice(colorsetNumber + 1),
    ]);
  }

  function addColor() {
    setNumColors((n) => n + 1);

    setColorsets((colorsets) =>
      colorsets.map((colorset) =>
        colorset.concat({
          red: 255,
          green: 255,
          blue: 255,
        })
      )
    );

    setPlaceholderColors((phc) =>
      phc.concat({
        red: 255,
        green: 255,
        blue: 255,
      })
    );
  }

  function removeColor(colorNumber) {
    if (colorNumber < 0 || colorNumber > numColors)
      throw new Error('color out of range');

    setColorsets((colorsets) =>
      colorsets.map((colorset) => [
        ...colorset.slice(0, colorNumber),
        ...colorset.slice(colorNumber + 1),
      ])
    );

    setPlaceholderColors((phc) => [
      ...phc.slice(0, colorNumber),
      ...phc.slice(colorNumber + 1),
    ]);

    setNumColors((n) => n - 1);
  }

  function newColorset(numColors) {
    return new Array(numColors).fill({
      red: 255,
      green: 255,
      blue: 255,
    });
  }

  return [
    getSetColorset,
    addColorset,
    removeColorset,
    addColor,
    removeColor,
    setNumColors,
  ];
}
