import { useState } from 'react';

export default function ColorField({ color, setColor, isCollapsed }) {
  const [hexCode, setHexCode] = useState(rgbToHex(color));

  function onHexChange(e) {
    const hex = e.target.value;

    setHexCode(hex);

    if (hex.length != 6) {
      return;
    }

    const rgb = {
      red: parseInt(hex.substring(0, 2), 16),
      green: parseInt(hex.substring(2, 4), 16),
      blue: parseInt(hex.substring(4, 6), 16),
    };

    setColor(rgb);
  }

  function getOnRGBChange(colorPart) {
    return function (e) {
      const colorCopy = { ...color };
      colorCopy[colorPart] = parseInt(e.target.value);
      setColor(colorCopy);
      setHexCode(rgbToHex(colorCopy));
    };
  }

  function rgbToHex(rgb) {
    return (
      decimalToHexString(rgb.red) +
      decimalToHexString(rgb.green) +
      decimalToHexString(rgb.blue)
    );
  }

  function decimalToHexString(decimal) {
    return (decimal < 10 ? '0' : '') + decimal.toString(16);
  }

  return (
    <div className='color-field-container'>
      <div
        className='color-preview'
        style={{
          backgroundColor: `rgb(${color.red}, ${color.green}, ${color.blue})`,
        }}
      />
      {isCollapsed ? (
        ''
      ) : (
        <div className='color-field-collapse'>
          <div>
            #
            <input
              type='text'
              value={hexCode}
              onChange={onHexChange}
              className='color-text-field'
            />
          </div>
          <div>
            {'rgb('}
            <input
              type='text'
              value={color.red}
              onChange={getOnRGBChange('red')}
              className='color-text-field'
            />
            ,
            <input
              type='text'
              value={color.green}
              onChange={getOnRGBChange('green')}
              className='color-text-field'
            />
            ,
            <input
              type='text'
              value={color.blue}
              onChange={getOnRGBChange('blue')}
              className='color-text-field'
            />
            {')'}
          </div>
        </div>
      )}
    </div>
  );
}
