import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack,Image, Row, Col, Form} from "react-bootstrap";

const CalculatorTaxe = () => {

  const calculeaza = (venit) => {

    // Contribuția de asigurări sociale (CAS)
    // Plafonul minim brut pe economie în 2024 este 3.300 lei
    const salariuMinimBrut = 3300;
    const cas = Math.min(venit, salariuMinimBrut) * 0.25;

    // Contribuția de asigurări sociale de sănătate (CASS)
    // Se aplică un procent de 10% la norma de venit sau norma anuală de venit ajustată
    const cass = venit * 0.1;

    // Impozitul pe venit (10% din venitul net)
    const impozitVenit = (venit - cas - cass) * 0.1;

    // Calculul total al taxelor
    const totalTaxe = impozitVenit + cas + cass;

    // Venitul net
    const venitNet = venit - totalTaxe;

    return {
        impozitVenit,
        cas,
        cass,
        venitNet
    };
  }

    const [venitLunar, setVenitLunar] = useState('');
    const [taxeLuna, setTaxeLuna] = useState(null);

    const handleCalculeazaClick = (event) => {
        event.preventDefault();
        const venitLunarNumber = parseFloat(venitLunar);
        if (!isNaN(venitLunarNumber)) {
            const taxe = calculeaza(venitLunarNumber);
            setTaxeLuna(taxe);
        } else {
            // Tratează cazul în care utilizatorul introduce un venit invalid
            console.error('Venitul lunar introdus nu este un număr valid.');
        }
    };

  return (
    <div className="container about-container">
      <h1 className="display-4 mt-4" >Calculator Taxe</h1>
      <p className="lead mt-5">Calculează venitul net după plătirea taxelor în cadrul unui PFA. </p>

      <Row>
        <Col>
          <div className="d-flex justify-content-center align-items-center">
        <Form className="rounded-form">
                <label>
                  Venit lunar (lei):
                </label>
                <input
                  class="input-venit"
                  type="number"
                  value={venitLunar}
                  onChange={(e) => setVenitLunar(e.target.value)}
                />



                <button class="calculate-button" onClick={(event) => handleCalculeazaClick(event)}>Calculează</button>

              </Form>
              {taxeLuna && (
                <div>
                  <h3>Rezultate:</h3>
                  <p>Impozitul pe venit: <strong>{taxeLuna.impozitVenit} lei</strong></p>
                  <p>Contribuția la pensie (CAS): <strong>{taxeLuna.cas} lei</strong></p>
                  <p>Contribuția la sănătate (CASS): <strong>{taxeLuna.cass} lei</strong></p>
                  <p>Venitul net: <strong>{taxeLuna.venitNet} lei</strong></p>
                </div>
              )}
            </div>
        </Col>
      </Row>


    </div>
  );
};

export default CalculatorTaxe;
