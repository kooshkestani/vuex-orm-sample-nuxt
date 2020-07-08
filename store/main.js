
import Vue from "vue";
import Vuex from "vuex";
import User from "./user";
import users from "./users";

import VuexORM from "@vuex-orm/core";
import API from "./api";

Vue.use(Vuex);

const database = new VuexORM.Database();
database.register(User, users);

const store = new Vuex.Store({
  plugins: [VuexORM.install(database)]
});

API.fetchUsers(res => {
  store.dispatch("entities/users/create", { data: res });
});


