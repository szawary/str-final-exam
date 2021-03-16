import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users$: Observable<User[]> = this.userService.getAll();

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
  }


  onDelete(user: User): void {
    if (confirm('Biztos vagy benne, hogy töröljük?'))
    {
      this.userService.remove(user).subscribe((resp: any)=>{
      this.users$ = this.userService.getAll();
      });
    }
  }
}
