

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, Tabs} from 'ionic-angular';
import * as enums from '../../enums/enum';



/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  tab:Tabs;

  loginResult;
 
  loginArray = [];

  user = '';
  pass = '';
   
  myIP = enums.APIURL.URL;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient,
    private nav: Nav) {
      this.tab = this.navCtrl.parent;
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  openRegisterPage(){
    this.navCtrl.push("RegisterPage");
  }

  openPageBack(){
    this.tab.select(0); 
  }

  

  signIn(_username,_password){
    let url = this.myIP + '/data/getAllAccountData.php';
    this.http.get(url).subscribe(
      (data: any) => {
        console.log(data);
        this.loginArray = data.account;
        console.log(this.loginArray);
        for (let i = 0; i < this.loginArray.length; i++) {
          this.user = data.account[i].Username;
          this.pass = data.account[i].Password;
          let id = data.account[i].ID;
          console.log(_username);
          console.log(_password);
          console.log(this.user);
          console.log(this.pass);
          console.log(id);
          
          if(_username == this.user && _password == this.pass){
            break;
          }
      
        }

        if(_username == this.user && _password == this.pass){
          this.loginResult='pass'
          //this.navCtrl.push("RegisterPage");
          alert('ยินดีต้อนรับ ' + _username);
          this.tab.select(0);
          
        }else{
          alert('Username or Password ผิด ');
         
        } 
        
      }
      );  
  }
  


}
