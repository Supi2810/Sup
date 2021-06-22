import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router,RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
public selectedId:any;
  departmentlist=[
    { 'id':1,'name':'Angular'},
    {'id':2,'name':'Bootstrap'},
    {'id':3,'name':'Ruby'},
    {'id':4,'name':'react'}
  ]

  constructor(private router: Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=(params.get('id'));
      this.selectedId=id;


    })

  }

  onSelect(department: { id: any; }){
    this.router.navigate(['/departments',department.id]);
  //this.router.navigate([department.id],{relativeTo:this.route});
  }
  
  // IsSelected(department: { id: any; }){
  //   console.log(department.id)
  //   console.log(this.selectedId)
  //   return department.id === this.selectedId
    
  //}
  
}
