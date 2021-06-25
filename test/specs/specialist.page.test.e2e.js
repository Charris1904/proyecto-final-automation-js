const Search = require('../pageobjects/search');
const Specialist = require('../pageobjects/specialist');

describe('SPECIALIST Specialist validations', () => {

    before(async () => {
        await browser.url(Search.url);
    })

    it('should validate the webservice request', async () => {
        await (await Search.linkProfile).click()
        browser.cdp('Network', 'enable')
        browser.on('Network.responseReceived', (params) => {
            console.log(params.response.url)
            expect(params.response.url).toHaveTextContaining(Specialist.url)
        })
        const pageUrl = await browser.waitUntil(() => {
            let url = browser.getUrl();
            return url
        }, 2000)
        await browser.url(pageUrl);
    });
});

