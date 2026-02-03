import React from 'react';

export default function HomepageHero(): React.JSX.Element {
  return (
    <section className="hero-section" id="top">
      <div className="container">
        <h1>Inclusivity Bookshelves in Every Department</h1>
        <p>A simple way to build inclusion</p>
        <div className="hero-actions">
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
