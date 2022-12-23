import { useRef, useState } from "react";
import Patrick from "./Templates/Patrick";
import { FiInfo } from "react-icons/fi";
import exportAsImage from "./exportAsImage";
import ListGradients from "./Components/ListGradients";
import Modal from "./Components/Modal";

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
  const [fontColor, setFontColor] = useState("#fff");
  const exportRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [fontPickerOpen, setFontPickerOpen] = useState(false);
  // {
  //   name: 'Salem',
  //   direction: 'bg-gradient-to-b',
  //   colors: 'from-gray-900 via-purple-900 to-violet-600'
  // },
  // bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600
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

        <div className="flex flex-row items-center w-full justify-between gap-2">
          <button
            className="p-5 outline outline-1
            outline-slate-400 text-slate-500
            rounded hover:cursor-pointer font-paul"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            Choose a Background color
          </button>
          {isOpen ? (
            <>
              <button
                className="p-5 outline outline-1
                outline-slate-400 text-slate-500
                rounded hover:cursor-pointer font-paul"
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Close
              </button>
            </>
          ) : null}
        </div>
        {isOpen ? (
          <Modal
            setIsOpen={setIsOpen}
            content={<ListGradients setGradient={setGradient} />}
          />
        ) : null}
        <div className="flex flex-row items-center w-full justify-between gap-2">
          <div
            className="p-5 outline outline-1
            outline-slate-400 text-slate-500
            rounded hover:cursor-pointer font-paul"
            onClick={() => {
              setFontPickerOpen(!fontPickerOpen);
            }}
          >
            Choose a Font Color
          </div>
          {fontPickerOpen ? (
            <>
              <input
                type="color"
                id="body"
                name="body"
                onChange={(e) => {
                  setFontColor(e.target.value);
                }}
                value={fontColor}
                className="p-1 outline outline-1
            outline-slate-400 text-slate-500
            rounded hover:cursor-pointer"
              />
            </>
          ) : null}
        </div>

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
