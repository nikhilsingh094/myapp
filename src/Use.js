import React, { Component } from 'react'
import axios from 'axios';
export default class Use extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             page:1
        }
        this.pagination=this.pagination.bind(this);
    }
  
    componentDidMount(){
       
        this.getData();
       
    }
    getData(){
        
        
        axios.get("https://reqres.in/api/users?page="+this.state.page)
        .then(response =>{
            this.setState({posts:response.data.data});
            
        })
        .catch(error =>{
            
        })
    }

    pagination(page){
        
        if(page==='pre'){
            page=this.state.page==1?1:this.state.page-1
        }
        if(page==='next'){
            page=this.state.page==1?1:this.state.page+1
        }
        console.log(page);
        this.setState({page:page},()=>{
            this. getData();
        })
       
    }
    render() {
        
        return (
            <div>
                <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">image</th>
    </tr>
  </thead>
  <tbody>
  {this.state.posts.map(u=>  (<tr key={u.id}>
  
      <th scope="row">{u.id}</th>
      <td>{u.first_name}</td>
      <td>{u.last_name}</td>
      <td>{u.email}</td>
      <td><img src={u.avatar}></img></td>
    </tr>))
    }
   
   
  </tbody>
</table>
<div className="w-100">
<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li onClick={()=>this.pagination('pre')} className="page-item">
      <a className="page-link"  aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span className="sr-only">Previous</span>
      </a>
    </li>
    <li onClick={()=>this.pagination(1)} className="page-item "><a className="page-link" >1</a></li>
    <li onClick={()=>this.pagination(2)} className="page-item"><a className="page-link" >2</a></li>
    <li onClick={()=>this.pagination(3)} className="page-item"><a className="page-link" >3</a></li>
    <li onClick={()=>this.pagination('next')} className="page-item">
      <a className="page-link" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span className="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
</div>

               
            </div>
            
        )
    }
}
