import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

type ContrastMode = 'standard' | 'low' | 'high';
type TextSize = 'standard' | 'large' | 'extra-large';
type MotionMode = 'standard' | 'reduced';

interface AccessibilitySettings {
  contrast: ContrastMode;
  textSize: TextSize;
  motion: MotionMode;
}

const defaultSettings: AccessibilitySettings = {
  contrast: 'standard',
  textSize: 'standard',
  motion: 'standard',
};

export default function AccessibilityWidget(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);

  // Load settings from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('accessibility-settings');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setSettings(parsed);
        applySettings(parsed);
      } catch {
        // Ignore invalid JSON
      }
    }
  }, []);

  // Apply settings to document
  const applySettings = (newSettings: AccessibilitySettings) => {
    const html = document.documentElement;

    // Remove existing classes
    html.classList.remove(
      'a11y-contrast-low',
      'a11y-contrast-high',
      'a11y-text-large',
      'a11y-text-extra-large',
      'a11y-motion-reduced'
    );

    // Apply new classes
    if (newSettings.contrast === 'low') {
      html.classList.add('a11y-contrast-low');
    } else if (newSettings.contrast === 'high') {
      html.classList.add('a11y-contrast-high');
    }

    if (newSettings.textSize === 'large') {
      html.classList.add('a11y-text-large');
    } else if (newSettings.textSize === 'extra-large') {
      html.classList.add('a11y-text-extra-large');
    }

    if (newSettings.motion === 'reduced') {
      html.classList.add('a11y-motion-reduced');
    }
  };

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K,
    value: AccessibilitySettings[K]
  ) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    localStorage.setItem('accessibility-settings', JSON.stringify(newSettings));
  };

  const resetSettings = () => {
    setSettings(defaultSettings);
    applySettings(defaultSettings);
    localStorage.removeItem('accessibility-settings');
  };

  return (
    <div className={styles.widget}>
      <button
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
        aria-label="Accessibility options"
      >
        <svg
          className={styles.icon}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="4.5" r="2.5" />
          <path d="M12 7v10" />
          <path d="M6.5 9.5L12 12l5.5-2.5" />
          <path d="M8 21l4-4 4 4" />
        </svg>
        <span className={styles.triggerText}>Accessibility</span>
      </button>

      {isOpen && (
        <div
          id="accessibility-panel"
          className={styles.panel}
          role="dialog"
          aria-label="Accessibility settings"
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Accessibility Options</h2>
            <button
              className={styles.close}
              onClick={() => setIsOpen(false)}
              aria-label="Close accessibility options"
            >
              &times;
            </button>
          </div>

          <p className={styles.description}>
            These options can change the way this website looks, which may help you to use it more easily.
          </p>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Contrast</h3>
            <div className={styles.options}>
              {(['standard', 'low', 'high'] as ContrastMode[]).map((mode) => (
                <label key={mode} className={styles.option}>
                  <input
                    type="radio"
                    name="contrast"
                    value={mode}
                    checked={settings.contrast === mode}
                    onChange={() => updateSetting('contrast', mode)}
                  />
                  <span className={styles.optionLabel}>
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Text Size</h3>
            <div className={styles.options}>
              {([
                { value: 'standard', label: 'Standard' },
                { value: 'large', label: 'Large' },
                { value: 'extra-large', label: 'Extra Large' },
              ] as { value: TextSize; label: string }[]).map(({ value, label }) => (
                <label key={value} className={styles.option}>
                  <input
                    type="radio"
                    name="textSize"
                    value={value}
                    checked={settings.textSize === value}
                    onChange={() => updateSetting('textSize', value)}
                  />
                  <span className={styles.optionLabel}>{label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Motion</h3>
            <div className={styles.options}>
              {(['standard', 'reduced'] as MotionMode[]).map((mode) => (
                <label key={mode} className={styles.option}>
                  <input
                    type="radio"
                    name="motion"
                    value={mode}
                    checked={settings.motion === mode}
                    onChange={() => updateSetting('motion', mode)}
                  />
                  <span className={styles.optionLabel}>
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </div>

          <button className={styles.reset} onClick={resetSettings}>
            Reset to defaults
          </button>
        </div>
      )}
    </div>
  );
}
