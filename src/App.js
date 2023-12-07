import logo from './logo.svg';
import './App.css';
import {design} from "./Style/style";
const App = () => {
  const Inputstyle = {
    fontSize: "20px",
    border: "2px solid #000000",
    padding: "10px 20px",
    borderRadius: "10px",
  };
  return ( 
        <div style={{ marginTop: "60px", border: "2px", margin: "auto", width: "30%", padding: "20px",textAlign: "center", borderRadius: "15px", backgroundColor: "lightgrey",}}>
            <div>
              <h1> Login Form</h1>
              <input 
                type="email"
                placeholder="Enter Email"
                style={Inputstyle}
              />
              <br />
              <br/>
              <input 
                type="password"
                placeholder="Enter Password"
                style={Inputstyle}
              />
            </div>
            <a href="#">Forgot Password?</a>
            <br></br>
            <br></br>
            <center>
            <button style={design.Login}>
              Login
            </button>
            <p>Don't have an account? <a href="#">Sign Up</a></p>
            <p>-or-</p>
            <button style={design.Facebook}>
              Login with Facebook
            </button>
            <button style={design.Google}>
              Login with Google
            </button>
            
            </center>
            
            
        </div>
  )
}
export default App;

