
class Homepage {

    get buttonSearch() { return $('[value=Buscar]') }
    get homepageTitle() { return $('h3=¿Buscas un Terapeuta?') }
    get buttonSpecialty() { return $('div#custom-search-input li:first-child') }
    get placeholderSearchBox() { return $('input#search-input') }

    async searchSpecialistByName(specialistName) {
        await (await this.placeholderSearchBox).click()
        await (await this.placeholderSearchBox).setValue(specialistName)
        await (await this.buttonSearch).click()
    }

    async open() {
        return await browser.url('/');
    }
}

module.exports = new Homepage();
