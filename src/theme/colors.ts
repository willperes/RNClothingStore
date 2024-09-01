const palette = {
  primary100: '#8E6CEF',
};

const lightTheme = {
  ...palette,
  mainBackground: '#FFFFFF',
  secondaryBackground: '#F4F4F4',
  backgroundContrast50: '#27272780',
  backgroundContrast100: '#272727',
};

const darkTheme: typeof lightTheme = {
  ...palette,
  mainBackground: '#1D182A',
  secondaryBackground: '#342F3F',
  backgroundContrast50: '#FFFFFF80',
  backgroundContrast100: '#FFFFFF',
};

export const colors = {
  darkTheme,
  lightTheme,
};
