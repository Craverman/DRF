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
import LoginForm from './components/Auth.js'
import Cookies from 'universal-cookie';


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
    set_token(token) {
const cookies = new Cookies()
cookies.set('token', token)
this.setState({'token': token})
}
is_authenticated() {
return this.state.token != ''
}
logout() {
this.set_token('')
}
get_token_from_storage() {
const cookies = new Cookies()
const token = cookies.get('token')
this.setState({'token': token})
}
get_token(username, password) {
axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username,
password: password})
.then(response => {
this.set_token(response.data['token'])
}).catch(error => alert('Неверный логин или пароль'))
}
    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username,
            password: password})
                .then(response => {
                    console.log(response.data)
                }).catch(error => alert('Неверный логин или пароль'))
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
                    <Route exact path='/login' component={() => <LoginForm
                    get_token={(username, password) => this.get_token(username, password)} />} />
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
