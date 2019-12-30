// Script to load map info from the osu api
// Reads the pool as specified in pools.json

const osu = require("node-osu");
const pools = require("./pools.json");
const fs = require("fs");
const osuApi = new osu.Api(process.env.OSU_API_KEY);

const output = [];

async function loadFromApi() {
  for (const pool of pools) {
    const newPool = { round: pool.round, maps: [] };

    for (const map of pool.maps) {
      // intentionally one request at a time to avoid spamming osu with requests
      const mapData = (await osuApi.getBeatmaps({ b: map.id }))[0];
      const newMap = {
        mod: map.mod,
        id: mapData.id,
        title: mapData.title,
        artist: mapData.artist,
        creator: mapData.creator,
        diff: mapData.version,
        bpm: mapData.bpm,
        sr: mapData.difficulty.rating,
        od: mapData.difficulty.overall,
        hp: mapData.difficulty.drain,
        time: mapData.time.total
      };

      console.log(`Loaded info for ${mapData.title}`);
      newPool.maps.push(newMap);
    }
    output.push(newPool);
  }

  console.log(`Done! Writing to file`);
}

loadFromApi().then(() =>
  fs.writeFileSync(
    "./src/mappools/pools.generated.js",
    `export default ${JSON.stringify(output)}`
  )
);
