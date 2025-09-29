import { useState } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Alert,
  Card,
  Spinner,
} from "react-bootstrap";

import axios from "axios";

export default function ConferenceQASystem() {
  const [selectedPerson, setSelectedPerson] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Topics mapping
  const topics = {
    Amit: ["Tech", "Politics", "Sports"],
    Sunil: ["Books", "Movies"],
    Rajesh: ["Travel", "Food"],
    Sanjeev: ["Climate Change", "Foreign Issue"],
  };

  // Replace with your SheetDB API URL
  const SHEETDB_URL = "https://sheetdb.io/api/v1/z8xvvwkqt3fsx";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedPerson || !selectedTopic || !question) return;

    setLoading(true);
    try {
      await axios.post(SHEETDB_URL, {
        data: {
          person: selectedPerson,
          topic: selectedTopic,
          question: question,
          timestamp: new Date().toISOString(),
        },
      });
      setSuccess(true);
      setQuestion("");
      setSelectedTopic("");
      setSelectedPerson("");

      // Auto hide success alert after 3 sec
      setTimeout(() => setSuccess(false), 3000);
    } catch (error) {
      console.error("Error saving question:", error);
    }
    setLoading(false);
  };

  return (
    <Container className="mt-5 mb-3">
      <Row className="justify-content-md-center mt-5">
        <Col md={12} lg={12} xl={12}>
          <Card className="shadow-lg p-4 rounded-4 border-0">
            {/* <Col xs={12}>
          <Card
            className="mx-auto shadow-lg p-4 rounded-4 border-0"
            style={{ maxWidth: "700px" }}> */}
            <h3 className="text-center mb-4 text-primary fw-bold">
              🎤 Conference Q&A System
            </h3>

            {success && (
              <Alert variant="success" dismissible>
                ✅ Your question has been submitted successfully!
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              {/* Select Speaker */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Select Speaker</Form.Label>
                <Form.Select
                  value={selectedPerson}
                  onChange={(e) => {
                    setSelectedPerson(e.target.value);
                    setSelectedTopic("");
                  }}>
                  <option value="">-- Choose Person --</option>
                  <option value="Amit">Amit</option>
                  <option value="Sunil">Sunil</option>
                  <option value="Rajesh">Rajesh</option>
                  <option value="Sanjeev">Sanjeev</option>
                </Form.Select>
              </Form.Group>

              {/* Select Topic */}
              {selectedPerson && (
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Select Topic</Form.Label>
                  <Form.Select
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}>
                    <option value="">-- Choose Topic --</option>
                    {topics[selectedPerson].map((topic, idx) => (
                      <option key={idx} value={topic}>
                        {topic}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              )}

              {/* Input Question */}
              {selectedTopic && (
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">
                    Ask Your Question
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder={`Type your question about ${selectedTopic}...`}
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                </Form.Group>
              )}

              {/* Submit Button */}
              {selectedTopic && question && (
                <div className="d-grid">
                  <Button
                    variant="primary"
                    type="submit"
                    disabled={loading}
                    className="fw-semibold">
                    {loading ? (
                      <>
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                          className="me-2"
                        />
                        Submitting...
                      </>
                    ) : (
                      "Submit Question"
                    )}
                  </Button>
                </div>
              )}
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
