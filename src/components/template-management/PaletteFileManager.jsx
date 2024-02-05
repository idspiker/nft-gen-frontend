import PaletteDownloader from './PaletteDownloader';
import PaletteUploader from './PaletteUploader';

export default function PaletteFileManager({
  colorsets,
  placeholderColors,
  setColorsets,
  setPlaceholderColors,
  setNumColors,
}) {
  //TODO fix issue where upload will not work after first upload
  return (
    <div className='gap-l row'>
      <PaletteDownloader
        placeholderColors={placeholderColors}
        colorsets={colorsets}
      />
      <PaletteUploader
        setPlaceholderColors={setPlaceholderColors}
        setColorsets={setColorsets}
        setNumColors={setNumColors}
      />
    </div>
  );
}
