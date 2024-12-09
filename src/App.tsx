import React, { useState, useEffect } from 'react';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

import Home from './pages/Home';
import AgregarTarea from './components/Agregar_Tareas/Agregar_Tareas';
import ListaTareas from './components/Lista_Tareas/Lista_Tareas';

import '@ionic/react/css/core.css';
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(savedTasks);
  }, []);


  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/">
            <Home tasks={tasks} />
          </Route>
          <Route exact path="/agregarTarea">
            <AgregarTarea tasks={tasks} setTasks={setTasks} />
          </Route>
          <Route exact path="/ListaTareas">
            <ListaTareas tasks={tasks} setTasks={setTasks} />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
