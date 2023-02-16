const data = [
  { code: "A001", name: "Wati", parent: "" },
  { code: "A002", name: "Wira", parent: "A001" },
  { code: "A003", name: "Andi", parent: "A002" },
  { code: "A004", name: "Bagus", parent: "A002" },
  { code: "A005", name: "Siti", parent: "A001" },
  { code: "A006", name: "Hasan", parent: "A005" },
  { code: "A007", name: "Abdul", parent: "A006" },
];

function getChildrenNames(code) {
  const parentData = data.find((item) => item.code === code);

  if (!parentData) {
    console.log("Kode tidak ditemukan.");
    return;
  }

  const children = data.filter((item) => item.parent === code);

  let result = [];

  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    result.push(child.name);
    result = result.concat(getChildrenNames(child.code));
  }

  return result;
}

console.log(getChildrenNames("A001")); // output: ["Wira", "Andi", "Bagus", "Siti", "Hasan", "Abdul"]
console.log(getChildrenNames("A002")); // output: ["Andi", "Bagus"]
console.log(getChildrenNames("A005")); // output: ["Hasan", "Abdul"]
