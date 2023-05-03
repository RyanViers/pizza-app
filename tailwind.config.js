/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      maxWidth: {
        'max': 'var(--ion-max-width)'
      },
      colors: {
        'primary': 'var(--ion-color-primary)',
        'primary-tint': 'var(--ion-color-primary-tint)',
        'primary-shade': 'var(--ion-color-primary-shade)',
        'secondary': 'var(--ion-color-secondary)',
        'secondary-tint': 'var(--ion-color-secondary-tint)',
        'secondary-shade': 'var(--ion-color-secondary-shade)',
        'tertiary': 'var(--ion-color-tertiary)',
        'success': 'var(--ion-color-success)',
        'warning': 'var(--ion-color-warning)',
        'danger': 'var(--ion-color-danger)',
        'light': 'var(--ion-color-light)',
        'light-tint': 'var(--ion-color-light-tint)',
        'light-shade': 'var(--ion-color-light-shade)',
        'medium': 'var(--ion-color-medium)',
        'medium-shade': 'var(--ion-color-medium-shade)',
        'medium-tint': 'var(--ion-color-medium-tint)',
        'dark': 'var(--ion-color-dark)',
        'dark-tint': 'var(--ion-color-dark-tint)',
        'dark-shade': 'var(--ion-color-dark-shade)',
        'black': 'var(--ion-color-black)',
        'white': 'var(--ion-color-white)',
      }
    },
  },
  plugins: [],
};
