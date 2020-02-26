import { Component, OnInit } from '@angular/core';
import { UserdataserService } from '../userdataser.service';

@Component({
  selector: 'app-getemployeedata',
  templateUrl: './getemployeedata.component.html',
  styleUrls: ['./getemployeedata.component.css']
})
export class GetemployeedataComponent implements OnInit {
  empdisplay;
  constructor(private empser:UserdataserService) {}
  Userdata(){
    this.empser.getuserdata().subscribe(x=>{
      this.empdisplay = x;
      console.log(this.empdisplay)
    })
   }

  ngOnInit() {
   this.Userdata()
  }
}
