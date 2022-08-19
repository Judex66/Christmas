
const x = [
    { id: "743", name: "F" },
    { id: "786", name: "S" },
    { id: "903", name: "B" },
    { id: "988", name: "L" },
    { id: "1202", name: "S" },
    { id: "1355", name: "H" },
    { id: "1374", name: "R" },
  ];
  
  const sorted = x.sort((a, b) => a.name < b.name ? -1 : 1);
  
  console.log(sorted);