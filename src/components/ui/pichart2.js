import { Pie3D } from 'react-pie3d'
import  React , { Component } from 'react';

const data = [
    { value: 10, label: 'apples', color: 'red' }, 
    { value: 20, label: 'bananas', color: 'green' },
    { value: 30, label: 'oranges', color: 'blue' },
  ]

  const config = {}

  class PieChart extends Component{

    render(){
        return(
            <Pie3D config={config} data={data} />
        )
    }
  }

export default PieChart