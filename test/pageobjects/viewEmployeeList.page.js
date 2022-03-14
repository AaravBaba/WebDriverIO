import Page from "./page";

class viewEmployeeListPage extends Page{
    get addEmployee(){
        return $('#menu_pim_addEmployee')
    }
    get searchID(){
        return $('#empsearch_id')
    }
    get searchEmployee(){
        return $('#searchBtn')
    }
    async addEmployeeclick(){
        await this.addEmployee.click();
    }
}
export default new viewEmployeeListPage();