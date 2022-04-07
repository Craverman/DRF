import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './components/User.js'
import Footer from './components/Footer.js'
import Menu from './components/Menu.js'
import ProjectList from './components/Project.js'
import TodoList from './components/Todo.js'
import {HashRouter, Route, Link, Switch} from 'react-router-dom'


const NotFound404 = ({ location }) => {
    return (
        <div>
            <h1>Page '{location.pathname}' has not found</h1>
        </div>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users':[],
            'projects':[],
            'todos':[]
        }
    }

    componentDidMount() {
       axios.get('http://127.0.0.1:8000/api/usersapp')
           .then(response => {
               const users = response.data
                   this.setState(
                   {
                       'users': users
                   }
               )
           }).catch(error => console.log(error))


       axios.get('http://127.0.0.1:8000/api/todo')
           .then(response => {
               const todos = response.data.results
                   this.setState(
                   {
                       'todos': todos
                   }
               )
           }).catch(error => console.log(error))

       axios.get('http://127.0.0.1:8000/api/project')
           .then(response => {
               const projects = response.data.results
                   this.setState(
                   {
                       'projects': projects
                   }
               )
           }).catch(error => console.log(error))

    }




   render () {
       return (
       <body>
           <div>

               <Menu />
               <HashRouter>
                    <Switch>
                    <Route exact path='/' component={() => <UserList users={this.state.users} />} />
                    <Route exact path='/projects' component={() => <ProjectList projects={this.state.projects} />} />
                    <Route exact path='/todo' component={() => <TodoList todos={this.state.todos} />} />
                    <Route component={NotFound404} />
                    </Switch>
                    </HashRouter>
               <Footer />

           </div>
           </body>

       )
   }
}


export default App;
