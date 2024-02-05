import { useEffect, useState } from 'react';

export default function ImagesPreview({ images }) {
  const [previews, setPreviews] = useState([]);

  function toDataUrl(image) {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.onload = () => resolve(fileReader.result);
      fileReader.onerror = () => reject(fileReader.error);

      fileReader.readAsDataURL(image);
    });
  }

  function toGrid(images) {
    let grid = [];
    images.forEach((element, index) => {
      if (index % 3 === 0) {
        grid.push([element]);
      } else {
        grid[grid.length - 1].push(element);
      }
    });

    return grid;
  }

  useEffect(() => {
    Promise.all(images.map(toDataUrl)).then(toGrid).then(setPreviews);
  }, [images]);

  return (
    <div>
      {previews.length === 0 ? (
        <div className='image-preview-list-empty'>
          <p>No Images Selected</p>
        </div>
      ) : (
        <ul className='image-preview-list'>
          {previews.map((row, index) => (
            <li key={index}>
              <ul className='image-preview-row-list'>
                {row.map((image, imageIndex) => (
                  <li key={imageIndex}>
                    <img src={image} className='image-preview' />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
