import ColorsetManager from './ColorsetManager';
import useColorsetsManager from './hooks/useColorsetsManager';
import PlaceholderColorsManager from './PlaceholderColorsManager';

export default function ColorsetsManager({
  placeholderColors,
  setPlaceholderColors,
  colorsets,
  setColorsets,
  numColors,
  setNumColors,
}) {
  const [getSetColorset, addColorset, removeColorset, addColor, removeColor] =
    useColorsetsManager(
      numColors,
      setNumColors,
      setPlaceholderColors,
      setColorsets
    );

  return (
    <div className='row gap-m padding-s'>
      <PlaceholderColorsManager
        addColor={addColor}
        removeColor={removeColor}
        colors={placeholderColors}
        setColors={setPlaceholderColors}
      />
      <div className='row gap-xs horizontal-scroll'>
        {colorsets.map((colorset, index) => (
          <div>
            <ColorsetManager
              colors={colorset}
              setColors={getSetColorset(index)}
              key={index}
              removeFunc={() => removeColorset(index)}
            />
          </div>
        ))}
      </div>
      <button onClick={addColorset} className='add-item-btn'>
        +
      </button>
    </div>
  );
}
