let img;
try{
  img = require('./assets/img/out.png');
}catch(e){
  img = null;
}

function App() {
  return (
    <div className="App">
      {
        (img !== null) 
        ?<img src={img} alt="qr" />
        :<h1>Conectado</h1>
      }
    </div>
  );
}

export default App;
