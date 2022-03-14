import Page from "./page";

class addEmployeePage extends Page{
  get firstName(){
      return $('#firstName')
  }
  get lastName(){
      return $('#lastName');
  }
  get empId(){
      return $('#employeeId')
  }
  get createLoginDetails(){
      return $('#chkLogin')
  }
  get username(){
      return $('#user_name')
  }
  get userpassword(){
      return $('#user_password')
  }
  get confirmpassword(){
   return $('#re_password');
  }
  get status(){
      return $('#status');
  }
  get save(){
      return $('#btnSave');
  }
  async userinfo(first , last , id){
      await this.firstName.setValue(first);
      await this.lastName.setValue(last);
      await this.empId.setValue(id);
      await this.createLoginDetails.click(); 
  }
  async logindetails(user , password ){
      this.username.setValue(user)
      this.userpassword.setValue(password)
  }
}
export default new addEmployeePage();