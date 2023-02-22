import copy from "rollup-plugin-copy";

module.exports = {
  input: "index.js",
  output: {
    dir: "dist",
  },
  treeshake: false,
  plugins: [
    copy({
      targets: [{ src: ["index.html", "p5.play.js", "p5.serialport.js", "player.js", "sketch.js", "blob.js", "style.css", "1pot.PNG", "background.PNG", "box cat.PNG", "game over black.png", "ground.PNG"], dest: "dist" }],
    }),
  ],
};