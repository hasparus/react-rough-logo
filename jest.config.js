module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupTestFrameworkScriptFile: "<rootDir>/test/setup.tsx",
  snapshotSerializers: ["enzyme-to-json/serializer"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
};
