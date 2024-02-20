export default function TwoDimensionalSlider() {
  function handlePointDrag(e) {
    e.dataTransfer.dropEffect = 'move';
  }

  return (
    <div className='two-dimensional-slider'>
      <div
        className='two-dimensional-slider-point'
        onDrag={handlePointDrag}
        draggable={true}
      />
    </div>
  );
}
