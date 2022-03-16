import addEmployeePage from "../pageobjects/addEmployee.page";
import addJobVacancyPage from "../pageobjects/addJobVacancy.Page";
import dashboardPage from "../pageobjects/dashboard.page";
import signinPage from "../pageobjects/signin.page";
import viewJobVacancyPage from "../pageobjects/viewJobVacancy.page";

describe("add vacancy", () => {
    it("sign in", async () => {
        before(() => {
            signinPage.open();
        })
    })
    it("verify url", async () => {
        expect(signinPage.open).toHaveUrlContaining('opensource');
    })
    it("verify login", async () => {
        await signinPage.login("Admin", "admin123");
        expect(browser).toHaveUrlContaining('dashboard');
    })
    it("add vacancies", async () => {
        await dashboardPage.clickRecruitement()
        await viewJobVacancyPage.vacancies.click()
        await viewJobVacancyPage.addVacancies.click()
        await addJobVacancyPage.jobTitle.selectByAttribute('value', '5')
        await addJobVacancyPage.vacancyName.setValue("client services")
        await addJobVacancyPage.hiring.setValue("Admin A")
        await addJobVacancyPage.positions.setValue('12')
        await addEmployeePage.save.click()
        await addJobVacancyPage.back.click()
        await browser.pause(3000)
    })
    it("search for vacancies", async () => {
        await viewJobVacancyPage.searchJobTitle.selectByAttribute('value', '5')
        await browser.pause(6000)
        await viewJobVacancyPage.searchvc.click()
        await browser.pause(6000)
    })
})
