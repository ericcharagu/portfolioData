import React, { useState, useRef } from "react";
import { Document, Page } from "react-pdf";
import heartPred from "../pdf/heart_pred.pdf";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function Notebook() {
  return (
    <div className="container-fluid">
      {" "}
      <Document file={heartPred} />
    </div>
  );
}
export default Notebook;
