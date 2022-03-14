import Page from "./page"

class dashboardPage extends Page{
  get PIM(){
      return $('#menu_pim_viewPimModule')
  }
  get Admin(){
      return $('#menu_admin_viewAdminModule')
  }
  async clickPIM(){
      await this.PIM.click();
  }
}
export default new dashboardPage();