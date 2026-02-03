import React from 'react';
import ColorModeToggle from '@theme-original/Navbar/ColorModeToggle';
import type ColorModeToggleType from '@theme/Navbar/ColorModeToggle';
import type {WrapperProps} from '@docusaurus/types';
import AccessibilityWidget from '@site/src/components/AccessibilityWidget';

type Props = WrapperProps<typeof ColorModeToggleType>;

export default function ColorModeToggleWrapper(props: Props): React.JSX.Element {
  return (
    <>
      <AccessibilityWidget />
      <ColorModeToggle {...props} />
    </>
  );
}
