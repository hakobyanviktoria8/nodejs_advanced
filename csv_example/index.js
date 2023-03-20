const { parse } = require("csv-parse");
const fs = require("fs");

const habitablePlanets = [];

function isHabitablePlanets(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

// try to writr readable stream value
// let writer = fs.createWriteStream("test_gfg.txt", {
//   flags: "w",
// });

fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanets(data)) {
      habitablePlanets.push(data);
    }
  })
  .on("error", (error) => {
    console.log(error.message);
  })
  .on("end", () => {
    const arr = habitablePlanets.map((planet) => planet["kepler_name"]);
    console.log("Done!");
    console.log(232323, habitablePlanets, arr);
  })
  // .pipe(writer);
