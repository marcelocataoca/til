import React, {Component} from 'react'

export default class Salute extends Component{
    render(){
        const {type, name} = this.props
        return 
            <div>
                <h1> {type} {name}! </h1>
                <hr></hr>
                
            </div>
    }
} 