#!/usr/bin/env node
const os = require('os')
const platform = os.platform()

if (platform !== 'win32') {
  console.warn(`This package doesn't work on platform: ${platform}`)
  process.exit(0)
}
