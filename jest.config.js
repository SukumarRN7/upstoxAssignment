module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|react-navigation|@react-navigation|@react-native|react-native-gesture-handler|react-native-linear-gradient|react-native-reanimated)|react-native-safe-area-context/)',
  ],
  testPathIgnorePatterns: [
    '/node_modules/',
    '/__tests__/.*ignore.*', // Ignore files containing the word "ignore" within the "__tests__" folder
  ],
};
