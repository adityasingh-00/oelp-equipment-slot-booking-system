const express = require("express");
const User = require("../models/Student");
const Slot = require("../models/slot");
const PrevData = require("../models/PrevData");
const Student = require("../models/Student");
const Notification = require("../models/notification");
const router = express.Router();
const { body } = require("express-validator");
const Counter = require("../models/Counter");
const Popslot = require("../models/Popslot");
const Rejnmessage = require("../models/rejectionMessage");

//Route 1
router.post(
  "/createuser",
  [
    body("job_no", "enter job no"),
    body("username", "enter username"),
    body("institute_Id", "enter institute id number"),
    body("payment_funded_from", "enter username"),
    body("sponsoredReserch", "enter username"),
    body("industrialConsultancy", "enter username"),
    body("projectCode", "enter username"),
    body("budgetHead", "enter username"),
    body("consumables", "enter username"),
    body("contingencies", "enter username"),
    body("analytical_charges", "enter username"),
    body("others", "enter username"),
    body("end_data_of_project", "enter username"),
    body("department", "enter username"),
    body("supervisor", "enter username"),
    body("mobile_no", "enter username"),
    body("institute_emailId", "enter username"),
    body("date", "enter Date"),
    body("experiment", "enter the experiment name"),
    body("time", "enter time"),
    body("scanning_angle", "enter time"),
    body("powder", "enter time"),
    body("thin film", "enter time"),
    body("variable temp XRD", "enter time"),
    body("XRR", "enter time"),
    body("saxs", "enter time"),
    body("pole figure/RSM", "enter time"),
    body("additional remarks", "enter time"),
  ],
  async (req, res) => {
    user = await User.create({
      job_no: req.body.job_no,
      username: req.body.username,
      institute_Id: req.body.institute_Id,
      payment_funded_from: req.body.payment_funded_from,
      sponsoredReserch: req.body.sponsoredReserch,
      industrialConsultancy: req.body.industrialConsultancy,
      projectCode: req.body.projectCode,
      budgetHead: req.body.budgetHead,
      consumables: req.body.consumables,
      contingencies: req.body.contingencies,
      analytical_charges: req.body.analytical_charges,
      others: req.body.others,
      end_data_of_project: req.body.end_data_of_project,
      department: req.body.department,
      supervisor: req.body.supervisor,
      mobile_no: req.body.mobile_no,
      institute_emailId: req.body.institute_emailId,
      date: req.body.date,
      experiment: req.body.experiment,
      time: req.body.time,
      scanning_angle: req.body.scanning_angle,
      powder: req.body.powder,
      thin_film: req.body.thin_film,
      variable_temp_xrd: req.body.variable_temp_xrd,
      xrr: req.body.xrr,
      saxs: req.body.saxs,
      pole_figure: req.body.pole_figure,
      additional_remarks: req.body.additional_remarks,
      sample_comp_exp2: req.body.sample_comp_exp2,
      rockwell: req.body.rockwell,
      brinell: req.body.rockwell,
      vickers: req.body.vickers,
      knoop: req.body.knoop,
      additional_parameter_exp2: req.body.additional_parameter_exp2,
    });
    res.json(user);
  }
);
router.post(
  "/timeslot",

  [
    body("date", "Enter a valid date"),

    body("emailId", "write your email Id"),
    body("time", "Description must be atleast 5 charactersS"),
    body("equipment", "Description must be atleast 5 charactersS"),
  ],
  async (req, res) => {
    // const { date, emailId, time } = req.body;
    // If there are errors , return Bad request and errors
    const slot = await Slot.create({
      date: req.body.date,

      emailId: req.body.emailId,
      time: req.body.time,
      equipment: req.body.equipment,
    });
    res.json({ message: "slot created" });
  }
);

router.post(
  "/prevdata",

  [
    body("jobno", "Enter a valid date"),

    body("date", "write your email Id"),
    body("time", "Description must be atleast 5 charactersS"),
    body("equipment", "Description must be atleast 5 charactersS"),
  ],
  async (req, res) => {
    // const { date, emailId, time } = req.body;
    // If there are errors , return Bad request and errors
    const prevNotice = await PrevData.create({
      jobno: req.body.jobno,
      date: req.body.date,

      time: req.body.time,
      equipment: req.body.equipment,
    });
    res.json({ message: "slot created" });
  }
);
router.post(
  "/notify",
  [
    body("email", "enter the email"),
    body("job_no", "enter the job no"),

    body("supervisor_note", "enter the email"),

    body("faculty_inch_note", "enter the email"),
  ],
  async (req, res) => {
    const notification = await Notification.create({
      email: req.body.email,
      job_no: req.body.job_no,
      supervisor_accept: req.body.supervisor_accept,
      supervisor_reject: req.body.supervisor_reject,
      supervisor_note: req.body.supervisor_note,
      faculty_inch_accept: req.body.faculty_inch_accept,
      faculty_inch_reject: req.body.faculty_inch_reject,
      faculty_inch_note: req.body.faculty_inch_note,
    });
    res.json({ message: "notification created" });
  }
);

router.post(
  "/popslots",
  [
    body("jobno", "Enter the job no"),
    body("username", "Enter the username"),
    body("instrument", "Enter the instrument"),
    body("v", "Enter the v"),
    body("isVerified", "Enter the isVerified"),
    body("time", "Enter the time"),
    body("rollNumber", "Enter the rollNumber"),
    body("supervisor", "Enter the supervisor name"),
  ],
  async (req, res) => {
    const populatedslot = await Popslot.create({
      jobno: req.body.jobno,
      username: req.body.username,
      instrument: req.body.instrument,
      v: req.body.v,
      isVerified: req.body.isVerified,
      time: req.body.time,
      rollNumber: req.body.rollNumber,
      supervisor: req.body.supervisor,
    });
    res.json({ message: "Requested slot populated" });
  }
);
router.delete("/deleteslots/:id", async (req, res) => {
  try {
    //Find the note to be deleted and delete it
    let slot = await Slot.findById(req.params.id);
    if (!slot) {
      return res.status(404).send("Not Found");
    }
    // Allow deletion only if user owns this Note
    //if (note.user.toString() !== req.user.id) {
    //   return res.status(401).send("Not Allowed");
    // }
    slot = await Slot.findByIdAndDelete(req.params.id);
    res.json({ Success: "Note has been deleted", slot: slot });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
router.post(
  "/addcounter",
  [body("jobno", "Enter a valid job no")],
  async (req, res) => {
    // const { date, emailId, time } = req.body;
    // If there are errors , return Bad request and errors
    const counter = await Counter.create({
      jobno: req.body.jobno,
    });
    res.json({ message: "job no assigned" });
  }
);
router.get("/gettimeslot", async (req, res) => {
  const slot = await Slot.find();
  res.json(slot);
});
router.get("/getrejnmessage", async (req, res) => {
  const sugg = await Rejnmessage.find();
  res.json(sugg);
});
router.get("/getprevdata", async (req, res) => {
  const sugg = await PrevData.find();
  res.json(sugg);
});

router.get("/getstudents", async (req, res) => {
  const student = await Student.find();
  //console.log(req.params.email);
  {
    /*} const stud = [];
  for (let i = 0; i < student.length; i++) {
    if (student[i].institute_emailId === req.params.email) {
      stud.push(student[i]);
    }
  }*/
  }
  res.json(student);
});
router.get("/getpopslots", async (req, res) => {
  const populatedslot = await Popslot.find();
  res.json(populatedslot);
});
router.put("/updatepopslots/:id/:inp", async (req, res) => {
  const { jobno, username, instrument, v, time, rollNumber } = req.body;
  console.log(typeof jobno);
  console.log(typeof req.params.jobno);
  console.log(typeof parseInt(req.params.id));
  const updatedFields = {};
  if (username) updatedFields.username = username;
  if (instrument) updatedFields.instrument = instrument;
  if (v) updatedFields.v = v;
  if (time) updatedFields.time = time;
  if (rollNumber) updatedFields.rollNumber = rollNumber;

  updatedFields.isVerified = true;
  if (req.params.inp === "accepted") {
    updatedFields.accepted = true;
  }
  if (req.params.inp === "rejected") {
    updatedFields.rejected = true;
  }
  if (req.params.inp === "rejectedFin") {
    updatedFields.rejectedFin = true;
    updatedFields.isVerifiedFin = true;
  }
  if (req.params.inp === "acceptedFin") {
    updatedFields.acceptedFin = true;
    updatedFields.isVerifiedFin = true;
  }

  const populatedslot = await Popslot.find();
  for (let i = 0; i < populatedslot.length; i++) {
    if (parseInt(req.params.id) === populatedslot[i].jobno) {
      console.log("Success");
      try {
        await Popslot.updateOne(
          { jobno: populatedslot[i].jobno },
          { $set: updatedFields }
        );
        console.log("Success");
      } catch (error) {
        console.error("Error updating Popslot:", error);
        return res.status(500).send("Error updating Popslot");
      }
      const obj1 = {
        jobno: populatedslot[i].jobno,
        username: populatedslot[i].username,
        instrument: populatedslot[i].instrument,
        v: true,
        isVerified: true,
        time: populatedslot[i].time,
        rollNumber: populatedslot[i].rollNumber,
      };
      res.json([obj1]);
      break;
    }
  }
});
router.post(
  "/rejnmessage",

  async (req, res) => {
    const rejnmessage = await Rejnmessage.create({
      jobno: req.body.jobno,
      supervisor: req.body.supervisor,
      facultyIncharge: req.body.facultyIncharge,
    });
    res.json({ message: "suggestion created" });
  }
);

router.get("/counter", async (req, res) => {
  const job = await Counter.find();
  if (job.length === 0) {
    res.json(1001);
  } else {
    const jobCount = job.length + 1001;
    res.json(jobCount);
  }
});

module.exports = router;
