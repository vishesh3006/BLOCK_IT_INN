import React , {Component} from 'react'
import { Pie } from 'react-chartjs-2'

class Chart extends Component{

    constructor(props){
        super(props)
            this.state = {
                labels : ['Company vulnerability to cyber attacks' ,
                        'Internal controls and data protection policies' , 
                        'Cost of recovery from cyber attack', 
                        'Compiling with global information security regulations',
                        'IRS vulnerability to cyber attacks',
                        'Obtaining cyber insurance'],
                datasets :[{
                    data : [40,31,16,9,4,1],
                    backgroundColor: ['red','blue','green','pink', 'grey', 'violet']
                }]
            
        }
    }

    render(){
        return(
            <div>
                <Pie data={{
                    labels: this.state.labels,
                    datasets : this.state.datasets
                }}
            />
            </div>
        )
    }

}

export default Chart