// Script to load map info from the osu api
// Reads the pool as specified in pools.json

const osu = require("node-osu");
const pools = require("./pools.json");
const fs = require("fs");
const osuApi = new osu.Api(process.env.OSU_API_KEY);

const output = [];

const round = num => Math.round(num * 100) / 100;
const formatTime = time =>
  Math.floor(time / 60) +
  ":" +
  (time % 60 < 10 ? "0" : "") +
  Math.floor(time % 60);
const scaleTime = (time, mod) => (mod === "DT" ? (time * 2) / 3 : time);
const scaleBPM = (bpm, mod) => (mod === "DT" ? bpm * 1.5 : bpm);
const scaleDiff = (diff, mod) => (mod === "HR" ? round(diff * 1.4) : diff);

async function loadFromApi() {
  for (const pool of pools) {
    const newPool = { ...pool, maps: [] };

    for (const map of pool.maps) {
      const mod = map.mod.toUpperCase().substring(0, 2);
      const modId = { HR: 16, DT: 64 }[mod] || 0; // mod enum used by osu api
      const mapData = (await osuApi.getBeatmaps({ b: map.id, mods: modId }))[0];

      const newMap = {
        mod: map.mod.toUpperCase(),
        id: parseInt(mapData.id),
        title: mapData.title,
        artist: mapData.artist,
        creator: mapData.creator,
        diff: mapData.version,
        bpm: scaleBPM(parseFloat(mapData.bpm), mod),
        sr: round(parseFloat(mapData.difficulty.rating)),
        od: scaleDiff(parseFloat(mapData.difficulty.overall), mod),
        hp: scaleDiff(parseFloat(mapData.difficulty.drain), mod),
        time: formatTime(scaleTime(parseInt(mapData.time.total), mod)),
        image: `https://assets.ppy.sh/beatmaps/${mapData.beatmapSetId}/covers/cover.jpg`
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
