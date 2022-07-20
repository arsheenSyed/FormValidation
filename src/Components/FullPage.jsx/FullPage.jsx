import React, { useState } from "react";
import FullImg from "./FullImg";
import "./FullPage.css";
import DynamicLogin from "../DynamicLogin";
import DynamicSignUp from "../DynamicSignUp";
export default function Fullpage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 left--row"></div>
        <div className="col-md-6 right--row">
          <DynamicSignUp />
        </div>
      </div>
    </div>
  );
}
