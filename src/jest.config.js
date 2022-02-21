// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
};

module.exports = config;

// Or async function
module.exports = async () => {
  return {
    verbose: true,
  };
};

const { defaults } = require('jest-config');
module.exports = {
  // ...
  moduleFileExtensions: [
    ...defaults.moduleFileExtensions,
    'ts',
    'tsx',
    'js',
    'jsx',
  ],
  // ...
};
