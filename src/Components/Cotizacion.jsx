import PropTypes from "prop-types";
import styled from "@emotion/styled";

const Resultado = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 30px;
  img {
    display: block;
    width: 120px;
  }
`;
const Texto = styled.p`
  font-size: 20px;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.p`
  font-size: 25px;
  span {
    font-weight: 700;
  }
`;
export default function Cotizacion({ cotizacion }) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    cotizacion;
  return (
    <Resultado>
      <img src={`https://cryptocompare.com/${IMAGEURL}`} />
      <div>
        <Precio>
          El Precio es de: <span>{PRICE}</span>
        </Precio>
        <Texto>
          El Precio Mas Alto del dia: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          El Precio mas bajo : <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variacion ultimas 24hr: <span>{CHANGEPCT24HOUR}%</span>
        </Texto>
        <Texto>
          Ultima Actualizacion: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Resultado>
  );
}

Cotizacion.propTypes = {
  cotizacion: PropTypes.shape({
    CHANGEPCT24HOUR: PropTypes.any,
    HIGHDAY: PropTypes.any,
    IMAGEURL: PropTypes.any,
    LOWDAY: PropTypes.any,
    PRICE: PropTypes.any,
    LASTUPDATE: PropTypes.any,
  }),
};
