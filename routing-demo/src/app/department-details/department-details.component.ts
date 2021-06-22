import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,ParamMap,Router} from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {
public departmentId:any;
public total=0;
  constructor(private route: ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    //let id= this.route.snapshot.paramMap.get('id');----there is a drawback to snapshot approach
    //this.departmentId=id;
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id=(params.get('id'));
      this.departmentId=id;
    });
      
  }
  OnPrevious(){
    this.total=+this.departmentId-1
    this.router.navigate(['/departments',this.total]);
  }
  OnNext(){
   this.total=+this.departmentId+1
    this.router.navigate(['/departments',this.total]);
  }
  gotoDepartment(){
  let selectedId=this.departmentId;
  //this.router.navigate(['/departments',{id:selectedId}]); 
  this.router.navigate(['../',{id:selectedId}],{relativeTo:this.route})
  }

  OnOverview(){
    this.router.navigate(['overview'],{relativeTo:this.route});
  }

  OnContact(){
    this.router.navigate(['contact'],{relativeTo:this.route});
  }
}
