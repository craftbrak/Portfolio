import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import {Router} from "@angular/router";
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(private matIconRegistry: MatIconRegistry,public router: Router ) {
    this.matIconRegistry.addSvgIcon(
      `git`,
      "../../assets/Git_icon.svg"
    );
    console.log(router.url)
  }

  ngOnInit(): void {
  }

}
