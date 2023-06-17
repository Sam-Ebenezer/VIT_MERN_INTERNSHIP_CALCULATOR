import {Component} from "react"
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCalculator, faClock } from '@fortawesome/free-solid-svg-icons'

class Main extends Component{
    constructor(props){
        super(props)
        this.state={equation:" ",val:"",display:"<li>"}
    }

    
    DisplayHistory=()=>{
       document.getElementById("buttons1").classList.add("hide_calc")
       document.getElementById("buttons2").classList.add("hide_calc")
       document.getElementById("disp_box").classList.remove("calc_display")
       document.getElementById("disp_box").classList.add("show_history")
        //document.getElementById("buttons1").style.display="block";
        //document.getElementById("buttons2").style.display="none";
        //document.getElementById("disp_box").style.height="100%";
    }

    DisplayCalculator=()=>{
        document.getElementById("buttons1").classList.remove("hide_calc")
       document.getElementById("buttons2").classList.remove("hide_calc")
       document.getElementById("disp_box").classList.add("calc_display")
       document.getElementById("disp_box").classList.remove("show_history")
    }

    AddValue=(event)=>
    {
        let v=event.target.value

        if(v!=="=" && v!=="DEL"){
            this.setState(
                {
                equation : this.state.equation+v,
            }
               
            )
            this.DisplayScreen(this.state.equation+v,0)
        }



        else if(v==="=")
        {
            
            // eslint-disable-next-line
            let result=""

            try{
                result=eval(this.state.equation)
            }
            catch(err){
                result="INVALID SYNTAX!"
            }
            
            this.setState(
                {
                equation : " ",
                val: result,
                
                
            }
               
            )
            this.DisplayScreen(this.state.equation+"<br />="+result,1)
        }


        else{
            this.setState(
                {
               equation: this.state.equation.slice(0,this.state.equation.length -1),
            }
               
            )

            this.DisplayScreen(this.state.equation.slice(0,this.state.equation.length -1),0)
        }

      

       
    }



    CalculatorButton=(x,w,h)=>
    {
        return(
            
            <button type="button" className="calc_button m-0 p-0" value={x} style={{width: w,height: h}}
            onClick={this.AddValue}
            >{x}</button>
        )
    }


    DisplayScreen=(txt,o)=>{

        if(o===1){
           
            let div    = document.getElementById("disp_result");
            let lastchild = div.children[div.children.length - 1];
            lastchild.innerHTML=txt
            let p = document.createElement("p");
            p.appendChild(document.createTextNode(""));
            let border_line=document.createElement("div")
            border_line.classList.add("sep_line")
            div.appendChild(border_line)
            div.appendChild(p);
            
            let element = document.querySelector('#disp_box');

            element.scrollTop = element.scrollHeight;
        }
        else{
            
            let div    = document.getElementById("disp_result");
            if(div.children.length===0){
                let p = document.createElement("p");
                p.appendChild(document.createTextNode(""));
                div.appendChild(p);
            }

            let lastchild = div.children[div.children.length - 1];
            lastchild.innerHTML=txt

            let element = document.querySelector('#disp_box');

            element.scrollTop = element.scrollHeight;
        }
       
    }


    render(){
        return(
            <div className="container row m-auto">
                <h1 className="text-center">Calculator</h1>
                <span className="col-sm"></span>
                <span className="col-sm-3  row">

                    <div className="top_content px-0 py-2">
                        <span>
                            <button onClick={this.DisplayHistory} style={{backgroundColor: "black",border:0}}>
                            <FontAwesomeIcon icon={faClock} style={{color: "white",fontSize: "20px"}}/>
                            </button>
                            
                        </span>
                        <span>
                        <button onClick={this.DisplayCalculator} style={{backgroundColor: "black",border:0}}>
                            <FontAwesomeIcon icon={faCalculator} style={{color: "white",fontSize: "20px"}}/>
                            </button>
                        </span>
                    </div>

                    <div className="calc_display" id="disp_box">
                        
                        <div id="disp_result" className="calc_display_div">
                        
                        </div>
                    </div>
                    <span className="col-10 m-0 p-0" id="buttons1">
                    {this.CalculatorButton("7","33.4%","25%")}
                    {this.CalculatorButton("8","33.3%","25%")}
                    {this.CalculatorButton("9","33.3%","25%")}
                    

                    {this.CalculatorButton("4","33.4%","25%")}
                    {this.CalculatorButton("5","33.3%","25%")}
                    {this.CalculatorButton("6","33.3%","25%")}
                    

                    {this.CalculatorButton("1","33.4%","25%")}
                    {this.CalculatorButton("2","33.3%","25%")}
                    {this.CalculatorButton("3","33.3%","25%")}
                    

                    {this.CalculatorButton("0","33.4%","25%")}
                    {this.CalculatorButton(".","33.3%","25%")}

                    {this.CalculatorButton("=","33.3%","25%")}
                    </span>
                    <span className="col m-0 p-0" id="buttons2">
                    {this.CalculatorButton("DEL","100%","20%")}
                    {this.CalculatorButton("/","100%","20%")}
                    {this.CalculatorButton("*","100%","20%")}
                    {this.CalculatorButton("-","100%","20%")}
                    {this.CalculatorButton("+","100%","20%")}
                    </span>

                    <div className="bottom_content px-0 py-2">

                    </div>
                </span>
                <span className="col-sm"></span>
            </div>
        )
    }
}

export default Main