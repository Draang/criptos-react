import styled from "@emotion/styled";
import Formulario from "./Components/Formulario";
import Cotizacion from "./Components/Cotizacion";
import Spinner from "./Components/Spinner";
import ImagenCripto from "./img/imagen-criptos.png";
import { useEffect, useState } from "react";
const Heading = styled.h1`
  font-family: "Lato", sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after {
    content: "";
    width: 80%;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
    border-radius: 3px;
  }
`;
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 90%;
  margin: 100px auto 0 auto;
  display: block;
`;
function App() {
  const [monedas, setMonedas] = useState({});
  const [cotizacion, setCotizacion] = useState({});
  const [cargando, setCargando] = useState(false);
  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      //Api call
      const cotizar = async () => {
        setCargando(true);
        const { cripto, moneda } = monedas;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;
        const req = await fetch(url);
        const res = await req.json();
        const data = res.DISPLAY[cripto][moneda];
        setCotizacion(data);
        setCargando(false);
      };
      cotizar();
    }
  }, [monedas]);
  return (
    <Contenedor>
      <Imagen src={ImagenCripto} alt="Criptomonedas" />
      <div>
        <Heading>Cotiza Criptomonedas</Heading>
        <Formulario setMonedas={setMonedas} />
        {cargando ? (
          <Spinner />
        ) : (
          cotizacion.PRICE && <Cotizacion cotizacion={cotizacion} />
        )}
      </div>
    </Contenedor>
  );
}

export default App;
