import React from "react";
import Navbarf from "./Navbarf.js";
import studentContext from "../../context/student/studentContext";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import Facultyinch from "./Facultyinch";
//import Data from "./Datas";
//import DataProvider from "./Datas";

const Combinedf = () => {
  const { email } = useParams();
  //console.log("email found in combined", email);
  const context = useContext(studentContext);
  const { addPopSlots, popSlots, getPopSlots } = context;
  // const Data = DataProvider();
  const Data = [];
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

  {
    /*} useEffect(() => {
    if (popSlots) {
      for (let i = 0; i < popSlots.length; i++) {
        if (popSlots[i].isVerified === true) {
          Data.push(popSlots[i]);
        }
      }
      console.log("Data in combinedf ", Data);
      console.log("popSlots", popSlots);
    }
  }, [popSlots]);*/
  }

  {
    /*} useEffect(() => {
    if (!isDataPushed && Data.length > 1) {
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
            item.pole_figure,
            item.additional_remarks
          ).catch((error) => {
            console.error("Error adding data to MongoDB:", error);
          });
        }
      });
      setDataPushed(true);

      // Set the flag to indicate data has been pushed
      // setDataPushed(true);
    }
  }, [Data, isDataPushed, addPopSlots, popSlots]);*/
  }

  const handleData = (popSlots) => {
    // console.log("got data", Data);
    if (popSlots) {
      for (let i = 0; i < popSlots.length; i++) {
        if (popSlots[i].isVerified === true) {
          Data.push(popSlots[i]);
        }
      }
      console.log("Data in combinedf ", Data);
      console.log("popSlots", popSlots);
    }
    let faculty_inch = "";
    let equipment = [];
    if (email === "132101003@smail.iitpkd.ac.in") {
      faculty_inch = "sohan manni";
      equipment.push("exp1");
    }
    if (email === "apsinghxz@gmail.com") {
      faculty_inch = "Albert sunny";
      equipment.push("exp2");
    }

    const modifiedData = [];
    //  for (let i = 0; i < popSlots.length; i++) {
    //   if (popSlots[i].supervisor === supervisor) {
    //     modifiedData.push(popSlots[i]);
    //   }
    // }
    for (let i = 0; i < Data.length; i++) {
      for (let j = 0; j < equipment.length; j++) {
        if (equipment[j] === Data[i].instrument) {
          modifiedData.push(Data[i]);
        }
      }
    }
    console.log("modified data in combinedf ", modifiedData);
    return modifiedData;
  };

  return (
    <div>
      <Navbarf></Navbarf>
      {/*Data={popSlots}*/}
      <h3 style={{ textAlign: "center" }} className="mt-2">
        <strong>Faculty Incharge</strong>
      </h3>

      <Facultyinch Data={handleData(popSlots)} email={email}></Facultyinch>
    </div>
  );
};

export default Combinedf;
