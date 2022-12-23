function Patrick({
  title,
  description,
  addresss,
  phone,
  brandName,
  brandline,
  gradient,
  fontColor,
  childRef,
}) {
  return (
    <div
      className="card-area"
      ref={childRef}
      style={{
        maxWidth: "500px",
        marginInline: "auto",
        marginTop: "1em",
        color: `${fontColor}`,
      }}
    >
      <div
        className={`relative ${gradient}`}
        style={{
          maxWidth: "500px",
          height: "276px",
          fontFamily: "'Cinzel', serif",
        }}
      >
        <div className="flex items-start justify-between p-2">
          <p className="text">{phone}</p>

          <div className="text-center">
            <div className="text-lg">{brandName}</div>
            <div className="text-xs">{brandline}</div>
          </div>
        </div>
        <div className="absolute m-auto left-0 right-0 bottom-28">
          <div className="text-center text-xl">{title}</div>
          <div className="text-center">{description}</div>
        </div>
        <div className="text-sm text-center absolute bottom-5 m-auto left-0 right-0">
          {addresss}
        </div>
      </div>
    </div>
  );
}

export default Patrick;
