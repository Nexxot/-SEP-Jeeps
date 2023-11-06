import './css/processmap.css';
import './css/navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavigationBar from './navbar/navBar';
import ProcessMap from './procesmap/ProcessMap';


const App = () => {
    return (
        <div>
             <div className="parent">
                <NavigationBar />
                <div className="views"></div>
                <div className="processes">
                    <div class="parent">
                        <div class="div1"> </div>
                        <div class="div2"> </div>
                        <div class="div3"><ProcessMap></ProcessMap> </div>
                    </div>
                </div>
                <div className="meta"></div>
                <div class="processmap"></div>
            </div>
        </div>
    );
};

export default App;
