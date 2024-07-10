import React, { useState, useEffect } from "react";
import { Row, Col, Form, Container, Tabs, Tab, Button } from "react-bootstrap";
import UploadFiles from "../../components/files/UploadFiles";
import LoaderButton from "../../components/buttons/LoaderButton";
import { VisitorsServices } from "../../services/VisitorsServices";
import downloadImage from "../../assets/images/down_icon.png";

const InvoiceManagement = () => {
  const [key, setKey] = useState("all-invoices");
  const [files, setFiles] = useState([]);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    VisitorsServices.getInvoices().then((response) => {
      console.log(response);
      setInvoices(response.data);
    });
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toISOString().split("T")[0];
  };

  const onSubmitFile = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      // append each file to the form data

      formData.append(`file`, files[0], files[0].name);

      var invoice = {
        content: null,
        address: "Brasov, str. Nicolae Iorga, nr.25",
        filename: files[0].name,
        emitDate: new Date().toISOString().split("T")[0],
        user_id: 1,
      };
      formData.append("invoice", JSON.stringify(invoice));
      // send date to server
      VisitorsServices.saveInvoices(formData).then((response) => {
        console.log("Response: ", response);
        setInvoices([...invoices, invoice]);
      });
      setFiles([]);
    } catch (error) {
      console.error("Error at form submition: ", error);
    }
  };

  return (
    <Container className="mb-5">
      <Row>
        <Col>
          <h1 className="display-4 mt-4">Gestionare facturi</h1>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Tabs
            id="invoice-management"
            activeKey={key}
            onSelect={(selectedKey) => setKey(selectedKey)}
            className="mb-3 equal-width-tabs"
          >
            <Tab eventKey="all-invoices" title="Viziualizare facturi">
              <Row>
                <Col>
                  <table className="table table-striped text-left mt-2 table-light">
                    <thead className="table-secondary">
                      <tr>
                        <th style={{ textAlign: "center" }}>Nr.</th>
                        <th>Filename</th>
                        <th>Data</th>
                        <th>Adresă</th>
                        <th>Descarcare</th>
                      </tr>
                    </thead>
                    {/*  show invoices */}
                    {invoices?.length > 0 ? (
                      <tbody>
                        {invoices.map((invoice, index) => (
                          <tr key={index}>
                            <td align="center">{index + 1}</td>
                            <td>{invoice.filename}</td>
                            <td>{formatDate(invoice.emitDate)}</td>
                            <td>{invoice.address}</td>
                            <td>
                              <Button backgroundColor="#ECEDEE">
                                <img src={downloadImage} alt="" />
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    ) : (
                      <tbody>
                        <tr>
                          <td colSpan="4" align="center" className="p-3">
                            Nu sunt facturi adăugate.
                          </td>
                        </tr>
                      </tbody>
                    )}
                  </table>
                </Col>
              </Row>
            </Tab>
            <Tab eventKey="profile" title="Încarcă factură">
              <Form>
                <Row>
                  <Col xl={6} md={8} xs={12}>
                    <UploadFiles
                      field="invoicesFilesID"
                      label="Atașează factură:"
                      files={files}
                      setFiles={setFiles}
                      canUploadMultipleFiles={false}
                    />
                    <div className="d-flex justify-content-end">
                      <LoaderButton
                        onClick={(event) => onSubmitFile(event)}
                        className="btn btn-default button-default"
                        text="Salvează factură"
                        backgroundColor="#027085"
                        style={{ width: "200px" }}
                        conditionForDisable={files.length === 0}
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
