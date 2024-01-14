import studentContext from "../../context/student/studentContext";
import { useContext, useEffect, useState } from "react";

function DataProvider() {
  const context = useContext(studentContext);
  const {
    bookedSlots,
    getBookedSlots,
    students,
    getStudents,
    popSlots,
    addPopSlots,
  } = context;

  const [data, setData] = useState([]);
  const newData = [];
  const seenObjects = new Map();

  useEffect(() => {
    const fetchData = async () => {
      await getStudents();
      await getBookedSlots();
    };
    fetchData();
  }, []);
  const emailList1 = bookedSlots.map((slot) => slot.emailId);
  let emailList = [...new Set(emailList1)];
  console.log(emailList);
  // let emailListSet = new Set(emailList1);
  //let emailList = Array.from(emailListSet);
  //console.log(emailList);
  // console.log("students", students);

  for (let i = 0; i < emailList.length; i++) {
    // if (students) {
    // const stud = students.find(
    // (student) => student.institute_emailId === emailList[i]
    //);
    let time_arr = [];
    for (let k = 0; k < bookedSlots.length; k++) {
      if (bookedSlots[k].emailId === emailList[i]) {
        time_arr.push(bookedSlots[k].time);
      }
    }
    console.log("time arr", time_arr);
    if (students) {
      let l = 0;
      for (let j = 0; j < students.length; j++) {
        if (students[j].institute_emailId === emailList[i]) {
          const newObj = {
            jobno: students[j].job_no,
            username: students[j].username,
            instrument: students[j].experiment,
            v: true,
            isVerified: false,
            // time: bookedSlots[l].time,
            time: time_arr[l++],
            rollNumber: students[j].institute_Id,

            supervisor: students[j].supervisor,
          };
          {
            /*}  addPopSlots(
            newObj.jobno,
            newObj.name,
            newObj.instrument,
            newObj.v,
            newObj.time,
            newObj.rollNumber
        );*/
          }

          //newData.push(newObj);
          const objString = JSON.stringify(newObj);

          // Check if the string representation is already in the Map
          if (!seenObjects.has(objString)) {
            // If not, add it to the Map and push the object to newData
            seenObjects.set(objString, true);
            newData.push(newObj);
          }
        }
      }
      //setData(newData);
    }
  }

  // Empty dependency array to run the effect only once when the component mounts
  console.log("new Data", newData);

  return newData;
}

export default DataProvider;

/*const data = [
  {
    name: "Rohit",
    instrument: "Experiment 1",
    v: true,
    time: "10:00 - 11:00",
    rollNumber: "115615615",
  },
  {
    name: "Rohit",
    instrument: "Experiment 1",
    v: true,
    time: "10:00 - 11:00",
    rollNumber: "115615615",
  },
  {
    name: "Rohit",
    instrument: "Experiment 1",
    v: true,
    time: "10:00 - 11:00",
    rollNumber: "115615615",
  },
  {
    name: "Rohit",
    instrument: "Experiment 1",
    v: true,
    time: "10:00 - 11:00",
    rollNumber: "115615615",
  },
  {
    name: "Rohit",
    instrument: "Experiment 1",
    v: true,
    time: "10:00 - 11:00",
    rollNumber: "115615615",
  },
];
console.log(typeof data);
const ran = [];
for (let i = 0; i < 2; i++) {
  const newObj = { name: "Aditya", exp: "exp1" };
  ran.push(newObj);
}

console.log(typeof ran);

export default data; */
