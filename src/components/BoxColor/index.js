function BoxColor(props) {
  return (
    <>
      <div style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}>
        <p>
          rgb({props.r},{props.g},{props.b})
        </p>
      </div>

 {/*      <div style={{ color: 'pink' }}>
        Como passar um style para uma div INLINE
      </div> */}
    </>
  );
}
export default BoxColor;
