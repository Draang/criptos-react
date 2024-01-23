import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../Hooks/useSelectMonedas";
import Error from "./Error";
import { monedas } from "../data/monedas";
const Submit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  margin-top: 25px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;
export default function Formulario({ setMonedas }) {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);
  const [moneda, SelectMonedas] = useSelectMonedas(
    "Selecciona Moneda",
    monedas
  );
  const [cripto, SelectCripto] = useSelectMonedas(
    "Selecciona Criptomoneda",
    criptos
  );

  useEffect(() => {
    const consultarAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const req = await fetch(url);
      const res = await req.json();
      const data = res.Data.map((cripto) => ({
        id: cripto.CoinInfo.Name,
        nombre: cripto.CoinInfo.FullName,
      }));
      setCriptos(data);
    };
    consultarAPI();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if ([moneda, cripto].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1500);
      return;
    } else {
      setMonedas({ moneda, cripto });
    }
  }

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCripto />
        <Submit type="submit" value="cotizar" />
      </form>
    </>
  );
}

Formulario.propTypes = {
  setMonedas: PropTypes.func,
};
