import React from "react";
import "./Paymentcard.css";
const Paymentcard = () => {
  return (
    <>
      <div className="pay_card" style={{ position: "sticky", top: "100px" }}>
        <div className="payment_card">
          <p className="notice">
            Hello Dear Student, <br />
            Please pay <b>20,000 </b>for <b> Rapid Course of Amazon FBA </b>
            wholesale Please deposit to the account number below and don't
            forget to fill out this form and upload the screenshot of your
            payment receipt in this form here: <br />
            <a href="https://form.jotform.com/222736750314453">https://form.jotform.com/222736750314453</a>
            <br />
            <br />
            <b style={{fontSize:"25px"}}>Bank: Faysal Bank </b> <br />
            Account Title: The Techrotics Lab Pvt Ltd <br />
            Account No: 3026301000003880 
            <br />
            <br />
            <b style={{fontSize:"25px", color:"#097969"}}>Easy Paisa:</b> <br />
            No: 03363932938 <br />
            Title: Irfan Ahmed
            <br />
            <br />
            <b style={{fontSize:"25px" , color:"#680C07"}}>JazzCash</b> <br />
            No: 03032926657 <br />
            Title: Irfan Ahmed 
            <br />
            <br />
            Thank you Regards, Paras
            Mughal Business Development Manager at <b style={{color:"#203354"}}>The Techrotics Lab</b> 
          </p>
        </div>
      </div>
    </>
  );
};

export default Paymentcard;
