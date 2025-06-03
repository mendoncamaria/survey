import { useNavigate } from 'react-router-dom';

// Define interfaces for the data structures passed as props
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

// Define the interface for the props of the EnteredDetails component
interface EnteredDetailsProps {
  data: BasicData;
  questiondData: QuestionData;
}

export default function EnteredDetails({ data, questiondData }: EnteredDetailsProps) {
  const navigate = useNavigate();

  // Function to handle form submission
  const submit = () => {
    console.log(data); // Log basicData object
    console.log(questiondData); // Log questionData object
    navigate('/thanks'); // Navigate to the thanks page
  };

  return (
    <div className="container-fluid qform">
      <div className="col-md-5 m-auto">
        <div className="mt-3">
          <div className="card text-left h-100">
            <div className="card-body my-3">
              <h4>Entered Details</h4>

              {/* Display basicData */}
              <p>
                <b>Name:</b> {data.name}
              </p>
              <p>
                <b>Email:</b> {data.email}
              </p>
              <p>
                <b>Contact No.:</b> {data.contact}
              </p>

              <h4>Responses</h4>

              {/* Display questionData */}
              <p>
                <b>Profession:</b> {questiondData.profession}
              </p>
              <p>
                <b>Interests:</b> {questiondData.interest}
              </p>
              <p>
                <b>Reference:</b> {questiondData.reference}
              </p>

              {/* Submit button */}
              <button type="submit" onClick={submit} className="btn btn-success">
                Submit
              </button>

              {/* Page numbers */}
              <center>
                <span className="badge rounded-pill disabled">1</span>
                <span className="badge rounded-pill disabled">2</span>
                <span className="badge badge-pill bg-success">
                  <b>3</b>
                </span>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}