import PDFDocument from "pdfkit-table";

export default function buildPdf(dataCallback, endCallback) {
    const doc = new PDFDocument();

    doc.on("data", dataCallback);
    doc.on("end", endCallback);

    const tableArray = {
        title: "Title",
        subtitle: "Subtitle",
        headers: [ "Country", "Conversion rate", "Trend" ],
        rows: [
          [ "Switzerland", "12%", "+1.12%" ],
          [ "France", "67%", "-0.98%" ],
          [ "England", "33%", "+4.44%" ],
        ],
      };
      doc.table(tableArray,{width: 500} )
    
    doc.end();
}


