import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SharedService } from 'src/app/base/service/shared.service';
import { RequestVM } from 'src/app/base/view-model/request-vm.model';
import { ResponseVM } from 'src/app/base/view-model/response-vm.model';
export const uimode={
Add:"Add",
Update:"Update"
}

@Component({
  selector: 'app-add-request',
  templateUrl: './add-request.component.html',
  styleUrls: ['./add-request.component.css']
})
export class AddRequestComponent implements OnInit {
  currentMode=uimode.Add;
  uimode=uimode;
  id:string | undefined;
  constructor(private fb:FormBuilder,private sharedService:SharedService,private messageService: MessageService,private router:Router,private activatedRoute:ActivatedRoute) { }
  addRequest:FormGroup = this.fb.group({
    request:['',Validators.required],
    quantity:['',Validators.required],
    notes:['',Validators.required],
  })
 
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params =>{
        if(params['id']){
          this.currentMode=uimode.Update;
          this.id=params['id'];
        this.getById(params['id']);
      }
      else {
        this.currentMode=uimode.Add;
      }
      } 
      );
  }

  getById(id:string){
    if(id == ""  || id == undefined ||  id == null){
      this.router.navigate(['/request']);
      return;
    }
    this.sharedService.get<ResponseVM<RequestVM>>("request/get-by-id-request?id="+id)
    .subscribe(
      res => {
        if(res.isSuccess){
          this.addRequest.patchValue(res.data);
        }
        else {
          this.messageService.add({severity:'error', summary: 'Error', detail:res.errorMessage});
        }  
      }
    )
  }
update(){
  if(this.id == ""  || this.id == undefined ||  this.id == null){
        return;
  }

let requestVM=this.addRequest.value;
requestVM.id=this.id;
  this.sharedService.post("request/update",requestVM)
  .subscribe(
    res => {
      if(res.isSuccess){
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Request Updated'});
        this.router.navigate(['/request']);
      }
      else {
        this.messageService.add({severity:'error', summary: 'Error', detail:res.errorMessage});
      }  
    }
  )
}

  add(){
    if(this.addRequest.invalid){
      return;
    }
    this.sharedService.post("request/add-request",this.addRequest.value).subscribe(res=>{
      {
        if(res.isSuccess){
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Request Added'});

          this.router.navigate(['/request']);
        }
        else {
          this.messageService.add({severity:'error', summary: 'Error', detail:res.errorMessage});
        }  
      }

    });
  }

}
