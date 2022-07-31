import React, {Component} from 'react';

const UserDetails = (Props) => {
    const  users  = JSON.parse(Props.name);
        if (users.length > 0) {
            return(
                <div>
                    <h1>List Users</h1>
                    <table className="table table-hover">
                            <tr>
                                <td scope="col">Username</td>
                                <td scope="col">Contact Number</td>
                            </tr>
                            {users.map(user => <tr><td>{user.username}</td><td>{user.contactNumber}</td></tr>)}
                    </table>
                    
                </div>
            )   
        }
        return(
            <div>
                <h1>List Users</h1>
                <table className="table table-hover">
                            <tr>
                                <td scope="col">Username</td>
                                <td scope="col">Contact Number</td>
                            </tr>
                        
                </table>
                
            </div>
        )   
} 
export default UserDetails;