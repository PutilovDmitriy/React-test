import React from "react";
import './SimpleForm.css';
import Greetings from '../Greetings/Greetings';
import TextField from "../TextField/TextField";

class SimpleForm extends React.Component {

    state = {
      logins: ['9991255722', '9223260399'],
      passwords:  ['8848', '929699'],
      login: "",  
      loginError: "",
      password: "",
      EntranceError: "",
    };

    // Состояние логина
    onLoginChange = event =>
        this.setState({
            login: event.target.value
    });

    // Валидация логина
    validateLogin = login => {
        const regex = /[0-9]{10}/;

        return !regex.test(login)
            ? "Логин не возможен"
            : "";
    };
    
    // Проверка состояния логина, после выхода из ввода
    onLoginBlur = () => {
        const { login } = this.state;
        const loginError = this.validateLogin( login );    
        return this.setState({ loginError });
        
    };

    // Состояние пароля
   onPasswordChange = event =>
      this.setState({
          password: event.target.value
  });

    // Проверка данных
  onClickButton = ()  => {      
    const { login, password, logins, passwords } = this.state;
    const L = logins.indexOf(login);
    const P = passwords.indexOf(password);
    if (L === P && L !== -1 && P !== -1)  {
      const EntranceError = "";
      return this.setState({ EntranceError });
    }
    else {
      const EntranceError = "Неверный логин или пароль";
      return this.setState({ EntranceError });      
    }       
  };

  render() {
    const {loginError, EntranceError} = this.state;

    return (
      <div className="Form">
      
        <TextField name="login"
                   type="text"
                   placeholder="Введите номер телефона"
                   onChange={this.onLoginChange}
                   onBlur={this.onLoginBlur}
                   error={loginError} />

        <TextField name="password"
                   type="password"
                   placeholder="Пароль"
                   onChange={this.onPasswordChange}
                   onBlur={this.onPasswordBlur} />
        <Greetings className="Entrance"
                   value="Sign in"
                   onClick={this.onClickButton}
                   error={EntranceError}                            
        />
      </div>   
    );
  }
};

export default SimpleForm;
