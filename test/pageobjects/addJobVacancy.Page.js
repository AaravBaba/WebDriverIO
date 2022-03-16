import Page from "./page";

class addJobVaccancyPage extends Page{
    get jobTitle(){
        return $('#addJobVacancy_jobTitle')
    }
   get vacancyName(){
       return $('#addJobVacancy_name')
   }
   get hiring(){
       return $('#addJobVacancy_hiringManager')
   }
   get positions(){
       return $('#addJobVacancy_noOfPositions')
   }
   get back(){
       return $('#btnBack')
   }
}
export default new addJobVaccancyPage()