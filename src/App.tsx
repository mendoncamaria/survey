import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import the TypeScript versions of your components
import BasicInfo from './Components/BasicInfo';
import AdditionalQuestions from './Components/AdditionalQuestions';
import EnteredDetails from './Components/EnteredDetails';
import ThankYouPage from './Components/ThankYouPage';
import { About } from './Components/About'; // Assuming About is also a TSX component or doesn't need specific typing for now

// Define interfaces for your data structures
interface BasicData {
  name: string;
  email: string;
  contact: string;
}

interface QuestionData {
  profession: string;
  interest: string;
  reference: string;
}

function App() {
  // Initialize basicData state from localStorage or an empty object
  // Provide type assertion <BasicData> to ensure TypeScript knows the structure
  const initBasicData: BasicData = JSON.parse(
    localStorage.getItem('data') || '{}'
  );
  // Initialize questionData state from localStorage or an empty object
  // Provide type assertion <QuestionData> to ensure TypeScript knows the structure
  const initQuestionsData: QuestionData = JSON.parse(
    localStorage.getItem('questiondata') || '{}'
  );

  // Set up state hooks for basicData and questionData with explicit types
  const [basicData, setBasicData] = useState<BasicData>(initBasicData);
  const [questionData, setQuestionData] =
    useState<QuestionData>(initQuestionsData);

  // Update localStorage whenever basicData changes
  useEffect(() => {
    localStorage.setItem('data', JSON.stringify(basicData));
  }, [basicData]);

  // Update localStorage whenever questionData changes
  useEffect(() => {
    localStorage.setItem('questiondata', JSON.stringify(questionData));
  }, [questionData]);

  // Function to add basicData to state and localStorage
  // Explicitly type the parameters
  const addBasicData = (name: string, email: string, contact: string) => {
    // Create an object with the provided basic data
    const myBasicData: BasicData = {
      // Type the object
      name: name,
      email: email,
      contact: contact,
    };

    // Update the basicData state with the new data
    setBasicData(myBasicData);

    // Update the localStorage with the new basicData
    localStorage.setItem('data', JSON.stringify(myBasicData));
  };

  // Function to add questionData to state and localStorage
  // Explicitly type the parameters
  const addQuestionData = (
    profession: string,
    interest: string,
    reference: string
  ) => {
    // Create an object with the provided question data
    const myQuestionData: QuestionData = {
      // Type the object
      profession: profession,
      interest: interest,
      reference: reference,
    };

    // Update the questionData state with the new data
    setQuestionData(myQuestionData);

    // Update the localStorage with the new questionData
    localStorage.setItem('questiondata', JSON.stringify(myQuestionData));
  };

  // Render the application
  return (
    <Router>
      {/* Define the routes */}
      <Routes>
        {/* Render the BasicInfo component with the addBasicData function */}
        <Route path="/" element={<BasicInfo addBasicData={addBasicData} />} />

        {/* Render the AdditionalQuestions component with the addQuestionData function */}
        <Route
          path="/questions"
          element={<AdditionalQuestions addQuestionData={addQuestionData} />}
        />

        {/* Render the EnteredDetails component with basicData and questionData */}
        <Route
          path="/details"
          element={
            <EnteredDetails data={basicData} questiondData={questionData} />
          }
        />

        {/* Render the ThankYouPage component */}
        <Route path="/thanks" element={<ThankYouPage />} />

        {/* Render the About component */}
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

// Export the App component as the default export
export default App;
