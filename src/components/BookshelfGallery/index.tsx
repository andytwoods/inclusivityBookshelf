import React, { useState } from 'react';
import { bookshelves, type Bookshelf } from '@site/src/data/bookshelves';

function Lightbox({ item, onClose }: { item: Bookshelf; onClose: () => void }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.85)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        cursor: 'zoom-out', padding: '1.5rem',
      }}
    >
      <img
        src={item.src}
        alt={`${item.department} bookshelf, ${item.university}, ${item.year}`}
        style={{ maxWidth: '90vw', maxHeight: '80vh', borderRadius: '8px', objectFit: 'contain' }}
      />
      <p style={{ color: '#fff', marginTop: '1rem', textAlign: 'center' }}>
        <strong>{item.department}</strong> — {item.university}, {item.year}
      </p>
      <p style={{ color: '#aaa', fontSize: '0.85rem', margin: 0 }}>Click anywhere to close</p>
    </div>
  );
}

export default function BookshelfGallery(): React.JSX.Element {
  const [active, setActive] = useState<Bookshelf | null>(null);

  return (
    <section>
      <h2>Bookshelves in the Wild</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {bookshelves.map((item) => (
          <figure
            key={item.src}
            onClick={() => setActive(item)}
            style={{ margin: 0, textAlign: 'center', maxWidth: '260px', cursor: 'zoom-in' }}
          >
            <img
              src={item.src}
              alt={`${item.department} bookshelf, ${item.university}, ${item.year}`}
              style={{
                width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px',
                transition: 'opacity 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            />
            <figcaption style={{ marginTop: '0.5rem' }}>
              <strong>{item.department}</strong><br />
              {item.university}<br />
              {item.year}
            </figcaption>
          </figure>
        ))}
      </div>

      {active && <Lightbox item={active} onClose={() => setActive(null)} />}
    </section>
  );
}
