import upload from '../../res/upload.svg';

export default function PaletteUploader({
  setPlaceholderColors,
  setColorsets,
  setNumColors,
}) {
  function handlePaletteUpload(e) {
    const file = e.target.files[0];

    toJSON(file).then((result) => {
      setPlaceholderColors(result.placeholderColors);
      setColorsets(result.colorsets);
      setNumColors(result.placeholderColors.length);
    });
  }

  function toJSON(file) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = () => resolve(JSON.parse(fileReader.result));
      fileReader.onerror = () => reject(fileReader.error);

      fileReader.readAsText(file);
    });
  }

  return (
    <div className='row gap-s palette-management'>
      <h4>Upload palette .json file</h4>
      <div>
        <label htmlFor='file-upload'>
          <img
            className='icon-m lightup-on-hover'
            src={upload}
            alt={'upload file'}
          />
        </label>
        <input
          id='file-upload'
          type='file'
          className='hidden'
          accept='application/JSON'
          onChange={handlePaletteUpload}
        />
      </div>
    </div>
  );
}
