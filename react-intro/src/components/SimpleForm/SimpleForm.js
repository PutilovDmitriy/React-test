import React from "react";
import './SimpleForm.css';
import ButtonT from '../ButtonT/ButtonT';
import TextField from "../TextField/TextField";


class SimpleForm extends React.Component {

    state = {
      logins: ['9991255722', '9223260399'],
      passwords:  ['8848', '929699'],
      login: "",  
      loginError: "",
      password: "",
      EntranceError: "",
      link: "/auth",
      authentic: 0,
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
    onClickButton = () => {
      if (this.authentic === 1) {
      const EntranceError = "";
      return  this.setState({ EntranceError})
      }
      else {
      const EntranceError = "Неверный логин или пароль";
      return this.setState({ EntranceError });
      }
    };
    // Проверка данных
    onMouseOverButton = ()  => {      
    const { login, password, logins, passwords} = this.state;
    const L = logins.indexOf(login);
    const P = passwords.indexOf(password);
    if (L === P && L !== -1 && P !== -1)  {
      const link = "/";
      const authentic = 1;
      return  this.setState({link, authentic })
    }
    else {
      const authentic = -1;
      return  this.setState({ authentic })
    }       
  };

  render() {
    const {loginError, EntranceError, link} = this.state;

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
        <ButtonT className="Entrance"
                   value="Sign in"
                   onClick={this.onClickButton}                   
                   onMouseOver={this.onMouseOverButton}
                   error={EntranceError}
                   link={link}                        
        />
      </div>   
    );
  }
};

export default SimpleForm;
