import React, {useState} from "react";
import { Row, Col, Form, Container, Tabs, Tab} from "react-bootstrap";
import UploadFiles from "../../components/files/UploadFiles";
import LoaderButton from "../../components/buttons/LoaderButton";
import { VisitorsServices } from "../../services/VisitorsServices";

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
        formData.append("content", null);
        formData.append("address", "address");
        formData.append("filename", "invoice");
        formData.append("emitDate", "2019-11-11");
        formData.append("user_id", 1);
        // send date to server
        const user_id = 1;
        VisitorsServices.saveInvoices(user_id, formData).then((response) => {
          console.log("Response: ", response);
        })
    } catch (error){
        console.error('Error at form submition: ', error);
    }
}

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="mt-4" >Gestionare facturi</h1>
          <p></p>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
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
                    <Col xl={6} md={8} xs={12}>
                        <UploadFiles
                            field="invoicesFilesID"
                            label="Atașează facturi:"
                            files={files}
                            setFiles={setFiles}
                            canUploadMultipleFiles={true}
                        />
                        <div className="d-flex justify-content-end">
                          <LoaderButton
                              onClick={(event) => onSubmitFiles(event)}
                              className="btn btn-default button-default"
                              text="Trimite documente"
                              backgroundColor="#027085"
                              style={{width: "200px"}}
                          />
                        </div>
                    </Col>
                </Row>
                </Form>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default InvoiceManagement;
