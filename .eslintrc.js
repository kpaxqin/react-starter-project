module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "extends": "airbnb",
  "rules": {
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true
      }
    ]
  }
};