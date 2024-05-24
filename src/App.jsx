import './App.css';
import MultiStepForm from './MultiStepForm.jsx';
import Step1 from './Step1.jsx';
import Step2 from './Step2.jsx';

function App() {
  const steps = [Step1, Step2];

  return (
    <div className="App">
      <MultiStepForm steps={steps}/>
    </div>
  );
}

export default App;
