import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Define an interface for the props expected by BasicInfo
interface BasicInfoProps {
  addBasicData: (name: string, email: string, contact: string) => void;
}

export default function BasicInfo({ addBasicData }: BasicInfoProps) {
  // State variables to store user input with explicit types
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [contact, setContact] = useState<string>('');

  // Navigation function for programmatic routing
  const navigate = useNavigate();

  // Function to handle form submission
  const submit = (e: React.FormEvent) => {
    // Specify type for event object
    e.preventDefault();
    if (!name || !email || !contact) {
      // Alert if any field is missing
      alert('All fields necessary!');
    } else {
      // Call the addBasicData function provided by the parent component
      addBasicData(name, email, contact);
      // Navigate to the '/questions' route
      navigate('/questions');
    }
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body my-3">
              <form onSubmit={submit}>
                <label htmlFor="">
                  <h4>Basic Details</h4>
                </label>
                <div className="form-group my-3">
                  <label htmlFor="">
                    <b>1.</b> Name
                  </label>
                  {/* Input field for name */}
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      // Specify type for event object
                      setName(e.target.value);
                    }}
                    className="form-control my-2"
                    placeholder="Enter your Name"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="">
                    <b>2.</b> Email
                  </label>
                  {/* Input field for email */}
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      // Specify type for event object
                      setEmail(e.target.value);
                    }}
                    className="form-control my-2"
                    placeholder="Enter your Email"
                    autoComplete="off"
                  />
                </div>
                <div className="form-group my-3">
                  <label htmlFor="">
                    <b>3.</b> Contact No.
                  </label>
                  {/* Input field for contact number */}
                  <input
                    type="tel"
                    name="contact"
                    value={contact}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      // Specify type for event object
                      setContact(e.target.value);
                    }}
                    className="form-control my-2"
                    placeholder="Enter your Contact No."
                    autoComplete="off"
                  />
                </div>
                {/* Submit button */}
                <button type="submit" className="btn btn-success mx-3">
                  Next
                </button>
              </form>
              {/* Step indicators */}
              <center>
                <span className="badge badge-pill bg-success">
                  <b>1</b>
                </span>
                <span className="badge rounded-pill disabled">2</span>
                <span className="badge rounded-pill disabled">3</span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
