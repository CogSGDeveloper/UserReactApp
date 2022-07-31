import React, {Component} from 'react';
import axios from 'axios';

class ListUsers extends Component
{
    constructor(prop){
        super(prop);
        this.state={
            users:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3001/').then(response=>{
            this.setState({
                users: response.data
            })
        })
    }
    render(){
        const { users } = this.state;
        if (users.length > 0) {
            return(
                <div>
                    <h1>List Users</h1>
                    <table className="table table-hover">
                            <tr>
                                <td scope="col">Id</td>
                                <td scope="col">Username</td>
                                <td scope="col">user Address</td>
                            </tr>
                            {users.map(xyz => <tr><td>{xyz._id}</td><td>{xyz.username}</td><td>{xyz.contactNumber}</td></tr>)}
                    </table>
                    
                </div>
            )   
        }
        return(
            <div>
                <h1>List Users</h1>
                <table className="table table-hover">
                        <tr>
                            <td>Id</td>
                            <td>Username</td>
                            <td>Contact Number</td>
                        </tr>
                        
                </table>
                
            </div>
        )   
    }
}

export default ListUsers;