import React from "react";

export default function CheckMark() {
  return (
    <div className="flex justify-start items-center gap-1">
      <input type="checkbox" name="option1" value="option1" className="p-8" />
      <label className="custom-checkbox">
        <input type="checkbox" />
        Select Option
      </label>

      <p>Sport</p>
      <p>()</p>
    </div>
  );
}
