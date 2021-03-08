import logo from './logo.svg';
import './App.css';
import videonader from './video/nader.mp4'
import imageonader from './imges/reactone.jpg'
function App() {
  return (
    <div className="App">

      <div  className="container">

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="logonader">
  <a className="navbar-brand" href="#">Nader chargui</a>
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Contact Us </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Services</a>
      </li>
      
    </ul>

  </div>
</nav>
      </div>
      <header className="App-header">
      
        
    





      <h1  style={{ textAlign:'center' }}>
        hello react with <span  >nader</span>
      </h1>
       <div  className="videoparent">
       <video  src={videonader}  className="videostyle"  controls="controls" autoPlay="true" height="200px" width="420px" type="video/mp4">

</video>
       </div>

       <section  className="blockone">

       <div className="card" style={{ width:'18rem', height:'30rem' }}>
  <img src={imageonader} className="card-img-top" alt="reactimg"/>
  <div className="card-body">
    <h5 className="card-title">React </h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a  className="btn btn-primary">learn about react</a>
  </div>
</div>
<div className="card" style={{ width:'18rem', height:'30rem' }}>
  <img src='/images/node.jfif' className="card-img-top" alt="reactimg"/>
  <div className="card-body">
    <h5 className="card-title">Node  </h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a  className="btn btn-primary">learn about node</a>
  </div>
</div>
       </section>
      </header>
    </div>
  );
}

export default App;
