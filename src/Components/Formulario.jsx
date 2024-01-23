import styled from "@emotion/styled";
import useSelectMonedas from "../Hooks/useSelectMonedas";
import { monedas } from "../data/monedas";
import { useEffect, useState } from "react";
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
export default function Formulario() {
  const [criptos, setCriptos] = useState([]);
  const [moneda, SelectMonedas] = useSelectMonedas(
    "Selecciona Moneda",
    monedas
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
  }

  return (
    <form onSubmit={handleSubmit}>
      <SelectMonedas />
      <Submit type="submit" value="cotizar" />
    </form>
  );
}
