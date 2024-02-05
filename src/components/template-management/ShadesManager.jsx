import ColorField from './ColorField';

export default function ShadesManager({ isCollapsed, colors, setColors }) {
  function getColorSetter(colorNumber) {
    return function (newColor) {
      setColors((colors) => [
        ...colors.slice(0, colorNumber),
        typeof newColor === 'function'
          ? newColor(colors[colorNumber])
          : newColor,
        ...colors.slice(colorNumber + 1),
      ]);
    };
  }

  return (
    <div className='colorset'>
      {colors.map((color, index) => (
        <ColorField
          color={color}
          setColor={getColorSetter(index)}
          key={index}
          isCollapsed={isCollapsed}
        />
      ))}
    </div>
  );
}
