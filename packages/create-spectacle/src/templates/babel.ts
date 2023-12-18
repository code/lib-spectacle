export const babelTemplate = () =>
  `{
  "presets": [
    "@babel/preset-typescript",
    ["@babel/preset-env", { "modules": false }],
    ["@babel/preset-react", { "runtime": "automatic" }]
  ],
  "plugins": [
    "@babel/plugin-proposal-object-rest-spread",
    "@babel/plugin-proposal-class-properties"
  ],
  "env": {
    "cjs": {
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    },
    "test": {
      "presets": ["@babel/preset-env", "@babel/preset-react"]
    }
  }
}
`;
