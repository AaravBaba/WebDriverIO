import Page from "./page"

class dashboardPage extends Page{
  get PIM(){
      return $('#menu_pim_viewPimModule')
  }
  get Admin(){
      return $('#menu_admin_viewAdminModule')
  }
  get recruitement(){
      return $('#menu_recruitment_viewRecruitmentModule')
  }
  async clickPIM(){
      await this.PIM.click();
  }
  async clickRecruitement(){
      await this.recruitement.click()
  }
}
export default new dashboardPage();