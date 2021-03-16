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

  keyWord: string = '';

  key: string = 'id';

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


  onFilter(event: Event): void {
    this.keyWord = (event.target as HTMLInputElement).value;
  }


  onOrder(key: string): void {
  this.key = key;
  }

}
