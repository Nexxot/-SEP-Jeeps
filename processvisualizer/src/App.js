import './css/processmap.css';
import ProcessMap from './procesmap/ProcessMap';

function App() {
  return (
    <div class="parent">
     <div class="headnotes">1 </div> 
      <div class="views">2 </div>
      <div class="processes">3</div>
      <div class="meta">4</div>
      <div class="processmap"><ProcessMap></ProcessMap></div>
    </div>
  );
}

export default App;
