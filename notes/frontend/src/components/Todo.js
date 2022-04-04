import React from 'react'

const TodoItem = ({todo}) => {
   return (
       <tr>
           <td>
               {todo.author}
           </td>
           <td>
               {todo.projectname}
           </td>
           <td>
               {todo.text}
           </td>
           <td>
               {todo.created_at}
           </td>
           <td>
               {todo.updated_at}
           </td>

       </tr>
   )
}

const TodoList = ({todos}) => {
   return (
       <table>
           <th>
               Creator
           </th>
           <th>
               Projectname
           </th>
           <th>
               Content
           </th>
           <th>
               Created at
           </th>
           <th>
                Updated at
           </th>
           {todos.map((todo) => <TodoItem todo={todo} />)}
       </table>
   )
}


export default TodoList