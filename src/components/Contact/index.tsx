import React from 'react';

export default function Contact(): React.JSX.Element {
  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>
      <p>
        It would be lovely to hear from you -- whether you are thinking on starting
        a bookshelf, have one already running, or just want to know more.
      </p>
      <p>
        <strong>Email:</strong> Andy dot Woods at rhul dot ac dot uk
      </p>

      <h3>Privacy</h3>
      <p>This site does not collect analytics or tracking data.</p>
    </section>
  );
}
