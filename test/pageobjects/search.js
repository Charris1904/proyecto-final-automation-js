
class Search {

    get url() { return '/#/search' }
    get urlPhisical() { return '?sp=phisical' }
    get urlLanguage() { return '?sp=language' }
    get urlOcupational() { return '?sp=ocupational' }
    get resultCard() { return $('//div[@class="strip_list"]/h3') }
    get listSpecialties() { return $$('div.switch-field a') }
    get inputSearch() { return $('//div[@class="search_bar_list"]/input[@type="search"]') }
    get btnSearch() { return $('//div[@class="search_bar_list"]/input[@type="submit"]') }
    get iconMap() { return $('//div[@class="layout_view"]/a[last()]') }
    get rowResults() { return $('<aside />') }
    get linkProfile() { return $('=Ver Perfil Completo') }

    async searchSpecialistByName(specialistName) {
        await (await this.inputSearch).click()
        await (await this.inputSearch).clear()
        await (await this.inputSearch).setValue(specialistName)
        await (await this.btnSearch).click()
    }

}

module.exports = new Search();
