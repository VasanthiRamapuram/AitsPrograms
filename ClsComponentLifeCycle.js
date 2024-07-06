import React from "react";
class ClsComponentLifeCycle extends React.Component{
    constructor(props){
        super(props)
        this.state={Name:' '};
        this.fnUpdateName=this.fnUpdateName.bind(this);
        this.fnUpdateName1=this.fnUpdateName1.bind(this);
    }
    fnUpdateName(event){
        this.setState({Name:event.target.value});
    }
    fnUpdateName1(event){
        alert("Name is:"+this.state.Name);
    }
    ComponentDidMount(){
        console.log("Calling Component Did Mount Method");
    }
    ShouldComponentUpdate()
    {
        console.log("Calling should Component Update Method");
        return true;
    }
    ComponentDidUpdate()
    {
        console.log("Calling Component Did Update Method");
    }
    ComponentWillUnmount()
    {
        console.log("Callling Component Will unmount Method");
    }
    render()
    {
        return(
            <div>
                <h1>Enter Name</h1>
                <input type="text" value={this.state.Name}onChange={this.fnUpdateName}/>
                <h1>{this.state.Name}</h1>
                <button onClick={this.fnUpdateName1}>Click</button>
            </div>
        );
    }
}
export default ClsComponentLifeCycle;