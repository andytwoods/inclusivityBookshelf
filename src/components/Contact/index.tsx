import React from 'react';

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>
      <p>
        <strong>Email:</strong>{' '}
        <a href="mailto:Andy.Woods@rhul.ac.uk">Andy.Woods@rhul.ac.uk</a>
      </p>

      <h3>Privacy</h3>
      <p>This site does not collect analytics or tracking data.</p>
    </section>
  );
}
