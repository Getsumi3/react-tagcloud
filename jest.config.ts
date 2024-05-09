export default {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
    collectCoverage: true,
    collectCoverageFrom: ["**/lib/**/*.{ts,tsx}"],
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"]
};
