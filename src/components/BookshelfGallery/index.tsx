import React, { useState, useEffect, useRef } from 'react';
import { bookshelves, type Bookshelf } from '@site/src/data/bookshelves';

const FOCUSABLE = 'button, [href], [tabindex]:not([tabindex="-1"])';

function Lightbox({ item, onClose, triggerEl }: {
  item: Bookshelf;
  onClose: () => void;
  triggerEl: HTMLElement | null;
}) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Focus close button on open; restore focus to trigger on close
  useEffect(() => {
    closeRef.current?.focus();
    return () => { triggerEl?.focus(); };
  }, [triggerEl]);

  // Escape key + focus trap
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <>
      {/* Backdrop — decorative, click to close */}
      <div
        aria-hidden="true"
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          background: 'rgba(0,0,0,0.85)', cursor: 'zoom-out',
        }}
      />
      {/* Dialog */}
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-caption"
        style={{
          position: 'fixed', zIndex: 10000,
          top: '50%', left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          padding: '1.5rem', maxWidth: '95vw',
        }}
      >
        <img
          src={item.src}
          alt={`Enlarged: ${item.department} bookshelf, ${item.university}, ${item.year}`}
          style={{ maxWidth: '90vw', maxHeight: '75vh', borderRadius: '8px', objectFit: 'contain' }}
        />
        <p
          id="lightbox-caption"
          style={{ color: '#fff', textAlign: 'center', margin: '1rem 0 0.75rem' }}
        >
          <strong>{item.department}</strong> — {item.university}, {item.year}
        </p>
        <button
          ref={closeRef}
          onClick={onClose}
          style={{
            background: 'transparent', border: '2px solid #fff', color: '#fff',
            padding: '0.4rem 1.25rem', borderRadius: '4px',
            cursor: 'pointer', fontSize: '0.9rem',
          }}
        >
          Close <span aria-hidden="true">(or press Esc)</span>
        </button>
      </div>
    </>
  );
}

export default function BookshelfGallery(): React.JSX.Element {
  const [active, setActive] = useState<{ item: Bookshelf; trigger: HTMLElement } | null>(null);

  return (
    <section>
      <h2>Bookshelves in the Wild</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
        {bookshelves.map((item) => (
          <figure
            key={item.src}
            tabIndex={0}
            role="button"
            aria-label={`View larger image: ${item.department} bookshelf, ${item.university}, ${item.year}`}
            className="bookshelf-thumb"
            onClick={e => setActive({ item, trigger: e.currentTarget })}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setActive({ item, trigger: e.currentTarget });
              }
            }}
            style={{ margin: 0, textAlign: 'center', maxWidth: '260px', cursor: 'zoom-in' }}
          >
            {/* aria-hidden: the figure's aria-label is the accessible name */}
            <img
              src={item.src}
              alt=""
              aria-hidden="true"
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '6px' }}
            />
            <figcaption style={{ marginTop: '0.5rem' }}>
              <strong>{item.department}</strong><br />
              {item.university}<br />
              {item.year}
            </figcaption>
          </figure>
        ))}
      </div>

      {active && (
        <Lightbox
          item={active.item}
          onClose={() => setActive(null)}
          triggerEl={active.trigger}
        />
      )}
    </section>
  );
}
