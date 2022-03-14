const { default: addEmployeePage } = require("../pageobjects/addEmployee.page");
const { default: dashboardPage } = require("../pageobjects/dashboard.page");
const { default: signinPage } = require("../pageobjects/signin.page");
const { default: viewemployeelistPage } = require("../pageobjects/viewemployeelist.page");
const { default: viewPersonalDetailsPage } = require("../pageobjects/viewPersonalDetails.page");
var assert = require("assert");
describe("Login", () => {
    before(() => {
        signinPage.open();
    })
    it("verify url", async () => {

        expect(signinPage.open).toHaveUrlContaining('opensource');
        await browser.maximizeWindow()
    })
    it("verify login", async () => {
        await signinPage.login("Admin", "admin123");
        expect(browser).toHaveUrlContaining('dashboard');
    })
    it("add employee", async () => {
        await dashboardPage.clickPIM();
        await viewemployeelistPage.addEmployeeclick();
        await addEmployeePage.userinfo("priya", "raut", 820901);
        await addEmployeePage.logindetails("priya22", "shivn4372#")
        await addEmployeePage.confirmpassword.setValue("shivn4372#")
        expect(addEmployeePage.confirmpassword).toHaveText("shivn4321#")
        await addEmployeePage.status.selectByAttribute('value', 'Enabled')
        expect(addEmployeePage.status).toBeSelected();
        await addEmployeePage.save.click();
        expect(addEmployeePage.save).toBeChecked();
        await browser.pause(5000)
        await addEmployeePage.save.click();
    })
    it("addmore info", async () => {
        await viewPersonalDetailsPage.getmoreinfo();
        await viewPersonalDetailsPage.nationality.selectByAttribute('value', '82')
        expect(addEmployeePage.nationality).toBeSelected();
        await addEmployeePage.save.click();
        await viewPersonalDetailsPage.employeeList.click();
    })
    it("see the added employee ,exist or not in employee list", async () => {
        await viewemployeelistPage.searchID.setValue(820901)
        await viewemployeelistPage.searchEmployee.click()
        await browser.pause(10000)
    })

})