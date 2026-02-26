import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { bookshelves } from '@site/src/data/bookshelves';
import { universityCoordinates } from '@site/src/data/bookshelf-locations';

function MapComponent() {
  const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');
  const L = require('leaflet');
  require('leaflet/dist/leaflet.css');

  // Fix webpack/Docusaurus breaking Leaflet's default marker icon paths
  delete (L.Icon.Default.prototype as any)._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  });

  // Group bookshelves by university
  const byUniversity = bookshelves.reduce<Record<string, typeof bookshelves>>(
    (acc, shelf) => {
      (acc[shelf.university] ??= []).push(shelf);
      return acc;
    },
    {}
  );

  const markers = Object.entries(byUniversity)
    .filter(([uni]) => universityCoordinates[uni])
    .map(([uni, shelves]) => {
      const [lat, lng] = universityCoordinates[uni];
      return (
        <Marker key={uni} position={[lat, lng]}>
          <Popup>
            <strong>{uni}</strong>
            <ul style={{ margin: '0.4rem 0 0', paddingLeft: '1.2rem' }}>
              {shelves.map(s => (
                <li key={s.src}>{s.department} ({s.year})</li>
              ))}
            </ul>
          </Popup>
        </Marker>
      );
    });

  return (
    <MapContainer
      center={[54.5, -3]}
      zoom={5}
      style={{ height: '420px', borderRadius: '8px' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers}
    </MapContainer>
  );
}

export default function BookshelfMap(): React.JSX.Element {
  return (
    <section id="map" aria-labelledby="map-heading">
      <h2 id="map-heading">Where are they?</h2>
      <BrowserOnly
        fallback={
          <div style={{ height: '420px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--ifm-color-emphasis-100)', borderRadius: '8px' }}>
            Loading map…
          </div>
        }
      >
        {() => <MapComponent />}
      </BrowserOnly>
    </section>
  );
}
