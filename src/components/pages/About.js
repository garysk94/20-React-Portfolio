import React from "react";
import pic from "../../images/pic.jpg";

export default function About() {
  return (
    <div class="container pt-5 about">
      <div class="row justify-content-center ">
        <div class="col-md-2">
          <h1 class="aboutMe">About me</h1>
        </div>
      </div>
      <div class="row justify-content-center align-items-center pt-5">
        <div class="col-lg-3 text-center p-2">
          <img src={pic} alt="Tinku's Pic"></img>
        </div>
        <div class="col-lg-8 p-2">
          <p>
            My name is Geraldo Skana and I am a IT specialist with CompTIA certification with extensive experience in providing
            technical support to end-users. I have a strong understanding of hardware and software troubleshooting, network configurations, 
            and system administration.
            Currently studying full stack Web Developer at UCONN Boot Camp.
            At the moment workig as IT and a reinsurance company,managing a team of six maintaining and managing IT equipments and Active Direcoty.
          </p>
        </div>
      </div>
    </div>
  );
}