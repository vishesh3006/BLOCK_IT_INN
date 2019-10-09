import React , {Component} from 'react'
import { Pie } from 'react-chartjs-2'

class Chart extends Component{

    constructor(props){
        super(props)
            this.state = {
                labels : ['lable1' , 'label2' , 'label3', 'label4'],
                datasets :[{
                    data : [200,400,700,600],
                    backgroundColor: ['red','blue','green','pink']
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