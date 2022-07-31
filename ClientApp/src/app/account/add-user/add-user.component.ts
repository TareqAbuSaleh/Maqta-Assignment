import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SharedService } from 'src/app/base/service/shared.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private fb: FormBuilder, private sharedeService: SharedService, private router: Router, private messageService: MessageService) { }

  addUserForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    firstName: ['', Validators.required],
    password: ['', Validators.required],
  })

  ngOnInit() {
  }

  AddUser() {
    if (this.addUserForm.invalid) {
      return;
    }
    this.sharedeService.post("user/add-user", JSON.stringify(this.addUserForm.value))
      .subscribe(
        res => {
          if (res.isSuccess) {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'User Added' });
            this.router.navigate(['/login']);
          }
          else {
            this.messageService.add({severity:'error', summary: 'Error', detail:res.errorMessage});
          }
        }
      )
  }

}
