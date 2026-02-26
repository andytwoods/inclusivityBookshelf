import React, { useState } from 'react';

const DRAFT_EMAIL = [
  'Dear [Name],',
  '',
  "I'd like to propose that our department get an Inclusivity Bookshelf in one of our shared spaces.",
  '',
  'It typically costs around £100 to start (buying books second-hand to reduce waste), and it lives in a communal area, so it\'s naturally noticed. It sparks discussion and helps us level up in terms of inclusion.',
  '',
  'You can see the idea here: https://inclusivitybookshelf.com/',
  '',
  'Would you be open to allocating a small seed budget of £100 so we can set one up?',
  '',
  'Best wishes,',
  '',
  '[Your name]',
].join('\n');

export default function WhyGoodIdea(): React.JSX.Element {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(DRAFT_EMAIL).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <section id="why-good-idea" aria-labelledby="why-good-idea-heading">
      <h2 id="why-good-idea-heading">Why this is a good idea</h2>
      <ul>
        <li>Simple and low cost to set up</li>
        <li>Lives in shared spaces, so is noticed</li>
        <li>Sparks conversations and recommendations</li>
        <li>Grows organically through donations and interest</li>
        <li>Looks good when guests come around (ugh)</li>
        <li>There is pride about the bookshelf</li>
        <li>Self replicants, von-Neumann style</li>
        <li>We make the world a tiny tiny bit better</li>
      </ul>

      <section id="draft-email" aria-labelledby="draft-email-heading">
        <h2 id="draft-email-heading">Draft email (copy/paste)</h2>
        <p>
          Feel free to copy, paste, and edit:{' '}
          <button
            onClick={handleCopy}
            aria-label={copied ? 'Email template copied' : 'Copy email template'}
            style={{
              background: 'none',
              border: '1px solid currentColor',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '0.75rem',
              padding: '0.1rem 0.5rem',
              opacity: 0.7,
              verticalAlign: 'middle',
            }}
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </p>
        <pre aria-label="Draft email template">{DRAFT_EMAIL}</pre>
      </section>
    </section>
  );
}
