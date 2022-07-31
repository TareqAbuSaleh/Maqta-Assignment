import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SharedService } from 'src/app/base/service/shared.service';
import { RequestVM } from 'src/app/base/view-model/request-vm.model';
import { ResponseVM } from 'src/app/base/view-model/response-vm.model';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  constructor(private sharedService: SharedService,private router:Router,private messageService: MessageService) {
    this.data = [];
  }
  data: RequestVM[];
  ngOnInit(): void {
    this.sharedService.get<ResponseVM<RequestVM[]>>("request/get-all-request").subscribe(a =>{
      this.data=a.data;});

  }
  update(id:string){
    this.router.navigate(['/add-request',id ]);

  }
  delete(id:string){
    this.sharedService.get<ResponseVM<RequestVM>>("request/delete?id="+id)
    .subscribe(
      res => {
        if(res.isSuccess){
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Request has been deleted'});

          this.sharedService.get<ResponseVM<RequestVM[]>>("request/get-all-request").subscribe(a =>{
            this.data=a.data;});
        }
        else {
          this.messageService.add({severity:'error', summary: 'Error', detail: res.errorMessage});
        }  
      }
    )
  }

}
