import Visa from '../../assets/images/visa.png';

function CreditCard(props) {
  if (props.type === 'Visa') {
    return (
      <>
        <div
          style={{
            backgroundColor: `${props.bgColor}`,
            color: `${props.color}`,
          }}
        >
          <img src={Visa} alt="" />
          <div>
            <h1>{props.number}</h1>
            <p>
              Expires {props.expirationMonth} {props.bank}
            </p>
            <p>{props.owner}</p>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          style={{
            backgroundColor: `${props.bgColor}`,
            color: `${props.color}`,
          }}
        >
          <img src={Visa} alt="" />
          <div>
            <h1>{props.number}</h1>
            <p>
              Expires {props.expirationMonth} {props.bank}
            </p>
            <p>{props.owner}</p>
          </div>
        </div>
      </>
    );
  }
}

export default CreditCard;
