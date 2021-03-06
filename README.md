# fix-puppeteer-win32

`puppeteer.launch()` may failed to launch because the `.local-chromium` downloaded by `puppeteer` having the case sensitive attribute enabled. Referred from this [issue](https://github.com/puppeteer/puppeteer/issues/4054#issuecomment-570115307).  
This package can make a fix on win32 and has no side effects on other platform.

## Usage

```
cd <your project folder>
npm i fix-puppeteer-win32
```

This package registered npm postinstall hook, and trying to fix puppeteer's .local-chromium after installed.

You can install this package globally and fix package with command `fix-puppeteer-win32`:

```
npm i -g fix-puppeteer-win32
cd <your project folder>
fix-puppeteer-win32
```

or

```
npm i -g fix-puppeteer-win32
fix-puppeteer-win32 <custom chromium installed path>
```
