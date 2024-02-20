import LayerManager from './LayerManager';
import useTemplateManager from './hooks/useTemplateManager';
import ColorsetsManager from './ColorsetsManager';
import { useState } from 'react';
import Panel from './Panel';
import PaletteFileManager from './PaletteFileManager';
import ColorPicker from './ColorPicker';
import TwoDimensionalSlider from './TwoDimensionalSlider';

export default function TemplateManager() {
  const [placeholderColors, setPlaceholderColors] = useState(
    new Array(7).fill({
      red: 255,
      green: 255,
      blue: 255,
    })
  );
  const [colorsets, setColorsets] = useState([]);
  const [layers, addLayer, removeLayer, setLayer] = useTemplateManager();
  const [numColors, setNumColors] = useState(7);

  return (
    <div className='column'>
      <Panel title={'Layers'}>
        <div className='layers-row'>
          {layers.map((layer, index) => (
            <div key={index}>
              <LayerManager
                layerNumber={index}
                layer={layer}
                setLayer={setLayer}
                removeLayer={removeLayer}
              />
            </div>
          ))}
          <button
            onClick={addLayer}
            className='add-item-btn'
            style={{ minHeight: '12rem' }}
          >
            +
          </button>
        </div>
      </Panel>
      <Panel
        title={'Palette'}
        bannerContent={
          <PaletteFileManager
            colorsets={colorsets}
            placeholderColors={placeholderColors}
            setColorsets={setColorsets}
            setPlaceholderColors={setPlaceholderColors}
            setNumColors={setNumColors}
          />
        }
      >
        <ColorsetsManager
          placeholderColors={placeholderColors}
          setPlaceholderColors={setPlaceholderColors}
          colorsets={colorsets}
          setColorsets={setColorsets}
          numColors={numColors}
          setNumColors={setNumColors}
        />
      </Panel>
      <ColorPicker />
      {/* <TwoDimensionalSlider /> */}
    </div>
  );
}
