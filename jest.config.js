module.exports = {
  "verbose": true,
  "testURL": "http://localhost:8888/",
  "bail": true,
  "collectCoverage": true,
  "coverageDirectory": "coverage",
  "moduleNameMapper": {
    "\\.(jpe?g|png|gif|eot|otf|webp|svg|ttf|woff2?|mp[34]|webm|wav|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|s[ac]ss|style)$": "<rootDir>/app/global-style.css",
    "^app/(.*)$": "<rootDir>/app/$1",
    "^type/(.*)$": "<rootDir>/type/$1",
    "^test/(.*)$": "<rootDir>/test/$1"
  },
  "testMatch": ["**/?(*.)(spec|test).js?(x)", "**/?(*.)(spec|test).ts?(x)"],
  "moduleFileExtensions": [
    "js",
    "jsx",
    "ts",
    "tsx"
  ],
  "moduleDirectories": [
    "node_modules"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest"
  }
};
