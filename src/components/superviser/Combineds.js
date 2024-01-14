import React from "react";
import Navbars from "./Navbars.js";
import studentContext from "../../context/student/studentContext";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Supervisor from "./Supervisor";
//import Data from "./Datas";
import DataProvider from "./Datas";

const Combineds = () => {
  const { email } = useParams();
  //console.log("email found in combined", email);
  const context = useContext(studentContext);
  const { addPopSlots, popSlots, getPopSlots } = context;
  const Data = DataProvider();
  console.log("Data", Data);
  const [isDataPushed, setDataPushed] = useState(false);
  const [popData, setPopData] = useState([]);
  const seenObjects = new Map();
  //  console.log("Data", Data);
  useEffect(() => {
    const fetchPop = async () => {
      await getPopSlots();
    };
    fetchPop();
  }, []);

  useEffect(() => {
    if (!isDataPushed && Data.length > 0) {
      // Push data if it hasn't been pushed already
      console.log("Data found", Data.length);
      console.log("Data", Data);
      console.log("pop Slots", popSlots);
      console.log("pop slots length", popSlots.length);
      console.log("popslots", popSlots);

      Data.forEach((item) => {
        console.log("Data inside");
        let check = false;
        for (let i = 0; i < popSlots.length; i++) {
          if (popSlots[i].jobno === item.jobno) {
            check = true;
            break;
          }
        }

        if (!check) {
          addPopSlots(
            item.jobno,
            item.username,
            item.instrument,
            item.v,
            item.time,
            item.rollNumber,
            item.supervisor,
            item.scanning_angle,
            item.powder,
            item.thin_film,
            item.variable_temp_xrd,
            item.xrr,
            item.saxs,
            item.pole_figure
            // item.additional_remarks,
            //  item.sample_comp_exp2,
            //  item.rockwell,
            //  item.brinell,
            //   item.vickers,
            //   item.knoop,
            //   item.additional_parameter_exp2,
          ).catch((error) => {
            console.error("Error adding data to MongoDB:", error);
          });
        }
      });
      setDataPushed(true);

      // Set the flag to indicate data has been pushed
      // setDataPushed(true);
    }
  }, [Data, isDataPushed, addPopSlots, popSlots]);

  const handleData = (popSlots) => {
    let supervisor = "";
    if (email === "132101003@smail.iitpkd.ac.in") {
      supervisor = "chandra prakash singh";
    }
    if (email === "apsinghxz@gmail.com") {
      supervisor = "Albert sunny";
    }
    const modifiedData = [];
    for (let i = 0; i < popSlots.length; i++) {
      if (popSlots[i].supervisor === supervisor) {
        modifiedData.push(popSlots[i]);
      }
    }
    console.log("modified data", modifiedData);
    return modifiedData;
  };

  return (
    <div>
      <Navbars></Navbars>
      <h3 style={{ textAlign: "center" }} className="mt-2">
        <strong>Supervisor</strong>
      </h3>
      {/*Data={popSlots}*/}
      <Supervisor Data={handleData(popSlots)} email={email}></Supervisor>
    </div>
  );
};

export default Combineds;
