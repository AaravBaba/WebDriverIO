import Page from "./page";

class viewPersonalDetailsPage extends Page{
    get gender(){
        return $('#personal_optGender_2')
    }
    get nationality(){
        return $('#personal_cmbNation')
    }
    get employeeList(){
        return $('#menu_pim_viewEmployeeList');
    }
    async getmoreinfo(){
        await this.gender.click();
   
    }
   
}
export default new viewPersonalDetailsPage();