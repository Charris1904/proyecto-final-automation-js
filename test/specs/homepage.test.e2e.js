const Homepage = require('../pageobjects/homepage');
const Search = require('../pageobjects/search');

describe('Homepage validations', () => {

    beforeEach(async () => {
        await Homepage.open();
    })

    it('should stay on the same page when clicking the Search button without text', async () => {
        const homepageTitle = '¿BUSCAS UN TERAPEUTA?'
        await (await Homepage.buttonSearch).click()
        await expect(await Homepage.homepageTitle).toBeDisplayed()
        await expect(await Homepage.homepageTitle).toHaveText(homepageTitle)
    });

    it('should change the placeholder when clicking the textbox', async () => {
        const text = '¿Buscas a alguien o algo en específico?'
        await (await Homepage.buttonSpecialty).click()
        await expect(await Homepage.placeholderSearchBox).toHaveAttribute('placeholder', text)
    });

    it('should redirect to the results page when search by specialist name', async () => {
        const specialistName = 'María'
        await Homepage.searchSpecialistByName(specialistName)
        await expect(browser).toHaveUrlContaining(Search.url)
        await expect(await Search.resultCard).toHaveTextContaining(specialistName)
    });
});


