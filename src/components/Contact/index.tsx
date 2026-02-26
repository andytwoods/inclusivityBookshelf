import React, { useState, useEffect } from 'react';

// Base64-encoded email — keeps the raw address out of the HTML and JS bundle strings.
// To update: btoa('your@email.com') in a browser console.
const ENCODED = 'QW5keS5Xb29kc0ByaHVsLmFjLnVr';

export default function Contact(): React.JSX.Element {
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(atob(ENCODED));
  }, []);

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>
      <p>
        <strong>Email:</strong>{' '}
        {email
          ? <a href={`mailto:${email}`}>{email}</a>
          : <span aria-label="Email address loading">—</span>
        }
      </p>

      <h3>Privacy</h3>
      <p>This site does not collect analytics or tracking data.</p>
    </section>
  );
}
