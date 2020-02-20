import React from "react";
import './OneService.css';
import TextField from '../TextField/TextField';
import ButtonT from '../Buttons/ButtonT/ButtonT'
// import { Redirect } from "react-router-dom";

class OneService extends React.Component{
    
    onClickButton = () => {
        return alert("Отправил");
    }
        render() {
        return(
            <div className='Service'>
                <h1>Service</h1>
                <div className='FormService'>   
                    <TextField
                        name="Номер авто"
                        placeholder="a000aa"
                        type="text"
                    />
                    <TextField
                        name="Объем заправки"
                        placeholder="00"
                        type="number"
                        min="0"                         
                    />
                    <TextField
                        name="Мойка"
                        type="number"
                        placeholder="000"
                        min="0"           
                    />
                    <div className="Checkbox">
                    <TextField 
                        name="Документы"
                        type="checkbox"            
                    />
                    <TextField
                        name="Аптечка"
                        type="checkbox"              
                    />
                    <TextField 
                        name="Огнетушитель"
                        type="checkbox"              
                    />
                    <TextField
                        name="Запаска"
                        type="checkbox"                   
                    />
                    <TextField
                        name="ОЖ"
                        type="checkbox"                   
                    />
                  </div>
                    <TextField
                        name="Примечания"
                        type="text"       
                     />
                    <ButtonT
                        value="Отправить"
                        link="/service"
                        onClick={this.onClickButton}
                    />
                </div>
            </div>
)}
};

export default OneService;