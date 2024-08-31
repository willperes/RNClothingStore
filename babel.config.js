module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver', {
      'root': ['.'],
      alias: {
        '@/assets': './src/assets',
        '@/components': './src/components',
        '@/domain': './src/domain',
        '@/hooks': './src/hooks',
        '@/routes': './src/routes',
        '@/screens': './src/screens',
        '@/theme': './src/theme',
      },
    }],
  ],
};
