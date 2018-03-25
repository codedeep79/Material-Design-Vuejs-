<template>
<div id="app">
  <v-app id="inspire">
    <v-toolbar>
      <v-toolbar-title>Build Material Vue Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat color="info" v-on:click="fillTable()">Fill Table</v-btn>
        <v-btn flat color="info" v-on:click="clearTable()">Clear Table</v-btn>
   
      </v-toolbar-items>
    </v-toolbar>
     
    <v-data-table :headers="headers" :items="contacts">
      <template slot="items" slot-scope="props">
        <td class="text-xs-right">{{ props.item.lastName }}</td>
        <td class="text-xs-right">{{ props.item.firstName }}</td>
        <td class="text-xs-right">{{ props.item.email }}</td>
        <td class="text-xs-right">{{ props.item.action }}</td>

        <td class="justify-center layout px-0">
            <v-btn icon class="mx-0" @click="editItem(props.item)">
              <v-icon color="teal">edit</v-icon>
            </v-btn>

            <v-btn icon class="mx-0" @click="deleteItem(props.item)">
              <v-icon color="pink">delete</v-icon>
            </v-btn>
        </td>
      </template>
    </v-data-table>
  </v-app>
</div>
</template>

<script>
export default {
    name: 'app',
    data: function () {
      return {
       headers: [
        { text: 'Last Name', value: 'lastName' },
        { text: 'First Name', value: 'firstName' },
        { text: 'Email', value: 'email' }, 
        { text: 'Action', value: 'action'}
      ],
      contacts: []
      }
    },
    methods: {
      fillTable: function() {
        this.contacts.push({firstName: 'Hau', lastName: 'Nguyen Trung', email: 'hauntps@mail.com'});
        this.contacts.push({firstName: 'Ngoc', lastName: 'Nguyen Thien', email: 'ngocnt@mail.com'});
        this.contacts.push({firstName: 'Huong', lastName: 'Mai Ngoc', email: 'huongmn@mail.com'});
      },
      clearTable: function() {
        this.contacts.splice(0, this.contacts.length);  
      },
      deleteItem (contact) {
        const index = this.contacts.indexOf(contact)
        confirm('Are you sure you want to delete this item?') && this.contacts.splice(index, 1)
    }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
