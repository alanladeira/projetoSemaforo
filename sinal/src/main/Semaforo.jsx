import React, {Component} from 'react'
import Luzes from '../components/Luzes'
import './Semaforo.css'


export default class Semaforo extends Component{

    state = {
        aberto: true,
        amarelo: false,
        vermelho: false,        
    }

    constructor(props){
        super(props);

        this.trocarSinal = this.trocarSinal.bind(this)    
      
    }

    trocarSinal(){
        if(this.state.aberto){
            this.setState({aberto:false, amarelo:true, vermelho:false})
        } else if(this.state.amarelo){
            this.setState({aberto: false, amarelo: false, vermelho:true})
        } else if(this.state.vermelho){
            this.setState({aberto: true, amarelo: false, vermelho: false})
        }
        
    }

    componentDidMount() {
        setInterval(this.trocarSinal, 2000);
      }

        

    render(){
        return (
            <div>
                <div className="semaforo">
                    <Luzes estado={this.state.aberto ? 'verde' : 'apagado'}/>
                    <Luzes estado={this.state.amarelo ? 'amarelo' : 'apagado'}/>
                    <Luzes estado={this.state.vermelho ? 'vermelho' : 'apagado'}/>
                </div>
            </div>
        )
    }
}