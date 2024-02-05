import { useId } from 'react';
import upload from '../../res/upload.svg';

export default function ImageSelector({ setImages }) {
  const id = useId();

  function handleChoiceChange(e) {
    setImages(Array.from(e.target.files));
  }

  return (
    <div
      className='row gap-s justify-right fill-width'
      style={{ width: '13.5rem' }}
    >
      <h4 className='color-light-gray'>Select Images</h4>
      <label htmlFor={id}>
        <img src={upload} className={'icon-m lightup-on-hover'} />
      </label>
      <input
        id={id}
        className='hidden'
        type='file'
        name='images'
        accept='image/png'
        multiple
        onChange={handleChoiceChange}
      />
    </div>
  );
}
