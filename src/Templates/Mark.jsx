function Mark({
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
          display: "flex",
        }}
      >
        <div className="flex items-start justify-between gap-3 p-3">
          <div className="flex flex-col gap-2">
            <div className=" text-xl">{title}</div>
            <div className="">{description}</div>
            <p className="text">{phone}</p>
            <div className="text-xs">{addresss}</div>
          </div>

          <div className="flex flex-col gap-2 self-end absolute bottom-5 right-3">
            <div className="text-right text-xl">|{" " + brandName + " "}|</div>
            <div className=" text-right text-xs">{brandline}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mark;
