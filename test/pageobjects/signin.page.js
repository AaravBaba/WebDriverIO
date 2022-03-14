const { default: Page } = require("./page");

 
 class SigninPage extends Page{
    async open(){
        await super.open("https://opensource-demo.orangehrmlive.com/")
     }
     get username(){
         return $('#txtUsername')
     }
     get password(){
         return $('#txtPassword')
     }
     get btnlogin(){
         return $('#btnLogin')
     }
     async login(inputusername , inputpassword){
        await this.username.setValue(inputusername);
        await this.password.setValue(inputpassword);
        await this.btnlogin.click();
     }
 }
 export default new SigninPage();