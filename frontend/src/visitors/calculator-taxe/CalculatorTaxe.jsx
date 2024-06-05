import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Stack,Image, Row, Col, Form} from "react-bootstrap";

const CalculatorTaxe = () => {

  const SALARIU_MINIM_BRUT = 3300;
  const PLAFON_CASS = 60 * SALARIU_MINIM_BRUT;

  const calculeazaTaxe = (venitLunarBrut, cheltuieliDeductibile) => {

    const venitAnualBrut = venitLunarBrut * 12;

    let cassAnual = 0.1 * venitAnualBrut;

    if(cassAnual >= PLAFON_CASS){
      cassAnual = PLAFON_CASS;
    }
    const contributieCASS = cassAnual / 12;

    let contributieCAS = 0;

    if(venitLunarBrut < 3300){
      contributieCAS = venitLunarBrut * 0.25;
    } else if (venitLunarBrut > 3300 && venitLunarBrut < 6600){
      contributieCAS = 3300 * 0.25;
    }
    else{
      contributieCAS = 6600 * 0.25;
    }

    const venitImpozitabil = venitLunarBrut - contributieCASS - contributieCAS - cheltuieliDeductibile;
    const impozitPeVenit = venitImpozitabil * 0.1;

    const venitNet = venitImpozitabil - impozitPeVenit;
    
    return {
      impozitPeVenit,
      contributieCAS,
      contributieCASS,
      venitNet
  };

  };

    const [venitLunar, setVenitLunar] = useState('');
    const [cheltuieliDeductibile, setCheltuieliDeductibile] = useState('');
    const [taxeLuna, setTaxeLuna] = useState(null);

    const handleCalculeazaClick = (event) => {
        event.preventDefault();
        const venitLunarNumber = parseFloat(venitLunar);
        const cheltuieliDeductibileNumber = parseFloat(cheltuieliDeductibile);
        if (!isNaN(venitLunarNumber) && !isNaN(cheltuieliDeductibileNumber)) {
            const taxe = calculeazaTaxe(venitLunarNumber, cheltuieliDeductibileNumber);
            setTaxeLuna(taxe);
        } else {
            // Tratează cazul în care utilizatorul introduce un venit invalid
            console.error('Venitul lunar introdus nu este un număr valid.');
        }
    };

  return (
    <div className="container about-container mb-5">
      <h1 className="display-4 mt-4" >Calculator Taxe</h1>
      <p className="lead my-4">Calculează venitul net după plătirea taxelor în cadrul unui PFA. </p>

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

                <label>
                  Cheltuieli deductibile (lei):
                </label>
                <input
                  class="input-venit"
                  type="number"
                  value={cheltuieliDeductibile}
                  onChange={(e) => setCheltuieliDeductibile(e.target.value)}
                />



                <button class="calculate-button" onClick={(event) => handleCalculeazaClick(event)}>Calculează</button>

              </Form>
              <div className="mx-4">
              {taxeLuna && (
                <div>
                  <h3>Rezultate:</h3>
                  <p>Impozitul pe venit: <strong>{taxeLuna.impozitPeVenit} lei</strong></p>
                  <p>Contribuția la pensie (CAS): <strong>{taxeLuna.contributieCAS} lei</strong></p>
                  <p>Contribuția la sănătate (CASS): <strong>{taxeLuna.contributieCASS} lei</strong></p>
                  <p>Venitul net: <strong>{taxeLuna.venitNet} lei</strong></p>
                </div>
              )}
              </div>

            </div>
        </Col>
      </Row>


    </div>
  );
};

export default CalculatorTaxe;
