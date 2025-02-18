let width = 0;
let height = 0;

window.addEventListener("resize", () => {
  width = window.innerWidth;
  height = window.innerWidth;

  console.log({ width, height });

  const x = Math.floor(width / 40);
  console.log(x, "개의 바둑판을 좌우로 깔아주세요");

  const y = Math.floor(height / 40);

  console.log(y, "개의 바둑판을 상하로 깔아주세요.");

  let tiles = Array.from({ length: y }, (_, i) => i);
  console.log(tiles);

  tiles.forEach(() => {
    Array.from({ length: x }, (_, i) => i);
    console.log(tiles);
  });
});
