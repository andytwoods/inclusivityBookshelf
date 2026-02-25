import React from 'react';

export default function HomepageHero(): React.JSX.Element {
  return (
    <section
      id="top"
      style={{
        display: 'flex',
        minHeight: '380px',
        overflow: 'hidden',
      }}
    >
      {/* Left photo — decorative */}
      <div
        aria-hidden="true"
        role="presentation"
        style={{
          flex: '1 1 30%',
          backgroundImage: `url('/bookshelves/rhul_storyfutures_2023_bookshelf.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '260px',
        }}
      />

      {/* Centre text */}
      <div
        className="hero-centre"
        style={{
          flex: '0 0 auto',
          width: 'clamp(260px, 36%, 480px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '3rem 2rem',
          background: 'var(--ifm-background-color)',
          zIndex: 1,
          boxShadow: '0 0 40px rgba(0,0,0,0.18)',
        }}
      >
        <h1 style={{ fontSize: '2rem', margin: '0 0 0.6rem', lineHeight: 1.25 }}>
          Inclusivity Bookshelf
        </h1>
        <p style={{ margin: '0 0 1.75rem', opacity: 0.75 }}>
          A simple way to build inclusion
        </p>
        <a href="#contact" className="btn btn-primary">
          Get in Touch
        </a>
      </div>

      {/* Right photo — decorative, hidden on small screens */}
      <div
        aria-hidden="true"
        role="presentation"
        className="hero-photo-right"
        style={{
          flex: '1 1 30%',
          backgroundImage: `url('/bookshelves/rhul_physics_2026_bookshelf.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '260px',
        }}
      />
    </section>
  );
}
