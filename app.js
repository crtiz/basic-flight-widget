const tableBody = document.getElementById("table-body");

let flights = [
  {
    time: "08:11",
    destination: "LA",
    flight: "LAX 203",
    gate: "A 01",
    remarks: "ON TIME"
  },
  {
    time: "12:39",
    destination: "NY",
    flight: "N 320",
    gate: "N 73",
    remarks: "CANCELLED"
  },
  {
    time: "13:00",
    destination: "INDY",
    flight: "IN 500",
    gate: "N 345",
    remarks: "CANCELLED"
  },
  {
    time: "14:50",
    destination: "MIAMI",
    flight: "MIA 9000",
    gate: "M 120",
    remarks: "DELAYED"
  },
  {
    time: "20:00",
    destination: "TEXAS",
    flight: "TBONE 20",
    gate: "TX 69",
    remarks: "ON TIME"
  }
];

const destination = [""];

function populateTable() {
  for (const flight of flights) {
    const tableRow = document.createElement("tr");

    for (const flightDetail in flight) {
      const tableCell = document.createElement("td");
      const word = Array.from(flight[flightDetail]);

      for (const [index, letter] of word.entries()) {
        const letterElement = document.createElement("div");
        setTimeout(() => {
          letterElement.classList.add("flip");
          letterElement.textContent = letter;
          tableCell.append(letterElement);
        }, 100 * index);
      }
      tableRow.append(tableCell);
    }
    tableBody.append(tableRow);
  }
}

populateTable();
