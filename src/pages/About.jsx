import React from "react";
import InfoRow from "../components/home/infoRow/InfoRow";
import HeroImage from "../components/home/HeroImage";

const team = [
  {
    name: "",
    designation: "",
    desc: "",
    socials: [{ twitter: "", facebook: "", instagram: "", linkedin: "" }],
  },
];

function About() {
  return (
    <div>
      <HeroImage
        url="https://videos.pexels.com/video-files/856958/856958-hd_1920_1080_30fps.mp4"
        title="About Us"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, incidunt."
      />
      <InfoRow
        title="Our Story"
        img="https://images.unsplash.com/photo-1527067829737-402993088e6b?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sunt
            accusamus, numquam obcaecati debitis aliquid veritatis deserunt,
            maxime vel temporibus beatae consectetur voluptatibus explicabo
            dolore! Aut sint quasi voluptatibus magnam."
        imageFirst
      />
    </div>
  );
}

export default About;
