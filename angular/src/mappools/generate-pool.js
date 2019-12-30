// Script to load map info from the osu api
// Reads the pool as specified in pools.json

const osu = require("node-osu");
const pools = require("./pools.json");
const fs = require("fs");
const osuApi = new osu.Api("API KEY");

const output = [];

async function loadFromApi() {
  for (const pool of pools) {
    const newPool = { round: pool.round, maps: [] };

    for (const map of pool.maps) {
      // intentionally one request at a time to avoid spamming osu with requests
      const mapData = (await osuApi.getBeatmaps({ b: map.id }))[0];
      const newMap = {
        id: mapData.id,
        title: mapData.title,
        creator: mapData.creator,
        diff: mapData.version,
        bpm: mapData.bpm,
        sr: mapData.difficulty.difficultyrating,
        od: mapData.difficulty.overall,
        hp: mapData.difficulty.drain,
        time: mapData.time.total
      };

      newPool.maps.push(newMap);
    }
    output.push(newPool);
  }
}

loadFromApi().then(() =>
  fs.writeFileSync(
    "./src/mappools/pools.generated.js",
    `export default ${JSON.stringify(output)}`
  )
);
