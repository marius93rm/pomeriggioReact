import './App.css';

const Header = ({ titolo }) => {
  return (
    <header>
      <h1>{titolo}</h1>
    </header>
  );
}

const TechList = (props) => {
  return (
    <ul>
      {props.techs.map(tech => <Tech key={tech} />)}
    </ul>
  );
}

const Tech = (props) => {
  return (
    <li>{props.key}</li>
  );
}

function BenvenutoUtente(props) {
  return <h3>Benvenuto Utente</h3>;
}

function BenvenutoOspite(props) {
  return <h3>Benvenuto Ospite</h3>;
}

function CasellaDiPosta({ contatore }) {
  return (
    <div>
      <h1>Ciao!</h1>
      
      
      {contatore > 0 && (
        <h2>
          Hai {contatore} messaggi non letti.
        </h2>
      )}


    </div>);
}


function Benvenuto({ utente }) {
  if (utente.isLogged) {
    return (
      <>
        <BenvenutoUtente />
        <CasellaDiPosta conteggioMail={utente.conteggioMail} />
      </>
    );
  }
  return <BenvenutoOspite />;
}


function App() {
  let techs = ['Node.js', 'ReactJS', 'React Native'];

  const utente = {
    nome: 'Mario',
    cognome: 'Rossi',
    email: 'marius93rm@gmail.com',
    conteggioMail: 33,
    isLogged: true
  }

  return (
    <div className="App">
      <Header title="Hello World" />
      <TechList techs={techs} />
      <Benvenuto utente={utente} />
    </div>
  );
}

export default App;
