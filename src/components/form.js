import React, { Component } from 'react';

class form extends Component {

    constructor(props){
        super(props);
        this.state = {
            txtName  : 'Hieu Tran',
            txtPass : '2512hieuA',
            txtIdea : 'I hava an idea , become an fuck-boy',
            gender : 'Male',
            language : 'Javascript'
        }
        this.onPressSubmit = this.onPressSubmit.bind(this);
        this.changeContent = this.changeContent.bind(this);

    }
    onPressSubmit(e){
       e.preventDefault()
       console.log(e.target.name)
        this.setState({
            [e.target.name]  : e.target.value
        })

        console.log(this.state);
    }
    changeContent(e){
        this.setState({
            [e.target.name]  : e.target.value
        })
    }
    render() {
        return (
            // <div>
                
            // </div>

            <form className="form" onSubmit = {this.onPressSubmit}>
                <div className="form-group">
                    <label >Name</label>
                    <input type="text" 
                        name="txtName"  
                        className="form-control" 
                        placeholder="Enter your Name"  
                        value = {this.state.txtName}
                        onChange = {this.changeContent}
                    />
                </div>
                <div className="form-group">
                  <label >Password</label>
                  <input type="password" 
                        className="form-control" 
                        name="txtPass" 
                        placeholder = "Enter Your Pass" 
                        value = {this.state.txtPass} 
                        onChange = {this.changeContent}
                  />
                </div>
                <div className="form-group">
                  <label >Your Idea</label>
                  <textarea 
                            className="form-control" 
                            name="txtIdea"  rows="3" 
                            value = {this.state.txtIdea}
                            onChange = {this.changeContent}
                  ></textarea>
        
                </div>
                <div className="form-check" onChange = {this.changeContent}>
                    <label className="form-check-label">
                    <input type="radio" className="form-check-input" name="gender" value = "Male" defaultChecked = {this.state.gender === "Male" ? true :false } />
                        Male
                    <br/>
                    <input type="radio" className="form-check-input" name="gender" value = "Female" defaultChecked = {this.state.gender === "Female" ? true :false }/>
                        Female
                    <br/>
                    <input type="radio" className="form-check-input" name="gender"  value = "Tbd" defaultChecked = {this.state.gender === "Tbd" ? true :false }/>
                        tbd
                    <br/>
                  </label>
                </div>

                <div className="form-group" onChange = {this.changeContent}>
                  <label>Choose Language</label>
                  <select className="form-control" name="language" value = {this.state.language} onChange = {this.changeContent}>
                    <option value = "Java" >Java</option>
                    <option value = "Javascript">Javascript</option>
                    <option value = "C Shaft" >C Shaft</option>
                  </select>
                </div>
                <button type="reset" className="btn btn-primary">Reset</button>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            
        );
    }
}

export default form;