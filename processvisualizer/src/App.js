import 'bootstrap/dist/css/bootstrap.min.css';
import './gridCss/gridLayoutMain.css'
import React, { useState, useEffect } from 'react';
import NavigationBar from './bootstrapComponents/navbar/navBar';
import ViewsBar from './bootstrapComponents/ViewsBar';
import AccordionsComponent from './bootstrapComponents/AccordionsComponent';
import MetaView from './procesmap/MetaView';
import ProcessTimeMap from './procesmap/ProcessTimeMap'
import UserTable from "./bootstrapComponents/UserManagement";
import ForceDirectedGraph2D from './procesmap/ForceDirectedGraph2D';
import ForceDirectedGraph3D from './procesmap/ForceDirectedGraph3D'
import LoadedProcessData from './processData.json'

const App = () => {

    const [loadedData, setLoadedData] = useState([]); // loaded data from database in here
    const [processHPs, setProcessHPs] = useState([]); // save all registered main processes

    const [currentViewTab, setCurrentViewTab] = useState(1); // 1 is main processes view 2D , 2 is main process view 3D,3 is timeline view
    const [currentPage, setCurrentPage] = useState("mainMetaClosed") // Which page is opened currently


    const [nodes, setNodes] = useState([]); // Put here so it doesnt go into a rerender loop in graph
    const [links, setLinks] = useState([]); // Put here so it doesnt go into a rerender loop in graph
    const [cooldownTicks, setCooldownTicks] = useState(undefined); //force motion ticks for graphs

    const [tasks, setTasks] = useState([]); // All the tasks for the timeline

    const [clickedNodeID, setClickedNodeID] = useState(""); // Save the current clickedNode for meta access
    const [viewClickCounter, setViewClickCounter] = useState(0); // Counter for force bug in 2D and 3D graph

    function createNodesAndLinks() {
        const existingNodeIds = nodes.map((node) => node.id);

        // Create nodes
        const newNodes = loadedData
        .filter((process) => !existingNodeIds.includes(process.id))
        .map((process) => ({
          id: process.id,
          group: 1,
          color: process.dependant.split(' ').filter((id) => id !== '').length > 1
            ? 'black'  // Set color to black if the node has more than one dependency, else rectangles not clickable
            : getColorFromHP(process.hp)  // Use color based on HP otherwise
        }));

        // Create links based on dependant values
        const newLinks = loadedData
        .filter((process) => process.dependant !== '')
        .flatMap((process) => {
          const dependantIds = process.dependant.split(' ').filter((id) => id !== '');

          return dependantIds.map((dependantId) => {
            const dependentNode = loadedData.find((node) => node.id === dependantId);
            const linkColor = dependentNode.dependant.split(' ').filter((id) => id !== '').length > 1
              ? 'black'  // Set link color to black if dependent node has more than one dependency
              : getColorFromHP(dependentNode.hp);  // Use color based on HP otherwise

            return {
              source: dependantId,
              target: process.id,
              value: 3,
              color: linkColor
            };
          });
        });

        // Update state with new nodes and links
        setNodes((prevNodes) => [...prevNodes, ...newNodes]);
        setLinks((prevLinks) => [...prevLinks, ...newLinks]);
      }

    function createTimelineTask(dataArray) {
        const taskArray = dataArray.map(task => {
          const startArray = task.start.split(',').map(str => parseInt(str.trim(), 10));
          const endArray = task.end.split(',').map(str => parseInt(str.trim(), 10));
    
        // Subtract 1 from the month value because date is 0 indexed
        startArray[1] = startArray[1] - 1;
        endArray[1] = endArray[1] - 1;

          const timelineTask = {
            start: new Date(...startArray),
            end: new Date(...endArray),
            name: task.name,
            id: task.id,
            type: 'task',
            progress: 100,
            isDisabled: true,
            styles: { progressColor: getColorFromHP(task.hp), progressSelectedColor: getColorFromHP(task.hp) }
          };
      
          return timelineTask;
        });
      
       setTasks(taskArray);
    };  

    function createUniqueHps(){
      const uniqueHPs = Array.from(new Set(loadedData.map(process => process.hp))); // Extract unique "hp" values from the JSON data
      setProcessHPs(uniqueHPs); // Set the state with unique "hp" values
    }  

    function getColorFromHP(hp){
      switch(hp){
        case 'HP 1':
          return '#1233db'
        case 'HP 2':
          return '#5a0bd9'
        case 'HP 3':
          return '#b5aa0b'
        case 'HP 4':
          return '#e30b33'
        case 'HP 5':
          return '#056e17'
        default:
          return '#000000'
      }
    }

    function switchToView(view){
      setCooldownTicks(undefined); // Set not to 0 else it stops force 
      if(((currentViewTab === 2 && view === 1) || ( currentViewTab === 1 && view === 2)) || (currentViewTab === 3
        && viewClickCounter >= 1)){ // Need this if statement, else when switching between views with buttons, force gets reapplied. Stop force after second switch
        setViewClickCounter(viewClickCounter + 1);
        if(viewClickCounter >= 2){
          setCooldownTicks(0);
        }
      }
      setCurrentViewTab(view);
    }

    useEffect(() => {//Update loadedData on every render of App
        const dataNodes = LoadedProcessData.nodes;
        setLoadedData(dataNodes);
    }, []);

    useEffect(() => {// Wait for loadedData to load
        createNodesAndLinks();
        createTimelineTask(loadedData);
        createUniqueHps();
    }, [loadedData]);

    return ( // This is the main div grid system, all parent views are here, maybe make a component for it instead of similair code twice
        <>      
                {currentPage !== "userManagement" && // check here, else userManagement doesn't open
                <div className={currentPage === "mainMetaOpened" ? "mainGridDivMetaOpen" : "mainGridDivMetaClosed"}>
                  <div className="Nav">
                      <NavigationBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                  </div>
                  <div className="Views">
                      <ViewsBar
                          switchToView={switchToView}>
                      </ViewsBar>
                  </div>
                  <div className="List">
                      <AccordionsComponent/>
                  </div>
                  <div className="Map">
                     {currentViewTab === 1 &&
                      <ForceDirectedGraph2D viewClickCounter={viewClickCounter} clickedNodeID={clickedNodeID} setClickedNodeID={setClickedNodeID} cooldownTicks={cooldownTicks} setCooldownTicks={setCooldownTicks} 
                      currentPage={currentPage} setCurrentPage={setCurrentPage} 
                      loadedData={loadedData} nodes={nodes} links={links}/> 
                     }
                     {currentViewTab === 2 &&
                      <ForceDirectedGraph3D clickedNodeID={clickedNodeID} setClickedNodeID={setClickedNodeID} cooldownTicks={cooldownTicks} setCooldownTicks={setCooldownTicks} 
                      currentPage={currentPage} setCurrentPage={setCurrentPage} 
                      loadedData={loadedData} nodes={nodes} links={links}/> 
                     }
                     {currentViewTab === 3 &&
                      <ProcessTimeMap createTimelineTask={createTimelineTask} loadedData={loadedData} tasks={tasks} setTasks={setTasks} clickedNodeID={clickedNodeID} setClickedNodeID={setClickedNodeID} currentPage={currentPage} setCurrentPage={setCurrentPage}/> 
                     }
                  </div>
                  {currentPage === "mainMetaOpened" &&
                  <div className="Info">
                    <MetaView loadedData={loadedData} clickedNodeID={clickedNodeID}></MetaView>
                  </div>}
              </div>
            }
            {currentPage === "userManagement" &&
              <div className="mainGridDivUserManagement">
                  <div className="Nav">
                      <NavigationBar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
                  </div>
                  <div className="Views">
                      <ViewsBar
                          switchToView={switchToView}>
                      </ViewsBar>
                  </div>
                  <div>
                      <UserTable></UserTable>
                  </div>
              </div>
            }
        </>    
    );
};

export default App;
