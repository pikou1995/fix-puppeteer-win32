#!/usr/bin/env node
const os = require('os')
const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync

const platform = os.platform()

if (platform !== 'win32') {
  console.warn(`This package doesn't work on platform: ${platform}`)
  process.exit(0)
}

const chromiumPath = getChromiumPath()

function getChromiumPath() {
  const cwd = process.cwd()
  const customChromiumPath = process.argv[2]
  if (customChromiumPath) {
    return path.join(cwd, customChromiumPath)
  }

  const puppeteerChromiumPath = path.join(
    cwd,
    'node_modules/puppeteer/.local-chromium'
  )
  return path.join(
    puppeteerChromiumPath,
    fs.readdirSync(puppeteerChromiumPath)[0],
    'chrome-win'
  )
}

if (!fs.existsSync(chromiumPath)) {
  console.warn(`No chromium found in ${chromiumPath}`)
  process.exit(0)
}

execSync(`fsutil.exe file setCaseSensitiveInfo ${chromiumPath} disable`)
