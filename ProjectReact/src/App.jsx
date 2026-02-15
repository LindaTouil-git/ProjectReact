import Counter from './assets/components/Counter';
import ListManager from './assets/components/ListManager';
import ColorBox from './assets/components/ColorBox';
import GradeManager from './assets/components/GradeManager';
import TodoList from './assets/components/TodoList';

function App() {
  return (
    <div>
      <h1>Exercices React - State et Props</h1>
      
      <hr />
      <h2>Exercice 1 : Compteur</h2>
      <Counter initialCount={15} step={5} />
      
      <hr />
      <h2>Exercice 2 : Liste Dynamique</h2>
      <ListManager 
        initialItems={['React', 'Angular', 'VueJs']} 
        placeholder="Entrez un nouveau élément"
      />
      
      <hr />
      <h2>Exercice 3 : ColorBox</h2>
      <ColorBox 
  initialColor="#FF6B6B" 
  colorOptions={['#FF9F1C', '#FFBF69', '#FFD23F', '#F94144', '#F3722C']}
/>
      
      <hr />
      <h2>Exercice 4 : Gestionnaire de Notes</h2>
      <GradeManager initialNotes={[15, 18, 12]} />
      
      <hr />
      <h2>Exercice 5 : Todo List avec Priorités</h2>
      <TodoList
  initialTasks={[
    { name: 'Finir le projet React', person: 'Linda Touil', priority: 'Haute', completed: false },
    { name: 'Préparer le repas', person: 'Linda Touil', priority: 'Moyenne', completed: false },
    { name: 'Aller courir', person: 'Linda Touil', priority: 'Basse', completed: false }
  ]}
/>
    </div>
  );
}

export default App;