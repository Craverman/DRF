import React from 'react'

const ProjectItem = ({project}) => {
   return (
       <tr>
           <td>
               {project.owner}
           </td>
           <td>
               {project.name}
           </td>
           <td>
               {project.repo}
           </td>


       </tr>
   )
}

const ProjectList = ({projects}) => {
   return (
       <table>
           <th>
               Owner
           </th>
           <th>
               Name
           </th>
           <th>
               Repo
           </th>
           {projects.map((project) => <ProjectItem project={project} />)}
       </table>
   )
}


export default ProjectList