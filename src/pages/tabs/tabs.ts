import { AboutMePage } from './../about-me/about-me';
import { MessagePage } from './../message/message';
import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MessagePage;
  tab3Root = ContactPage;
  tab4Root = AboutMePage;
  
  constructor() {

  }
}
