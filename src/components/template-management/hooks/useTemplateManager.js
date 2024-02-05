import { useState } from 'react';

export default function useTemplateManager() {
  const [layers, setLayers] = useState([]);

  function addLayer() {
    setLayers((layers) => [...layers, []]);
  }

  function removeLayer(layerNumber) {
    setLayers((layers) => [
      ...layers.slice(0, layerNumber),
      ...layers.slice(layerNumber + 1),
    ]);
  }

  function setLayer(layerNumber, newContent) {
    setLayers((layers) => [
      ...layers.slice(0, layerNumber),
      newContent,
      ...layers.slice(layerNumber + 1),
    ]);
  }

  return [layers, addLayer, removeLayer, setLayer];
}
