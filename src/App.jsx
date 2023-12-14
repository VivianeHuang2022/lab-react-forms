import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setfullName] = useState("");
  const [image, setimage] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [program, setprogram] = useState("");
  const [graduationYear,setgraduationYear] = useState(2023);
  const [graduated,setgraduated] = useState(false);

  const handleFullNameChange = (event) => {
    setfullName(event.target.value);
  };

 const handleImageChange =(event) =>{
    setimage(event.target.value);
 }

const handlePhoneChange =(event) =>{
  setphone(event.target.value)
}

const handleProgramChange =(event) =>{
  setemail(event.target.value)
}

const handleEmailChange =(event) =>{
  setprogram(event.target.value)
}

const handleGraduationYearChange=(event) =>{
  setgraduationYear(event.target.value)
}

const handleGraduatedChange=(event) =>{
  setgraduated(event.target.checked)
}

const handleSubmit = (event) => {
  event.preventDefault();

  // Create a new student object
  const newStudent = {
    fullName,
    email,
    phone,
    program,
    image,
    graduationYear: parseInt(graduationYear), // Convert to number
    graduated,
  };

  // Update the students array in the state
  setStudents((prevStudents) => [...prevStudents, newStudent]);

  // Clear form inputs after submission
  setfullName("");
  setimage("");
  setphone("");
  setemail("");
  setprogram("");
  setgraduationYear(2023);
  setgraduated(false);
};


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
       
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name"  onChange={handleFullNameChange}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image"  onChange={handleImageChange}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={handlePhoneChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange={handleEmailChange}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program"  onChange={handleProgramChange}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={handleGraduationYearChange}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleGraduatedChange}/>
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
