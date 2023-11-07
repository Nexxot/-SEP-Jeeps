import './css/processmap.css';
import './css/navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import NavigationBar from './navbar/navBar';
import ProcessMap from './procesmap/ProcessMap';


const App = () => {

    const [enabledProcessViews, setEnabledProcessViews] = useState([]);
    const initValuesProcessView = [];

    const updateEnabledProcessViewState = (newState) => {
        setEnabledProcessViews(newState);
      };

    return (
        <div>
             <div className="parent">
                <NavigationBar updateState={updateEnabledProcessViewState} initValuesProcessView={initValuesProcessView}/>
                <div className="views"></div>
                <div className="cut1">
                    <div class="parent">
                        <div class="processes"> </div>
                        <div class="meta"> </div>
                        <div class="processMap"><ProcessMap></ProcessMap> </div>
                    </div>
                </div>
                <div className="cut2"></div>
                <div class="cut3"></div>
            </div>
        </div>
    );
};

export default App;
