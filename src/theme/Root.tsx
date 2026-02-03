import React from 'react';
import AccessibilityWidget from '@site/src/components/AccessibilityWidget';

interface Props {
  children: React.ReactNode;
}

export default function Root({ children }: Props): React.JSX.Element {
  return (
    <>
      {children}
      <AccessibilityWidget />
    </>
  );
}
