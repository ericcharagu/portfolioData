import React from "react";
import "./academic.css";
import { Chrono } from "react-chrono";
import { timeLine } from "./academicData";
function Academic() {
  return (
    <div className="conntainer-fluid" id="timelineDiv">
      <h3>Timeline</h3>
      <Chrono
        items={timeLine}
        mode="VERTICAL_ALTERNATING"
        slideShow
        slideItemDuration={4000}
        borderLessCards
        scrollable
        cardWidth={300}
        cardHeight={150}
        theme={{
          primary: "rgb(0, 100, 158)",
          secondary: " rgb(0, 100, 158)",
          titleColor: "black",
          cardTitleColor: "black",
          titleColorActive: "rgb(250, 238, 238)",
          titleBgColorActive: "rgb(250, 238, 238)",
        }}
        buttonTexts={{
          first: "Jump to First",
          last: "Jump to Last",
          next: "Next",
          previous: "Previous",
        }}
        classNames={{
          card: "my-card",
          cardMedia: "my-card-media",
          cardSubTitle: "my-card-subtitle",
          cardText: "my-card-text",
          cardTitle: "my-card-title",
          controls: "my-controls",
          title: "my-title",
        }}
      />
    </div>
  );
}

export default Academic;
