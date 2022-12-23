import { useRef, useState } from "react";
import Patrick from "./Templates/Patrick";
import { FiInfo } from "react-icons/fi";
import exportAsImage from "./exportAsImage";

function App() {
  const [title, setTitle] = useState("Patrick Bateman");
  const [description, setDescription] = useState(`Vice President`);
  const [addresss, setAddresss] = useState(
    "358 Exchange Place New York, N.Y. 100099 FAX 212 555 6390"
  );
  const [phone, setPhone] = useState("212556342");
  const [brandName, setBrandName] = useState("Pierce & Pierce");
  const [brandline, setBrandline] = useState("Mergers and Acquisitions");

  const [gradient, setGradient] = useState(
    "bg-gradient-to-r from-gray-800 via-gray-900 to-black"
  );
  const [fontColor, setFontColor] = useState("text-white");
  const exportRef = useRef();
  return (
    <>
      <Patrick
        title={title}
        description={description}
        addresss={addresss}
        phone={phone}
        brandName={brandName}
        brandline={brandline}
        gradient={gradient}
        fontColor={fontColor}
        childRef={exportRef}
      />
      <div className="flex flex-col items-start justify-center form-wrapper gap-2 w-100">
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Designation"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => {
            setAddresss(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Phone"
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Company"
          onChange={(e) => {
            setBrandName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Tag Line"
          onChange={(e) => {
            setBrandline(e.target.value);
          }}
        />
        <p className="flex gap-1 items-center text-slate-500 outline outline-2 p-2 rounded">
          <FiInfo />
          Copy paste from tailwind classes from{" "}
          <a href="https://hypercolor.dev/" className="text-blue underline">
            Hyper Color{" "}
          </a>
          to below
        </p>
        <input
          type="text"
          placeholder="Gradient"
          onChange={(e) => {
            setGradient(e.target.value);
          }}
        />
        <p className="flex gap-1 items-center text-slate-500 outline outline-2 p-2 rounded">
          <FiInfo />
          Copy paste from tailwind classes from{" "}
          <a
            href="https://tailwindcss.com/docs/text-color"
            className="text-blue underline"
          >
            Here{" "}
          </a>
          to below
        </p>
        <input
          type="text"
          placeholder="Font Color"
          onChange={(e) => {
            setFontColor(e.target.value);
          }}
        />
        <button
          className="bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white
          p-5 rounded font-paul
          "
          onClick={() => exportAsImage(exportRef.current, "Paul Allen")}
        >
          Export as Image
        </button>
        <br />
        <p className="text-center text-sm font-paul">
          Made by <a href="https://t4p4n.github.io">Paul Allen</a>
        </p>
        <br />
      </div>
    </>
  );
}

export default App;
