import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  returnRegister = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  openPageBack(){
    this.navCtrl.push("LoginPage");
  }

  postRegister(_username, _password, _email, _name, _sername, _telephone){

    alert("ลงทะเบียนเสร็จสิ้น");
    let register ;
    register = {username: _username, password: _password, email: _email, name: _name, sername: _sername, telephone: _telephone}
    console.log(register);

    let url = 'http://localhost/data/postDataAccount.php';
    this.http.post(url,register).subscribe(
      (data: any) => {
        this.returnRegister = data.message;
        console.log(data);
      }
    );
  }

}