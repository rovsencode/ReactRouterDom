import { HttpClient } from "../HttpClient";

export class UsersService extends HttpClient {
  constructor() {
    super("https://6363b35237f2167d6f80918f.mockapi.io");
  }

  getAllUsers() {
    return this.get("users");
  }

  getUserById(id) {
    return this.get(`users/${id}`);
  }
}

