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

export default function TopicQuestions() {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [question, setQuestion] = useState("");
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [organization, setOrganization] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  // Fixed topics
  const topics = ["Topic1", "Topic2", "Topic3", "Topic4", "Topic5", "Topic6"];

  // Replace with your SheetDB API URL
  const SHEETDB_URL = "https://sheetdb.io/api/v1/z8xvvwkqt3fsx";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTopic || !question || !name || !designation || !organization)
      return;

    setLoading(true);
    try {
      await axios.post(SHEETDB_URL, {
        data: {
          topic: selectedTopic,
          question: question,
          name: name,
          designation: designation,
          organization: organization,
          timestamp: new Date().toISOString(),
        },
      });
      setSuccess(true);

      // Reset fields
      setQuestion("");
      setSelectedTopic("");
      setName("");
      setDesignation("");
      setOrganization("");

      // Auto hide success alert
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
            <h3 className="text-center mb-4 text-primary fw-bold">
              🎤 Conference Q&A System
            </h3>

            {success && (
              <Alert variant="success" dismissible>
                ✅ Your question has been submitted successfully!
              </Alert>
            )}

            <Form onSubmit={handleSubmit}>
              {/* Select Topic */}
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold">Select Topic</Form.Label>
                <Form.Select
                  value={selectedTopic}
                  onChange={(e) => setSelectedTopic(e.target.value)}>
                  <option value="">-- Choose Topic --</option>
                  {topics.map((topic, idx) => (
                    <option key={idx} value={topic}>
                      {topic}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>

              {/* Question */}
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

              {/* Name */}
              {selectedTopic && (
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Group>
              )}

              {/* Designation */}
              {selectedTopic && (
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Designation</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </Form.Group>
              )}

              {/* Organization */}
              {selectedTopic && (
                <Form.Group className="mb-3">
                  <Form.Label className="fw-semibold">Organization</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your organization"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                  />
                </Form.Group>
              )}

              {/* Submit Button */}
              {selectedTopic &&
                question &&
                name &&
                designation &&
                organization && (
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
