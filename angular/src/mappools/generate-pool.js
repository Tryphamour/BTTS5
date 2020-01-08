// Script to load map info from the osu api
// Reads the pool as specified in pools.json

const osu = require("node-osu");
const pools = require("./pools.json");
const fs = require("fs");
const osuApi = new osu.Api(process.env.OSU_API_KEY);

const output = [];

const round = num => Math.round(num * 100) / 100;
const formatTime = time => Math.floor(time / 60) + ":" + Math.floor(time % 60);

async function loadFromApi() {
  for (const pool of pools) {
    const newPool = { round: pool.round, maps: [] };

    for (const map of pool.maps) {
      // intentionally one request at a time to avoid spamming osu with requests
      const mapData = (await osuApi.getBeatmaps({ b: map.id }))[0];
      const newMap = {
        mod: map.mod,
        id: parseInt(mapData.id),
        title: mapData.title,
        artist: mapData.artist,
        creator: mapData.creator,
        diff: mapData.version,
        bpm: parseFloat(mapData.bpm),
        sr: round(parseFloat(mapData.difficulty.rating)),
        od: parseFloat(mapData.difficulty.overall),
        hp: parseFloat(mapData.difficulty.drain),
        time: formatTime(parseInt(mapData.time.total))
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
