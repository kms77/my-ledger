import React, {useState} from "react";
import { Row, Col, Form, Container, Tabs, Tab, Button} from "react-bootstrap";
import UploadFiles from "../../components/files/UploadFiles";

const InvoiceManagement = () => {

  const [key, setKey] = useState('all-invoices');
  const [files, setFiles] = useState([]);

  const onSubmitFiles = async (event) => {
    event.preventDefault();
    try{
        const formData = new FormData();
        // append each file to the form data
        files.forEach((file, index) => {
            formData.append(`files[${index}]`, file);
        });
        // send date to server
    } catch (error){
        console.error('Error at form submition: ', error);
    }
}

  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h3>Gestionare facturi</h3>
          <p></p>
        </Col>
      </Row>
      <Tabs
        id="invoice-management"
        activeKey={key}
        onSelect={(selectedKey) => setKey(selectedKey)}
        className="mb-3"
      >
        <Tab eventKey="all-invoices" title="Viziualizare facturi">
          Vizualizare facturi
        </Tab>
        <Tab eventKey="profile" title="Încarcă facturi">
          <Form>
            <Row>
                <Col xl={6} md={10} xs={8}>
                    <UploadFiles
                        field="invoicesFilesID"
                        label="Atașează facturi:"
                        files={files}
                        setFiles={setFiles}
                        canUploadMultipleFiles={true}
                    />
                    <Button
                        onClick={(event) => onSubmitFiles(event)}
                        className="btn btn-default w-100"
                    >
                      Trimite documente
                    </Button>
                </Col>
            </Row>
            </Form>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default InvoiceManagement;
