// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html
const path = require('path');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-remap-istanbul'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    files: [
      
    ],
    preprocessors: {
      
    },
    mime: {
      'text/x-typescript': ['ts','tsx']
    },
    remapIstanbulReporter: {
      dir: require('path').join(__dirname, 'coverage'), reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    coverageIstanbulReporter:{
      reports: ['html', 'lcovonly', 'text-summary'],
      dir: path.join(__dirname, 'tmp/unit-test-coverage'),
      fixWebpackSourcePaths: true,
      skipFilesWithNoCoverage: true,
      'report-config': {
        html: {
          subdir: 'html'
        }
      },
      thresholds: {
        emitWarning: true,
        global: {
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100
        },
        each: {
          statements: 100,
          lines: 100,
          branches: 100,
          functions: 100
        }
      }
    },
    
    reporters: config.angularCli && config.angularCli.codeCoverage ?
              ['progress', 'karma-remap-istanbul', 'coverage-istanbul']
              : ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
