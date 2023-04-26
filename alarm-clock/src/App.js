import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './js/main.js';
import Clock from './Clock';
import ClockFace from './ClockFace';

function App() {
  return (
    <>
      <ClockFace />
      <Clock />
    </>  
  );
}

export default App;
