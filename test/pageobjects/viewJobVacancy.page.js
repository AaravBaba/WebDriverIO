import Page from "./page";

class viewJobVacancyPage extends Page{
    get vacancies(){
        return $('#menu_recruitment_viewJobVacancy')
    }
    get addVacancies(){
        return $('#btnAdd')
    }
    get searchJobTitle(){
       return $('#vacancySearch_jobTitle')
    }
    get searchVacancy(){
        return $('#vacancySearch_jobVacancy')
    }
    // get searchHiringManager(){
    //     return $('#vacancySearch_hiringManager')
    // }
    // get jobStatus(){
    //     return $('#vacancySearch_status')
    // }
    get searchvc(){
        return $('#btnSrch')
    }
}
export default new viewJobVacancyPage()