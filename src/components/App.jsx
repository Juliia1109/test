// import User from "./User/User";
import { data } from "../data/users";
import UserList from "./UserList/UserList";
import Section from "./Section/Section";
import React, { Component } from "react";
import { Button } from "./Button/Button";

export class App extends Component {

  state= { 
    users:data,
    isListShown: false 
  };

  deleteUser=(id) => {
  this.setState((prevState) => ({
  users: prevState.users.filter(
  (user)=> user.id !== id
   )
   }))
  };

  showUsers=()=> {
    this.setState( { isListShown: true });
    }

render() {
  const { users, isListShown } = this.state;
  return (
    <>
      {/* <Section>
      <User user={data[0]} />
      </Section> */}

       { isListShown ? (
        <Section title="List of users">
        <UserList deleteUser={this.deleteUser} users={ users } />
        </Section>
       ): (
       <Button text="Show users"
       clickHandler={ this.showUsers }
       />
      ) }
 
     
     
    </>
  );
}

};