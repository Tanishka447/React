import Hello from "./assets/Hello";
import Kgbut from "./assets/kgbut";
import Random from "./assets/Random";

function App(){
  return <div><h1>
  Hello World
</h1>
<button>subscribe</button>
<Kgbut></Kgbut>
<Hello></Hello>
<Random></Random>
<button type="button" className="btn btn-primary">Primary</button>
<button type="button" className="btn btn-secondary">Secondary</button>
<button type="button" className="btn btn-success">Success</button>
<button type="button" className="btn btn-danger">Danger</button>
<button type="button" className="btn btn-warning">Warning</button>
<button type="button" className="btn btn-info">Info</button>
<button type="button" className="btn btn-light">Light</button>
<button type="button" className="btn btn-dark">Dark</button>

<button type="button" className="btn btn-link">Link</button>
</div>
}

export default App;