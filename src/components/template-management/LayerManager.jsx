import ImageSelector from './ImageSelector';
import ImagesPreview from './ImagesPreview';

export default function LayerManager({
  layerNumber,
  layer,
  setLayer,
  removeLayer,
}) {
  function setImages(newImages) {
    setLayer(layerNumber, newImages);
  }

  function handleDelete() {
    if (window.confirm('Are you sure that you want to delete this layer?')) {
      removeLayer(layerNumber);
    }
  }

  return (
    <div draggable={true} className='padding-xs bg-medium-gray layer-manager'>
      <button className='remove-layer-btn color-white' onClick={handleDelete}>
        -
      </button>
      <div className='row justify-left'>
        <h3 className='color-white'>{`Layer ${layerNumber}`}</h3>
      </div>
      <ImageSelector setImages={setImages} />
      <ImagesPreview images={layer} />
    </div>
  );
}
