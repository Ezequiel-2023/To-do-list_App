import React, { useEffect } from 'react';
import { IonContent, IonPage, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';

interface HomeProps {
  tasks: any[];
}

const Home: React.FC<HomeProps> = ({ tasks }) => {
  const history = useHistory();

  const pendingTasks = tasks.filter(task => !task.completed).length;
  const completedTasks = tasks.filter(task => task.completed).length;

  useEffect(() => {
    const now = Date.now();
    const cleanedTasks = tasks.filter(task => !task.completed || now - task.timestamp < 86400000);
    localStorage.setItem('tasks', JSON.stringify(cleanedTasks));
  }, [tasks]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Tareas Pendientes: {pendingTasks}</h2>
        <h2>Tareas Completadas: {completedTasks}</h2>
        <IonButton expand="block" onClick={() => history.push('/agregarTarea')}>
          Agregar Tarea
        </IonButton>
        <IonButton expand="block" onClick={() => history.push('/ListaTareas')}>
          Ver Lista de Tareas
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
