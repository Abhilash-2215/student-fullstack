import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [student, setStudent] = useState({
        name: "",
        email: "",
        age: "",
        course: ""
    });

    const [students, setStudents] = useState([]);

    const handleChange = (e) => {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    };

    const getStudents = async () => {
        try {
            const response = await fetch("http://localhost:8080/api/students");
            const data = await response.json();
            setStudents(data);
        } catch (error) {
            console.error("Error loading students:", error);
        }
    };

    const addStudent = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:8080/api/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...student,
                    age: Number(student.age)
                })
            });

            if (!response.ok) {
                throw new Error("Failed to add student");
            }

            setStudent({
                name: "",
                email: "",
                age: "",
                course: ""
            });

            getStudents();
        } catch (error) {
            console.error("Error adding student:", error);
            alert("Could not add student. Make sure the backend is running.");
        }
    };

    useEffect(() => {
        getStudents();
    }, []);

    return (
        <div className="container">
            <h1>Student Details</h1>

            <form onSubmit={addStudent}>
                <input
                    type="text"
                    name="name"
                    placeholder="Student Name"
                    value={student.name}
                    onChange={handleChange}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={student.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={student.age}
                    onChange={handleChange}
                    min="1"
                />

                <input
                    type="text"
                    name="course"
                    placeholder="Course"
                    value={student.course}
                    onChange={handleChange}
                />

                <button type="submit">Add Student</button>
            </form>

            <h2>Students</h2>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Course</th>
                    </tr>
                </thead>

                <tbody>
                    {students.map((s) => (
                        <tr key={s.id}>
                            <td>{s.id}</td>
                            <td>{s.name}</td>
                            <td>{s.email}</td>
                            <td>{s.age}</td>
                            <td>{s.course}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;
