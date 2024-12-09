import React from 'react';
import { IonButton, IonContent, IonList, IonItem, IonLabel, IonCheckbox } from '@ionic/react';

interface ListaTareasProps {
  tasks: any[];
  setTasks: (tasks: any[]) => void;
}

const ListaTareas: React.FC<ListaTareasProps> = ({ tasks, setTasks }) => {
  const completarTarea = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const eliminarTarea = (id: number) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <IonContent className="ion-padding">
      <IonList>
        {tasks.map(task => (
          <IonItem key={task.id}>
            <IonCheckbox
              slot="start"
              checked={task.completed}
              onIonChange={() => completarTarea(task.id)}
            />
            <IonLabel>
              <h2>{task.title}</h2>
              <p>{task.description}</p>
            </IonLabel>
            <IonButton slot="end" color="danger" onClick={() => eliminarTarea(task.id)}>
              Eliminar
            </IonButton>
          </IonItem>
        ))}
      </IonList>
    </IonContent>
  );
};

export default ListaTareas;
