import './css/processmap.css';
import './css/navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import NavigationBar from './navbar/navBar';
import ViewsBar from './viewbar/ViewsBar';
import ProcessTimeMap from './procesmap/ProcessTimeMap'
import ProcessMap from './procesmap/ProcessMap';
import ProcessAccordion from './navbar/ProcessAccordion';

const App = () => {
    const [currentViewTab, setCurrentViewTab] = useState(1); //1 is main processes view, 2 is timeline view
    const [metaViewEnabled, setMetaViewEnabled] = useState(false); //state for when clicking meta view tab
   
    const handleSwitchProcessView1 = () => {
        setCurrentViewTab(1);
      };
    const handleSwitchProcessView2 = () => {
        setCurrentViewTab(2);
      };

    return ( // This is the main div grid system, all parent views are here
        <div> 
             <div className="parent"> 
                <NavigationBar/>
                <div className="views"><ViewsBar 
                handleSwitchProcessView1={handleSwitchProcessView1}
                handleSwitchProcessView2={handleSwitchProcessView2}></ViewsBar></div>
                <div className="cut1">
                <div class="parent">
                    <div class="processes"> 
                    <ProcessAccordion data={{title: "O2C", inside: ['P2D','D2R'],color: 'blue'}} />
                    <ProcessAccordion data={{title: "P2D", inside: ['D2R'],color: 'red'}} />
                    <ProcessAccordion data={{title: "D2R", inside: ['P2D'],color: 'purple'}} />
                    </div>
                        {metaViewEnabled ? (
                        <div>
                            <div class="processMapMetaOpen">
                            {currentViewTab === 1 ? (
                                <div>
                                    <ProcessMap></ProcessMap>
                                    <div className="meta">asas</div>
                                </div>
                            ) : (
                            <ProcessTimeMap></ProcessTimeMap>
                            )}
                        </div>
                    </div>
                    ) : (
                    <div class="processMapMetaClosed">
                    {currentViewTab === 1 ? <ProcessMap></ProcessMap> : <ProcessTimeMap></ProcessTimeMap>}
                    </div>
                    )}
                </div>
                </div>
                <div className="cut2"></div>
                <div class="cut3"></div>
            </div>
        </div>
    );
};

export default App;
