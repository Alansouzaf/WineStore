import styles from "components/Register/register.module.css";
import { useNavigate } from "react-router-dom";
//import handleInputChange from "./Input";
//import registerCustomer from "./Input";
var nomefinal = "";
var cpffinal = "";
var emailfinal = "";
var passfinal="";
<<<<<<< HEAD
=======
var datefinal="";
>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6
function registerCustomer ()
{
    console.log(nomefinal);
    console.log(cpffinal);
    console.log(emailfinal);
    console.log(passfinal);

    fetch('http://localhost:5000/api/register', {
  method: 'POST',
  headers: {
    //'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    cpf: cpffinal,
    nome: nomefinal,
    email: emailfinal,
<<<<<<< HEAD
    pass: passfinal
=======
    pass: passfinal,
>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6
  })
})
}
const handleInputChange = (e) => {
  const {id , value} = e.target;
  if(id === "cpf"){
      cpffinal=value;
  }
  if(id === "nome"){
    nomefinal=value;
  }
  if(id === "email"){
    emailfinal=value;
  }
<<<<<<< HEAD
=======
  if(id === "pass"){
    passfinal=value;
  }
>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6
}

function Register() {
  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <div className={styles.divRegister}>
        <h1 onClick={() => navigate("/")} className="logo">
          WineStore
        </h1>
        <h1 className={styles.registerTitle}>Criar uma conta</h1>
        <p>Preencha com seus dados</p>
        <form className={styles.form}>
          <label>
            CPF
            <input type="text" id="cpf" onChange = {(e) => handleInputChange(e)}/>
          </label>
          <label>
            Email
            <input type="text"  id="email" onChange = {(e) => handleInputChange(e)} />
          </label>
          <label>
            Nome completo
            <input type="text" id="nome" onChange = {(e) => handleInputChange(e)}/>
<<<<<<< HEAD
          </label>
          <label>
            Senha
            <input type="password"  id="sobrenome" onChange = {(e) => handleInputChange(e)} />
=======
          </label>
          <label>
            Data de nascimento
            <input type="date" id="borndate" onChange = {(e) => handleInputChange(e)}/>
          </label>
          <label>
            Senha
            <input type="password"  id="pass" onChange = {(e) => handleInputChange(e)} />
>>>>>>> ffdb430140e5c1b00864bfc0f94cb8b1643730c6
          </label>
          <label>
            Confirmar Senha
            <input type="password"  id="sobrenome" />
          </label>

          <button onClick={() => registerCustomer()} type="submit" className="button buttonPrimary">
            Criar conta
          </button>
           <p onClick={(() => navigate("/entrar"))}>
            Já psuí acesso? Clique para entrar </p> 
           
          
        </form>
      </div>
    </main>
  );

}

export default Register;
