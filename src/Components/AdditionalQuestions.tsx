import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define the interface for the props expected by AdditionalQuestions
interface AdditionalQuestionsProps {
  addQuestionData: (
    profession: string,
    interest: string,
    reference: string
  ) => void;
}

export default function AdditionalQuestions({
  addQuestionData,
}: AdditionalQuestionsProps) {
  // State variables to store user inputs with explicit types
  const [profession, setProfession] = useState<string>('');
  const [interest, setInterest] = useState<string>('');
  const [reference, setReference] = useState<string>('');
  const [otherProfession, setOtherProfession] = useState<string>('');
  const [otherInterest, setOtherInterest] = useState<string>('');
  const [otherReference, setOtherReference] = useState<string>('');

  const navigate = useNavigate();

  // Function to handle form submission
  const submit = (e: React.FormEvent) => {
    // Type for form event
    e.preventDefault();

    // Check if all fields are filled
    if (!profession || !interest || !reference) {
      alert('All fields necessary!');
    } else {
      // Determine the final values for profession, interest, and reference
      // based on whether "Others" was selected.
      const finalProfession =
        profession === 'Others' ? otherProfession : profession;
      const finalInterest = interest === 'Others' ? otherInterest : interest;
      const finalReference =
        reference === 'Others' ? otherReference : reference;

      // Log the selected options and call the addQuestionData function with the data
      console.log(finalProfession, finalInterest, finalReference);
      addQuestionData(finalProfession, finalInterest, finalReference);

      // Navigate to the next page
      navigate('/details');
    }
  };

  // Event handler for changes in radio buttons.
  // React.ChangeEvent<HTMLInputElement> is used for input elements.
  const handleProfessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfession(e.target.value);
  };

  const handleInterestChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInterest(e.target.value);
  };

  const handleReferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReference(e.target.value);
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body">
              <form onSubmit={submit}>
                <label htmlFor="">
                  <h4>Additional Questions</h4>
                </label>

                {/* Profession options */}
                <div
                  className="form-group m-2"
                  onChange={handleProfessionChange}
                >
                  <label htmlFor="q1">
                    <b>1.</b> What is your profession?
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="student"
                    autoComplete="off"
                    className="m-2"
                    value="Student"
                  />
                  <label htmlFor="student"> Student</label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="sde"
                    autoComplete="off"
                    className="m-2"
                    value="Software Engineer"
                  />
                  <label htmlFor="sde"> Software Engineer</label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="teacher"
                    autoComplete="off"
                    className="m-2"
                    value="Teacher"
                  />
                  <label htmlFor="teacher"> Teacher</label>
                  <br />
                  <input
                    type="radio"
                    name="ProfessionRadio"
                    id="professionOthers" // Changed ID to avoid conflict with interest and reference
                    autoComplete="off"
                    className="m-2"
                    value="Others"
                  />
                  <label htmlFor="professionOthers"> Others:</label>
                  <input
                    type="text"
                    id="otherProfession"
                    autoComplete="off"
                    className="form-control m-2"
                    value={otherProfession}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setOtherProfession(e.target.value);
                    }} // Type for input change event
                  />
                  <hr />
                </div>

                {/* Interest options */}
                <div className="form-group m-2" onChange={handleInterestChange}>
                  <label htmlFor="q2">
                    <b>2.</b> What are your interests?
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="dsa"
                    autoComplete="off"
                    className="m-2"
                    value="DSA"
                  />
                  <label htmlFor="dsa"> DSA</label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="fullstack"
                    autoComplete="off"
                    className="m-2"
                    value="Full Stack Development"
                  />
                  <label htmlFor="fullstack"> Full Stack Development</label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="dataScience"
                    autoComplete="off"
                    className="m-2"
                    value="Data Science"
                  />
                  <label htmlFor="dataScience"> Data Science</label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="compeProgramming"
                    autoComplete="off"
                    className="m-2"
                    value="Competitive Programming"
                  />
                  <label htmlFor="compeProgramming">
                    {' '}
                    Competitive Programming
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="interestRadio"
                    id="interestOthers" // Changed ID to avoid conflict
                    autoComplete="off"
                    className="m-2"
                    value="Others"
                  />
                  <label htmlFor="interestOthers"> Others:</label>
                  <input
                    type="text"
                    id="otherInterest"
                    autoComplete="off"
                    className="form-control m-2"
                    value={otherInterest}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setOtherInterest(e.target.value);
                    }} // Type for input change event
                  />
                  <hr />
                </div>

                {/* Reference options */}
                <div
                  className="form-group m-2"
                  onChange={handleReferenceChange}
                >
                  <label htmlFor="q3">
                    <b>3.</b> Where did you hear about us?
                  </label>
                  <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="news"
                    autoComplete="off"
                    className="m-2"
                    value="News Paper"
                  />
                  <label htmlFor="news"> News Paper</label>
                  <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="LinkedIn"
                    autoComplete="off"
                    className="m-2"
                    value="LinkedIn"
                  />
                  <label htmlFor="LinkedIn"> LinkedIn</label>
                  <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="Instagram"
                    autoComplete="off"
                    className="m-2"
                    value="Instagram"
                  />
                  <label htmlFor="Instagram"> Instagram</label>
                  <br />
                  <input
                    type="radio"
                    name="referenceRadio"
                    id="referenceOthers" // Changed ID to avoid conflict
                    autoComplete="off"
                    className="m-2"
                    value="Others"
                  />
                  <label htmlFor="referenceOthers"> Others:</label>
                  <input
                    type="text"
                    id="otherReference"
                    autoComplete="off"
                    className="form-control m-2"
                    value={otherReference}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setOtherReference(e.target.value);
                    }} // Type for input change event
                  />
                  <br />
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-success mx-3">
                  Next
                </button>
              </form>

              {/* Progress indicators */}
              <center>
                <span className="badge rounded-pill disabled">1</span>
                <span className="badge badge-pill bg-success">
                  <b>2</b>
                </span>
                <span className="badge rounded-pill disabled">3</span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
