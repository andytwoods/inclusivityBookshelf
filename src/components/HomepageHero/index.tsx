import React from 'react';

export default function HomepageHero(): React.JSX.Element {
  return (
    <section
      id="top"
      style={{
        display: 'flex',
        minHeight: '420px',
        overflow: 'hidden',
      }}
    >
      {/* Text panel */}
      <div
        style={{
          flex: '1 1 50%',
          background: '#2d6a4f',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '3rem 3rem',
        }}
      >
        <div>
          <h1 style={{ color: '#fff', fontSize: '2.4rem', margin: '0 0 0.75rem', lineHeight: 1.2 }}>
            Inclusivity Bookshelf
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.15rem', margin: '0 0 2rem' }}>
            A simple way to build inclusion
          </p>
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>

      {/* Image panel */}
      <div
        style={{
          flex: '1 1 50%',
          backgroundImage: `url('/bookshelves/rhul_storyfutures_2023_bookshelf.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '300px',
        }}
      />
    </section>
  );
}
