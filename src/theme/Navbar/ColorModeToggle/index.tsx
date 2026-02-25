import React from 'react';
import type ColorModeToggleType from '@theme/Navbar/ColorModeToggle';
import type {WrapperProps} from '@docusaurus/types';
import AccessibilityWidget from '@site/src/components/AccessibilityWidget';

type Props = WrapperProps<typeof ColorModeToggleType>;

export default function ColorModeToggleWrapper(_props: Props): React.JSX.Element {
  return <AccessibilityWidget />;
}
