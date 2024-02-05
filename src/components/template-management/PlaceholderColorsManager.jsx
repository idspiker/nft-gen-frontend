import { useState } from 'react';
import ShadesManager from './ShadesManager';

export default function PlaceholderColorsManager({
  colors,
  setColors,
  addColor,
  removeColor,
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className='row bg-medium-gray'>
      <div className='row'>
        <div className='column'>
          <div className='row'>
            <div className='column' style={{ justifyContent: 'space-evenly' }}>
              {colors.map((v, i) => (
                <button
                  className='color-remove-btn lightup-on-hover'
                  onClick={() => removeColor(i)}
                  key={v + i}
                >
                  -
                </button>
              ))}
            </div>
            <ShadesManager
              isCollapsed={isCollapsed}
              colors={colors}
              setColors={setColors}
            />
          </div>
          <div className='row'>
            <button
              className='colorset-btn lightup-on-hover'
              onClick={addColor}
            >
              +
            </button>
          </div>
        </div>
        <button
          className='shades-collapse-btn lightup-on-hover'
          onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
        >
          {isCollapsed ? '>' : '<'}
        </button>
      </div>
    </div>
  );
}
