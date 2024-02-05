import { useState } from 'react';
import ShadesManager from './ShadesManager';

export default function ColorsetManager({ colors, setColors, removeFunc }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div className='row bg-medium-gray'>
      <div className='column'>
        <ShadesManager
          isCollapsed={isCollapsed}
          colors={colors}
          setColors={setColors}
        />
        <button
          className='colorset-remove-btn lightup-on-hover'
          onClick={removeFunc}
        >
          -
        </button>
      </div>
      <button
        className='shades-collapse-btn lightup-on-hover'
        onClick={() => setIsCollapsed((isCollapsed) => !isCollapsed)}
      >
        {isCollapsed ? '>' : '<'}
      </button>
    </div>
  );
}
