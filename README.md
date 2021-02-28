# fix-puppeteer-win32

Chromium may failed to launch because of the folder having the case sensitive attribute enabled. Refered from this [issue](https://github.com/puppeteer/puppeteer/issues/4054#issuecomment-570115307).  
This package can fix the problem on win32 and has no side effects on other platform.

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
