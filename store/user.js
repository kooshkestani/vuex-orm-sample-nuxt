import { Model } from "@vuex-orm/core";

export default class User extends Model {
  static entity = "users";
  static primaryKey = "id";

  static fields() {
    return {
      id: this.attr(null),
      name: this.string(""),
      age: this.number(0),

    };
  }
}
