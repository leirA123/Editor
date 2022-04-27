const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');

scrape({
    // Forneça a URL do site que você quer copiar
    urls: ['https://editor.wix.com/html/editor/web/renderer/edit/ef001aec-5ad5-4bb2-b1c1-2e4cd0cdc4da?metaSiteId=ff930061-d2e2-4680-ae24-e74eb55ca3f3&editorSessionId=56cf2d37-63d0-412b-9637-cd62dae3fbe4'],

    // Especifique a pasta onde os arquivos do site serão salvos em pasta-do-site
    directory: path.resolve(__dirname, 'pasta-do-site'),
    
    // carregue o plugin do Puppeteer
    plugins: [ 
        new PuppeteerPlugin({
            launchOptions: { 
                headless: true
            },
            scrollToBottom: {
                timeout: 10000, 
                viewportN: 10 
            }
        })
    ]
});
