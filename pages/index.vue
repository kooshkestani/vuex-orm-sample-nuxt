<template>
  <div id="app">
    <el-row>

      <el-col :span="6">
        <el-input placeholder="user id" v-model="updateUserId"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input placeholder="name" v-model="newUserName"></el-input>
      </el-col>
      <el-col :span="6">
        <el-input placeholder="Age" v-model="newAge"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button @click="insertOrUpdateUser(updateUserId, newUserName,newAge)">Add user</el-button>
      </el-col>
    </el-row>
    <el-table

      :data="users"
      style="width: 100%">
      <el-table-column
        label="id"
        prop="id">
      </el-table-column>
      <el-table-column
        label="Name"
        prop="name">
      </el-table-column>
      <el-table-column
        label="age"
        prop="age">
      </el-table-column>
      <el-table-column
        align="right">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="updateUser(scope.$index, scope.row)">Edit</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="deleteUser(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>


  </div>
</template>

<script>
  import User from "../store/user"

  export default {
    name: "App",
    data() {
      return {
        updateUserId: null,
        newUserName: '',
        newAge:' '
      }
    },
    computed: {
      users() {
        return User.query().all();
      }
    },
    methods: {
      updateUser (index, row) {
        User.update({
          data: {id: index.id, name: row.name , age:row.age}
        })
      },
      deleteUser (index,row) {

        User.delete(row.id)
      },
      insertOrUpdateUser (id, userName,newAge) {
        const data = id != null ? {id: id, name: userName,age:newAge} : {name: userName}
        User.insertOrUpdate({data: data })
        this.newUserName = ''
        this.updateUserId = null
      },


    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    color: #2c3e50;
    margin: 60px 0 0 60px;
  }

  .data-block {
    display: flex;
  }

  .data-block-element {
    margin-right: 10px;
    margin-bottom: 20px;
  }

  .user {
    margin-bottom: 20px;
  }

  .post {
    margin-bottom: 20px;
  }

  button {
    padding: 10px;
  }

  input {
    display: block;
    height: 20px;
    width: 200px;
    padding: 10px;
  }
</style>
