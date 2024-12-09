
import React, { useState } from 'react';
import {IonContent,IonPage,IonHeader,IonTitle,IonToolbar,IonInput, IonButton, IonItem,IonLabel,IonSelect,IonSelectOption,} from '@ionic/react';
import { useHistory } from 'react-router-dom';

interface AgregarTareaProps {
  tasks: any[];
  setTasks: (tasks: any[]) => void;
}

const AgregarTarea: React.FC<AgregarTareaProps> = ({ tasks, setTasks }) => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');

  const agregarTarea = () => {
    if (!title || !description || !type) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    const newTask = {
      id: Date.now(),
      title,
      description,
      type,
      completed: false,
      timestamp: Date.now(),
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    history.push('/');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Agregar Tarea</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Título</IonLabel>
          <IonInput value={title} onIonChange={(e) => setTitle(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Descripción</IonLabel>
          <IonInput value={description} onIonChange={(e) => setDescription(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel>Tipo</IonLabel>
          <IonSelect value={type} onIonChange={(e) => setType(e.detail.value!)} placeholder="Selecciona un tipo">
            <IonSelectOption value="trabajo">Trabajo</IonSelectOption>
            <IonSelectOption value="casa">Casa</IonSelectOption>
            <IonSelectOption value="negocios">Negocios</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonButton expand="block" onClick={agregarTarea}>
          Guardar Tarea
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default AgregarTarea;
