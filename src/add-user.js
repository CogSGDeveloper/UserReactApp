import React, {Component} from 'react';
import axios from 'axios';
import UserDetails from './UserDetails';

class AddUser extends Component
{
    constructor(prop){
        super(prop);
        this.state={
            username:'',
            contactNumber:'',
            password: '',
            users : []
        }
    }
    componentDidMount(){
        this.setDetails()
    }

    setDetails(){
        axios.get('http://localhost:3001/').then(response=>{
            this.setState({
                users: response.data
            })
        }).catch(err=>{alert('something wrong with backend')})
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/', this.state).then(response=>{
            if (response.data.status === 404) {
                alert(response.data.msg)
            }else {
                this.setDetails();
                this.setState({
                    username:'',
                    contactNumber:'',
                    password: ''
                })
                alert('Record Added Successfully.')
            }
        }).catch(err=>{alert('something wrong with backend')})
    }
    render(){
        const {username, contactNumber, password, users} = this.state;
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                    <h1>Add Users</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Username</label>
                                <input type="text" 
                                    name="username"
                                    value={username}
                                    className="form-control" 
                                    id="exampleFormControlInput1" 
                                    placeholder="name@example.com"
                                    onChange={this.handleChange}>
                                </input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Contact Number</label>
                                <input type="text" 
                                    name="contactNumber"
                                    value={contactNumber}
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    placeholder="9999999999"
                                    onChange={this.handleChange}>
                                </input>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Password</label>
                                <input type="password" 
                                    name="password"
                                    value={password}
                                    className="form-control"
                                    id="exampleFormControlTextarea1"
                                    placeholder="****"
                                    onChange={this.handleChange}>
                                </input>
                            </div>
                            <div>
                                <input type="submit" className="btn btn-primary"></input>
                            </div>
                        </form>
                    </div>
                    <div className="col">
                    <UserDetails name={JSON.stringify(users)}></UserDetails>
                    </div>
                </div>
            </div>
           
        )
    }
}

export default AddUser