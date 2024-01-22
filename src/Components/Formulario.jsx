
import styled from "@emotion/styled";
import useSelectMonedas from "../Hooks/useSelectMonedas";
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
export default function Formulario() {
  const [moneda,SelectMonedas] = useSelectMonedas("Selecciona Moneda", monedas);
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
