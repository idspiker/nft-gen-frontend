import { useEffect, useState, useRef } from 'react';
import download from '../../res/download.svg';

export default function PaletteDownloader({ placeholderColors, colorsets }) {
  const downloadLink = useRef(null);
  const [downloadName, setDownloadName] = useState('NewPalette');

  useEffect(() => {
    const data = {
      placeholderColors,
      colorsets,
    };

    const dataBlob = new Blob([JSON.stringify(data)]);

    const url = URL.createObjectURL(dataBlob);

    downloadLink.current.setAttribute('href', url);
  }, [placeholderColors, colorsets]);

  function handleDownloadNameChange(e) {
    setDownloadName(e.target.value);
    downloadLink.current.setAttribute('download', downloadName + '.json');
  }

  return (
    <div className='palette-management gap-s row'>
      <h4>Download palette</h4>
      <input
        className='input-text'
        value={downloadName}
        onChange={handleDownloadNameChange}
      />
      <a
        className='a-icon'
        ref={downloadLink}
        download={downloadName + '.json'}
      >
        <img
          className='icon-m lightup-on-hover'
          src={download}
          alt={'download-palette'}
        />
      </a>
    </div>
  );
}
