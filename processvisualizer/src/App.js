import './css/processmap.css';
import './css/navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavigationBar from './navbar/navBar';
import ProcessMap from './procesmap/ProcessMap';


const App = () => {
    return (
        <div>
            <NavigationBar />
            <div className="parent">
                <div className="views">2 </div>
                <div className="processes">3 </div>
                <div className="meta"> 4</div>
                <div class="processmap"><ProcessMap></ProcessMap></div>
            </div>
        </div>
    );
};

export default App;
