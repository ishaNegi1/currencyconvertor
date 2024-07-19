import { useState } from "react";
import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import Navbar from "./components/Navbar";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convert, setConvert] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  function convertAmount() {
    setConvert((amount * currencyInfo[to]).toFixed(3));
  }

  return (
    <>
    <Navbar/>
      <div className="flex justify-center mt-14">
        <div className=" bg-white bg-opacity-20 px-4 py-10 w-auto rounded-md outline outline-white outline-2 mx-4">
          <div className="flex flex-col justify-center">
            <InputBox
              label="From"
              currencyOptions={options}
              selectCurrency={from}
              onCurrencyChange={(curr) => {
                setFrom(curr);
              }}
              onAmountChange={(amount) => {
                setAmount(amount);
              }}
            />
            <div className=" mt-3 mb-5">
              <InputBox
                label="To"
                amount={convert}
                amountDisable={true}
                currencyOptions={options}
                selectCurrency={to}
                onCurrencyChange={(curr) => {
                  setTo(curr);
                }}
              />
            </div>
            <button
              className="bg-gray-800 transition-colors hover:bg-slate-900 rounded-md text-white py-2"
              onClick={convertAmount}
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
