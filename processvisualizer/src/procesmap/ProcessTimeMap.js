import React, { useState } from 'react'
import NodeTimeLine from './nodetypes/NodeTimeLine';
import NodeMonth from './nodetypes/NodeMonth';
import {Gantt} from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import "./css/timemap.css";
const nodeTypes = { nodeTimeLine: NodeTimeLine, nodeMonth: NodeMonth }
//!!!!!! Split zählt auch die erste id, also den node der schon existiert, check einbauen nicht vergessen

export default function ProcessTimeMap({createTimelineTask,  loadedData, 
  tasks, setTasks, 
  clickedNodeID, setClickedNodeID, 
  currentPage, setCurrentPage}){
  const [selectedTask, setSelectedTask] = useState(null);
  const [viewMode,setViewMode]=useState('Month');//Change the view from Month to Year and the other way around
  const [openClickedTasks, setOpenClickedTasks] = useState([]); // Save the clicked task that closes all the lower tasks seperately
  const [closedTasks, setClosedTasks] = useState([]); // Save tasks that are closes down in timeline

  function handleTaskClick(task){

    if(currentPage === "mainMetaClosed"){
      setCurrentPage("mainMetaOpened");
    }else{
      if(clickedNodeID === task.id){
        setCurrentPage("mainMetaClosed");
      }
    }
    setClickedNodeID(task.id); // After so that check for current node id works
  };

  //-------------------------EXPANDING TASKS DOESNT WORK----------------------------------------------------------------------------------------------------------
  
  //-------------------------EXPANDING TASKS DOESNT WORK----------------------------------------------------------------------------------------------------------
  
  //-------------------------EXPANDING TASKS DOESNT WORK----------------------------------------------------------------------------------------------------------


  function handleTaskDoubleClick(task){
    const matchingData = loadedData.find(data => data.id === task.id);
    const dependancyValue = matchingData?.dependant;
    const dependencies = dependancyValue.split(' ').map(id => id.trim());

    if(openClickedTasks.includes(task.id)){ // If task is closed, open again
      openTaskDependancies(task);
      setOpenClickedTasks(prevClosedTasks => {
        return prevClosedTasks.filter(taskID => taskID !== task.id);
      });
    }else{ // If task is open, close it
      if(dependencies !== "" && loadedData.some(data => data.dependant.split(' ').includes(task.id))){
        closeTaskDependancies(task);
        setOpenClickedTasks(prevClosedTasks => {
          return [...prevClosedTasks, task.id];
        });
      }
    }
  };

  function closeTaskDependancies(originalTask){

    const idsToRemove = new Set();

    const hp = loadedData.find(data => data.id === originalTask.id).hp; // Need same hp check, else all the other dependencies also close

    // Helper function to mark a task and its dependents for removal
    function markForRemoval(taskId) {
    idsToRemove.add(taskId);

    // Find tasks dependent on this taskId and mark them for removal recursively
    loadedData.forEach(data => {
    const dependencies = data.dependant.split(' ').map(id => id.trim());

     // Check if the dependency is not the current task ID to avoid marking it
    if (dependencies.includes(taskId) && originalTask !== data.id) {
      markForRemoval(data.id);
      }
    });
  }

  // Loop through tasks and loadedData to mark tasks for removal
  tasks.forEach(task => {
    loadedData.forEach(data => {
      const dependencies = data.dependant.split(' ').map(id => id.trim());

      // Check if the dependency is not the current task ID to avoid marking it
      if (dependencies.includes(task.id) && originalTask.id !== data.id && hp === data.hp) {
        markForRemoval(data.id);
      }
    });
  });
  // Remove marked tasks from the tasks array
  const filteredTasks = tasks.filter(task => !idsToRemove.has(task.id));
  idsToRemove.forEach((id) => { // Add all ids to closedTasks
    setClosedTasks(prevClosedTasks => {
      return [...prevClosedTasks, id];
    });
  });

  setTasks(filteredTasks);
  }

  function openTaskDependancies(originalTask) {
    
    const hp = loadedData.find(data => data.id === originalTask.id).hp; // Need same hp check, else all the other dependencies also close
    // Create an array to store the task objects
    const tasksToCreate = [...loadedData].filter((data) => { // Filter out all tasks that are closed
      const isClosedTask = closedTasks.includes(data.id);

      return (!(isClosedTask));
    });

    // Helper function to add a task and its dependents to the array
    function addTaskAndDependencies(taskId) {
      const task = loadedData.find(data => data.id === taskId);
      if(task){
        if(task.id !== originalTask.id){
          tasksToCreate.push(task);
          setClosedTasks(prevClosedTasks => {
            return prevClosedTasks.filter(taskID => taskID !== task.id); // Remove the task from closed tasks
          });
        }
        // Add dependents recursively
        const dependencies = task.dependant.split(' ').map(id => id.trim());
        dependencies.forEach(dependencyId => {
          if (!(tasksToCreate.some(t => t.id === dependencyId)) && hp === task.hp) {
            console.log("ADDED: " + hp + " and the task had: " + task.hp)
           addTaskAndDependencies(dependencyId);
          }
        });
      }
  }

  // Add the initial task and its dependencies
  addTaskAndDependencies(originalTask.id);

  // Call createTimelineTask with the array of tasks
  createTimelineTask(tasksToCreate);

    // console.log("Added: " + JSON.stringify(newTasks, null, 2));
  }

  
  //-------------------------EXPANDING TASKS DOESNT WORK----------------------------------------------------------------------------------------------------------
  
  //-------------------------EXPANDING TASKS DOESNT WORK----------------------------------------------------------------------------------------------------------
  
  //-------------------------EXPANDING TASKS DOESNT WORK----------------------------------------------------------------------------------------------------------

  //Change the view from Month to Year and the other way round
  function updateViewMode(viewModeEnum){
    setViewMode(viewModeEnum)
  }

    return (
      <div style={{ width: '100vw', height: '100vh'}} data-testid="process-timeline-id" >
        <Gantt 
          tasks={tasks} 
          onClick={handleTaskClick} 
          // TODO Expand function onDoubleClick={handleTaskDoubleClick}
          listCellWidth='' 
          viewMode={viewMode} 
          columnWidth='325' 
          barFill={'100'}
        />
        <div className="fixed-buttons-container">
          <button onClick={() => updateViewMode('Month')}className='view'>Month</button>
          <button onClick={() => updateViewMode('Year')} className='view'>Year</button>
       </div>
      </div>
    )
}