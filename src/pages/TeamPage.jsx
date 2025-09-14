"use client";

import React from "react";
import "./TeamPage.css";
import dynamic from "next/dynamic";

const TeamCardAnimation = dynamic(
  () => import("../components/TeamCardAnimation"),
  { ssr: false } // ⬅️ disables server-side rendering for this component
);


const teamMembers = [
  { name: "Bavitesh M", role: "Head", img: "bavitesh.jpg", link: "https://www.linkedin.com/in/bavitesh-m-017007114" },
  { name: "Divyarajsinh Matieda", role: "Vice Head", img: "Divyaraj.jpg", link: "https://www.linkedin.com/in/divyarajsinh-matieda-28babb242" },
  { name: "Anushrava Bhat", role: "General Secretary", img: "Anushrava.jpg", link: "https://www.linkedin.com/in/anushrava-bhat-9aa98b268" },
  { name: "C R Ananya", role: "Joint General Secretary", img: "Ananya.jpg", link: "https://www.linkedin.com/in/ananya-cr-0621b1260" },
  { name: "Nayanika", role: "Sponsorship & Finance Head", img: "Nayanika.jpg", link: "#" },
  { name: "Hrudya MR", role: "Joint Sponsorship & Finance Head", img: "Hrudya.jpg", link: "https://www.linkedin.com/in/hrudya-m-r-269920257" },
  { name: "Anindita", role: "Strategy & Analysis Head", img: "Anindita.jpg", link: "#" },
  { name: "Srinija Inguva", role: "Joint Strategy & Analysis Head", img: "Srinija.jpg", link: "https://www.linkedin.com/in/srinija-inguva-6b342b2a3" },
  { name: "Shubham Mathad", role: "Design Head", img: "Shubham.jpg", link: "https://www.linkedin.com/in/shubham-mathad" },
  { name: "Chandhana", role: "Joint Design Head", img: "chandhana.jpg", link: "#" },
  { name: "Manasi S", role: "Technical Head", img: "Manasi.jpg", link: "https://www.linkedin.com/in/manasisridharan/" },
  { name: "Sagar Patil", role: "Joint Technical Head", img: "Sagar.jpg", link: "https://www.linkedin.com/in/sagarplinkdn07" },
  { name: "Sharanya P", role: "Social Media & Content Creation Head", img: "Sharanya.jpg", link: "https://www.linkedin.com/in/sharanya-p-755b0a270" },
  { name: "Arindam Kalita", role: "Joint Social Media & Content Creation Head", img: "Arindham.jpg", link: "https://www.linkedin.com/in/arindam-kalita-4a6514250/" },
  { name: "Jahanavi A", role: "Marketing Head", img: "Jahnavi.jpg", link: "http://www.linkedin.com/in/jahnavi-a-820764316" },
  { name: "Aniketh Joshi", role: "Joint Marketing Head", img: "Aniketh.jpg", link: "https://www.linkedin.com/in/aniketh-joshi-1a2a12271" },
  { name: "Sameer", role: "Events Head", img: "Sameer.jpg", link: "#" },
  { name: "Gayathri R Bhat", role: "Joint Events Head", img: "gayathri.jpg", link: "https://www.linkedin.com/in/gayathri-r-bhat-a59705251" },
  { name: "Ryan Cruz", role: "Institution's Innovation Council Head", img: "Ryan.jpg", link: "https://www.linkedin.com/in/ryan-cruz-6348a52a3" },
  { name: "Ishita Tandon", role: "Joint Institution's Innovation Council Head", img: "ishita.jpg", link: "https://www.linkedin.com/in/ishita-tandon-163868244" },
  { name: "Sriraksha", role: "Joint Institution's Innovation Council Head", img: "Sriraksha.jpg", link: "#" },
];

const TeamPage = () => {
  return (
    <section className="team-page-section">
      <header className="team-header">
        <h1 className="team-main-title">OUR TEAM - ACADEMIC YEAR 2024-2025</h1>
      </header>

      {/* Instead of grid, use GSAP-powered card stack */}
      <TeamCardAnimation cards={teamMembers} />
    </section>
  );
};


export default TeamPage;
