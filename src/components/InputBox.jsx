import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  return (
    <div className="flex justify-center">
      <div className="bg-white flex justify-center gap-6 p-2 mx-3 w-auto rounded-2xl">
        <div className="flex flex-col w-1/2 p-2">
          <label className="pb-1 text-slate-700">{label}</label>
          <input
            type="number"
            min={1}
            placeholder="Amount"
            value={amount}
            disabled={amountDisable}
            className=" w-2/3 sm:w-1/2 rounded-md font-semibold"
            onChange={(e) => {
              onAmountChange && onAmountChange(Number(e.target.value));
            }}
          />
        </div>
        <div className="w-1/2 sm:p-2">
          <p className="pb-1 text-slate-700">Currency Type</p>
          <select
            className=" w-1/2 rounded-md font-semibold ml-7"
            value={selectCurrency}
            disabled={currencyDisable}
            onChange={(e) => {
              onCurrencyChange && onCurrencyChange(e.target.value);
            }}
          >
            {currencyOptions.map((currency) => {
               return <option key={currency} value={currency}>
                {currency}
              </option>
            })}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
