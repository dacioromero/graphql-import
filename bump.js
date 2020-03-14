const semver = require('semver');
const packageJson = require('./package.json');
const fs = require('fs');
const cp = require('child_process');

const latestAlpha = cp.spawnSync('npm', ['view', 'graphql-import@alpha', 'version']).stdout.toString().trim();
const newAlpha = semver.inc(latestAlpha, 'prerelease', true, 'alpha');

packageJson.version = newAlpha;

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));
