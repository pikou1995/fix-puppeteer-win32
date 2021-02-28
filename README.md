# fix-puppeteer-win32

this package can fix chromium on win32 and has no side effects on other platform.

## Usage

This package registered npm postinstall hook, will fix puppeteer's .local-chromium after installed.

```
npm i fix-puppeteer-win32
```

You can install this package globally and fix package with `npx fix-puppeteer-win32`

```
npm i -g fix-puppeteer-win32
cd <your package>
npx fix-puppeteer-win32
```

or

```
npm i -g fix-puppeteer-win32
npx fix-puppeteer-win32 <custom chromium installed path>
```
