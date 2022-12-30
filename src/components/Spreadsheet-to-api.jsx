import React, { useEffect, useState } from "react";
import { config } from "../config";
import { spreadsheet_API_Key } from "../config";
const sheet_API = `${config.baseUrl}${config.spreadsheetId}/values/sheet1?key=${spreadsheet_API_Key}%20&%20&majorDimension=ROWS`;
const SpreadsheetToapi = () => {
  const [sheetData, setSheetData] = useState([]);
  const [heading, SetHeading] = useState([]);
  useEffect(() => {
    console.log({ sheetData });
  }, [sheetData]);

  useEffect(() => {
    console.log({ heading });
  });

  useEffect(() => {
    var result = sheetData?.[0];
    if (result) {
      var ans = Object.keys(result);
      SetHeading(ans);
    }
  }, [sheetData]);

  const fetchSheetData = async () => {
    const response = await fetch(sheet_API);
    const data = await response.json();
    console.log({ data: data?.values });
    const filterData = data?.values?.slice(1)?.map((row, index) =>
      row.reduce(function (acc, cur, i) {
        acc[data?.values?.[0][i]] = cur;
        return acc;
      }, {})
    );
    console.log({ filterData });
    setSheetData(filterData);
  };

  useEffect(() => {
    fetchSheetData();
    return () => {};
  }, []);

  return (
    <div>
      <h1 className="p-2 bg-purple-600 font-bold text-white">
        Spreadsheet-To-API
      </h1>

      {sheetData &&
        sheetData.map((data, index) => (
          <>
            <div key={index} className="space-x-5">
              <h2>{`${heading?.[0]}: ${data.id}`}</h2>
              <h2>{`${heading?.[1]}: ${data.name}`}</h2>
              <h2>{`${heading?.[2]}: ${data.middlename}`}</h2>
              <h2>{`${heading?.[3]}: ${data.surname}`}</h2>
              <h2>{`${heading?.[4]}: ${data.gender}`}</h2>
              <h2>{`${heading?.[5]}: ${data.address}`}</h2>
            </div>
          </>
        ))}

      <input type="password" name="" id="" className="border password" />
    </div>
  );
};

export default SpreadsheetToapi;
