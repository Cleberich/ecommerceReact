import '../Card/card.css'
import logoPagos from './Assets/mediodepago.png'
import Accordion from 'react-bootstrap/Accordion';

function AccordionBootstrap() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="border-0"><h3 className="fs-14 fw-700">Envios</h3></Accordion.Header>
        <Accordion.Body>
        <p className="fs-8">Standard Montevideo Moova: Envío sin costo en compras mayores a UYU 3.500 | Costo normal: UYU 140.
Express Montevideo Moova: Costo normal: UYU 160.
Envios interior - Encargo: Envío sin costo en compras mayores a UYU 3.500 | Costo normal: UYU 160.
Envios interior - La Nave CargoPostal (ex Mirtrans): Envío sin costo en compras mayores a UYU 3.500 | Costo normal: UYU 160.
Envíos Internacionales: Costo normal: UYU 570.
Pedidos Ya - Envío programado - Montevideo: Costo normal: UYU 180.
Envios Interior MOOVA: Costo normal: UYU 210.
Retiro gratuito en nuestras tiendas habilitadas</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><h3 className="fs-14 fw-700">Medios de pagos</h3></Accordion.Header>
        <Accordion.Body>
         <img src={logoPagos} alt="medios de pagos"></img>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AccordionBootstrap;