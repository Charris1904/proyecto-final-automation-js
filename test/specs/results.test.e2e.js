const Search = require('../pageobjects/search');

describe('RESULTS Results validations', () => {

    beforeEach(async () => {
        await browser.url(Search.url);
    })

    it('should validate the URL change according to the selected specialty', async () => {
        var mapSpecialities = new Map([["FÍSICA", Search.urlPhisical],
                                       ["LENGUAJE", Search.urlLanguage],
                                       ["OCUPACIONAL", Search.urlOcupational]])
        const specialties = await Search.listSpecialties
        for (let index = 0; index < specialties.length; index++) {
            await specialties[index].click();
            const nameSpeciality = await specialties[index].getText()
            await expect(browser).toHaveUrlContaining(mapSpecialities.get(nameSpeciality))
        }
    });

    it('should validate search and result displayed', async () => {
        let specialistName = 'Test'
        Search.searchSpecialistByName(specialistName)
        await expect(await Search.resultCard).not.toBeExisting()
        specialistName = 'María'
        Search.searchSpecialistByName(specialistName)
        await expect(await Search.resultCard).toHaveTextContaining(specialistName)
    });

    it('should validate that the map disappears when clicking on the icon', async () => {
        const className = "d-none"
        await (await Search.iconMap).click()
        await expect(await Search.rowResults).toHaveAttribute('class', className)
    });
});


