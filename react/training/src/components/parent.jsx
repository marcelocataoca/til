import React from 'react'
import { childrenWithProps } from '../util/utils'

export default props =>
<div>    
    <h1> {props.name} {props.lastname}</h1>
    <h2>Childrens</h2>
    <ul>
        {childrenWithProps(props)}
    </ul>    
</div>