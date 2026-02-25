import React, { useState, useEffect, useRef } from 'react';
import { useColorMode } from '@docusaurus/theme-common';
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

const FOCUSABLE = 'button, [href], input, [tabindex]:not([tabindex="-1"])';

export default function AccessibilityWidget(): React.JSX.Element {
  const { colorMode, setColorMode } = useColorMode();
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

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

  // When panel opens: focus close button. When it closes: return focus to trigger.
  useEffect(() => {
    if (isOpen) {
      closeRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  // Close on outside click, Escape key, and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setIsOpen(false); return; }
      if (e.key === 'Tab' && panelRef.current) {
        const focusable = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)
        );
        if (!focusable.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const applySettings = (newSettings: AccessibilitySettings) => {
    const html = document.documentElement;
    html.classList.remove(
      'a11y-contrast-low', 'a11y-contrast-high',
      'a11y-text-large', 'a11y-text-extra-large',
      'a11y-motion-reduced'
    );
    if (newSettings.contrast === 'low') html.classList.add('a11y-contrast-low');
    else if (newSettings.contrast === 'high') html.classList.add('a11y-contrast-high');
    if (newSettings.textSize === 'large') html.classList.add('a11y-text-large');
    else if (newSettings.textSize === 'extra-large') html.classList.add('a11y-text-extra-large');
    if (newSettings.motion === 'reduced') html.classList.add('a11y-motion-reduced');
  };

  const updateSetting = <K extends keyof AccessibilitySettings>(
    key: K, value: AccessibilitySettings[K]
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
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setColorMode(prefersDark ? 'dark' : 'light');
  };

  return (
    <div className={styles.widget} ref={panelRef}>
      <button
        ref={triggerRef}
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        Accessibility
      </button>

      {isOpen && (
        <div
          id="accessibility-panel"
          className={styles.panel}
          role="dialog"
          aria-modal="true"
          aria-label="Accessibility settings"
        >
          <div className={styles.header}>
            <h2 className={styles.title}>Accessibility</h2>
            <button
              ref={closeRef}
              className={styles.close}
              onClick={() => setIsOpen(false)}
              aria-label="Close accessibility options"
            >
              &times;
            </button>
          </div>

          <div className={styles.content}>
            <p className={styles.description}>
              Adjust how this site looks to suit your needs.
            </p>

            <fieldset className={styles.section}>
              <legend className={styles.sectionTitle}>Contrast</legend>
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
            </fieldset>

            <fieldset className={styles.section}>
              <legend className={styles.sectionTitle}>Text Size</legend>
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
            </fieldset>

            <fieldset className={styles.section}>
              <legend className={styles.sectionTitle}>Motion</legend>
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
            </fieldset>

            <fieldset className={styles.section}>
              <legend className={styles.sectionTitle}>Colour Scheme</legend>
              <div className={styles.options}>
                {(['light', 'dark'] as const).map((mode) => (
                  <label key={mode} className={styles.option}>
                    <input
                      type="radio"
                      name="colorScheme"
                      value={mode}
                      checked={colorMode === mode}
                      onChange={() => setColorMode(mode)}
                    />
                    <span className={styles.optionLabel}>
                      {mode.charAt(0).toUpperCase() + mode.slice(1)}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            <button className={styles.reset} onClick={resetSettings}>
              Reset to defaults
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
