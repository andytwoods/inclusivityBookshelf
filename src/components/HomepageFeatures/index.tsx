import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    title: 'Low Cost',
    description: 'text',
  },
  {
    title: 'High Visibility',
    description: 'text',
  },
  {
    title: 'Community Ownership',
    description: 'text',
  },
  {
    title: 'Proven Impact',
    description: 'text',
  },
];

function FeatureCard({title, description}: FeatureItem): React.JSX.Element {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section aria-labelledby="why-heading">
      <h2 id="why-heading">Why Inclusivity Bookshelves?</h2>
      <p>text</p>
      <div className="card-grid">
        {features.map((feature, idx) => (
          <FeatureCard key={idx} {...feature} />
        ))}
      </div>
    </section>
  );
}
