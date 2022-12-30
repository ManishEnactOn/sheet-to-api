import React, { useEffect, useState } from "react";
// import { DropDownList } from "@syncfusion/ej2-dropdowns";
// import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
const SyncFusion = () => {
  // let sportsData = ["Badminton", "Cricket", "Football", "Golf", "Tennis"];
  //   let dropDownListObject = new DropDownList({
  //     //set the data to dataSource property
  //     dataSource: sportsData,
  //   });
  //   console.log({ dropDownListObject });

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleDarkMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <h1>SyncFusion Library</h1>
      <div className="mt-28">
        {/* <DropDownListComponent dataSource={sportsData} />
         */}
        <h1 className="bg-gray-300 dark:bg-black dark:text-white w-32">
          {" "}
          Hello World
        </h1>
        <button className="p-1 rounded bg-green-300" onClick={handleDarkMode}>
          {theme === "dark" ? "Lightmode" : "Darkmode"}
        </button>
      </div>
    </div>
  );
};

export default SyncFusion;
