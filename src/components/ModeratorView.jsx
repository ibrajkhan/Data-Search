// import React, { useState, useEffect } from "react";
// import { Container, Row, Col, Card, Badge, Spinner } from "react-bootstrap";
// import axios from "axios";

// export default function ModeratorView() {
//   const [questions, setQuestions] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Replace with your SheetDB API URL
//   const SHEETDB_URL = "https://sheetdb.io/api/v1/z8xvvwkqt3fsx";

//   // Fetch questions from SheetDB
//   const fetchQuestions = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.get(SHEETDB_URL);
//       // Sort latest first (SheetDB gives oldest first usually)
//       const sorted = res.data.reverse();
//       setQuestions(sorted);
//     } catch (err) {
//       console.error("Error fetching questions:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchQuestions();
//     const interval = setInterval(fetchQuestions, 10000); // refresh every 10s
//     return () => clearInterval(interval);
//   }, []);

//   // Badge colors by person
//   const personColors = {
//     Amit: "primary",
//     Sunil: "success",
//     Rajesh: "warning",
//     Sanjeev: "danger",
//   };

//   return (
//     <Container fluid className="mt-4">
//       <Row className="justify-content-center">
//         <Col md={10} lg={8}>
//           <h2 className="text-center fw-bold mb-4 text-dark">
//             🎤 Moderator Dashboard – Live Questions
//           </h2>

//           {loading && (
//             <div className="text-center my-4">
//               <Spinner animation="border" role="status" />
//               <p className="mt-2">Loading questions...</p>
//             </div>
//           )}

//           {!loading && questions.length === 0 && (
//             <p className="text-center text-muted">No questions yet...</p>
//           )}

//           {questions.map((q, idx) => (
//             <Card
//               key={idx}
//               className="mb-3 shadow-sm border-0 rounded-4"
//               style={{ backgroundColor: "#f9f9f9" }}>
//               <Card.Body>
//                 {/* Speaker + Topic */}
//                 <div className="d-flex justify-content-between align-items-center mb-2">
//                   <Badge
//                     bg={personColors[q.person] || "secondary"}
//                     className="me-2">
//                     {q.person}
//                   </Badge>
//                   <Badge bg="dark">{q.topic}</Badge>
//                 </div>

//                 {/* Question */}
//                 <Card.Text className="fs-5 fw-semibold">{q.question}</Card.Text>

//                 {/* Timestamp */}
//                 <small className="text-muted">
//                   {new Date(q.timestamp).toLocaleString()}
//                 </small>
//               </Card.Body>
//             </Card>
//           ))}
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// To Filter the question basis of speakeer and topic and also from moderator

import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Spinner,
  Button,
  Dropdown,
  ButtonGroup,
} from "react-bootstrap";
import axios from "axios";

export default function ModeratorView() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterPerson, setFilterPerson] = useState("All");
  const [filterTopic, setFilterTopic] = useState("All");
  const [sortOrder, setSortOrder] = useState("desc"); // "desc" = newest first

  // Replace with your SheetDB API URL
  const SHEETDB_URL = "https://sheetdb.io/api/v1/z8xvvwkqt3fsx";

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const res = await axios.get(SHEETDB_URL);
      setQuestions(res.data);
    } catch (err) {
      console.error("Error fetching questions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
    const interval = setInterval(fetchQuestions, 10000); // refresh every 10s
    return () => clearInterval(interval);
  }, []);

  // Badge colors by person
  const personColors = {
    Amit: "primary",
    Sunil: "success",
    Rajesh: "warning",
    Sanjeev: "danger",
  };

  // Apply filters + sorting
  const filteredQuestions = questions
    .filter((q) => (filterPerson === "All" ? true : q.person === filterPerson))
    .filter((q) => (filterTopic === "All" ? true : q.topic === filterTopic))
    .sort((a, b) =>
      sortOrder === "desc"
        ? new Date(b.timestamp) - new Date(a.timestamp)
        : new Date(a.timestamp) - new Date(b.timestamp)
    );

  // Unique topics for dropdown
  const allTopics = Array.from(new Set(questions.map((q) => q.topic)));

  return (
    <Container fluid className="mt-4">
      <Row className="justify-content-center">
        <Col md={10} lg={8}>
          <h2 className="text-center fw-bold mb-4 text-dark">
            🎤 Moderator Dashboard – Live Questions
          </h2>

          {/* Filter Controls */}
          <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
            {/* Person Filter */}
            <ButtonGroup className="mb-2">
              {["All", "Amit", "Sunil", "Rajesh", "Sanjeev"].map((person) => (
                <Button
                  key={person}
                  variant={filterPerson === person ? "dark" : "outline-dark"}
                  onClick={() => setFilterPerson(person)}>
                  {person}
                </Button>
              ))}
            </ButtonGroup>

            {/* Topic Filter */}
            <Dropdown className="mb-2">
              <Dropdown.Toggle variant="secondary">
                {filterTopic === "All" ? "All Topics" : filterTopic}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => setFilterTopic("All")}>
                  All Topics
                </Dropdown.Item>
                {allTopics.map((topic, idx) => (
                  <Dropdown.Item
                    key={idx}
                    onClick={() => setFilterTopic(topic)}>
                    {topic}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            {/* Sort Order */}
            <Button
              variant="info"
              className="mb-2"
              onClick={() =>
                setSortOrder(sortOrder === "desc" ? "asc" : "desc")
              }>
              {sortOrder === "desc" ? "⬇️ Newest First" : "⬆️ Oldest First"}
            </Button>
          </div>

          {/* Loading Spinner */}
          {loading && (
            <div className="text-center my-4">
              <Spinner animation="border" role="status" />
              <p className="mt-2">Loading questions...</p>
            </div>
          )}

          {/* No Questions */}
          {!loading && filteredQuestions.length === 0 && (
            <p className="text-center text-muted">No questions found...</p>
          )}

          {/* Question List */}
          {filteredQuestions.map((q, idx) => (
            <Card
              key={idx}
              className="mb-3 shadow-sm border-0 rounded-4"
              style={{ backgroundColor: "#f9f9f9" }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <Badge
                    bg={personColors[q.person] || "secondary"}
                    className="me-2">
                    {q.person}
                  </Badge>
                  <Badge bg="dark">{q.topic}</Badge>
                </div>
                <Card.Text className="fs-5 fw-semibold">{q.question}</Card.Text>
                <small className="text-muted">
                  {new Date(q.timestamp).toLocaleString()}
                </small>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>
    </Container>
  );
}
