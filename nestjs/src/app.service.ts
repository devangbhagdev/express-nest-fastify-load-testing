import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users: { id: number; name: string }[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];

  getUsers() {
    return this.users;
  }

  createUser(name: string) {
    const newUser = { id: Date.now(), name };
    this.users.push(newUser);
    return newUser;
  }
}
