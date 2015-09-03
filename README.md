https://github.com/philbooth/complexity-report is no longer maintained and has no es6 support.

https://github.com/eslint/eslint
http://eslint.org/docs/user-guide/configuring
https://github.com/sindresorhus/grunt-eslint

example of conf/eslint.json
{
  "rules": {
    "complexity": [2, 2] //first number is the error level of the rule, second number is the complexity threshold
  },
  "env": {
    "es6": true
  }
}
