import Typist from 'react-typist';

import './App.css';
import 'react-typist/dist/Typist.css'

function App() {
  const product = [
    "Artifical Intelligence",
    "Machine Learning",
    "Chatbot",
    "Frontend",
    "Backend",
    "YOUR NEXT PRODUCTS"
  ]
  return (
    <div className="App">
      <header className="App-header">
        <div className="main-content">
          <span className="robot-head"><img src={process.env.PUBLIC_URL + '/avatar.png'} alt="Avatar" /> </span>
          <h1>Hola! I'm Diky Hadna!</h1>
          <h3>and I code
            <Typist className="code-name" cursor={{ blink: true }}>
              {product[0]}
              <Typist.Backspace count={product[0].length} delay={1000} />
              {product[1]}
              <Typist.Backspace count={product[1].length} delay={1000} />
              {product[2]}
              <Typist.Backspace count={product[2].length} delay={1000} />
              {product[3]}
              <Typist.Backspace count={product[3].length} delay={1000} />
              {product[4]}
              <Typist.Backspace count={product[4].length} delay={1000} />
              {product[5]}
            </Typist>
          </h3>
          <p>
            Uh-oh, while this page is being developed, why don't we become an internet BFF? Yayy!
        </p>
          <a href="mailto:dikyhadna@gmail.com" target="_blank" rel="noreferrer">Email</a> &nbsp; 
          <a href="https://linkedin.com/in/dikyhadna" target="_blank" rel="noreferrer">Linkedin</a> &nbsp; 
          <a href="https://github.com/dkhd" target="_blank" rel="noreferrer">Github</a>
        </div>
      </header>
    </div>
  );
}

export default App;
