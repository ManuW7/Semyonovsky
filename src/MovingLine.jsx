function MovingLine(props) {
  return (
    <>
      <div className="movingLineDiv">
        <div
          className="movingLineTrack"
          style={{
            backgroundColor: props.backgroundColor
              ? props.backgroundColor
              : "black",
            paddingTop:
              (props.paddingTop / 1920) * window.innerWidth ||
              (props.padding / 1920) * window.innerWidth ||
              "10px",
            paddingBottom:
              (props.paddingBottom / 1920) * window.innerWidth ||
              (props.padding / 1920) * window.innerWidth ||
              "10px",
          }}
        >
          <img className="movingLine first" src={props.movingLineImage} />
          <img className="movingLine second" src={props.movingLineImage} />
        </div>
      </div>
    </>
  );
}

export default MovingLine;
