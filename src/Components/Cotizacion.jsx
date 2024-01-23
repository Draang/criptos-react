import PropTypes from "prop-types";
import styled from "@emotion/styled";

export default function Cotizacion({ cotizacion }) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    cotizacion;
  return (
    <div>
      <p>
        El Precio es de: <span>{PRICE}</span>
      </p>
      <p>
        El Precio Mas Alto del dia: <span>{HIGHDAY}</span>
      </p>
      <p>
        El Precio mas bajo : <span>{LOWDAY}</span>
      </p>
      <p>
        Variacion ultimas 24hr: <span>{CHANGEPCT24HOUR}%</span>
      </p>
      <p>
        Ultima Actualizacion: <span>{LASTUPDATE}</span>
      </p>
    </div>
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
