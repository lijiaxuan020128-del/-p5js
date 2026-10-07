/*
 * Based on tp5_250806_StaircaseWaterway
 * Original credits to はぅ君.
 */

let particles = [];
let time = 0;

// 明确指定画布和粒子使用的尺寸
const CANVAS_WIDTH = 720;
const CANVAS_HEIGHT = 720;

function setup() {
  // 统一绘图像素密度
  pixelDensity(1);

  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  background(0);
}

function draw() {
  background(0, 9);

  // 恢复原来的模糊效果
  filter(BLUR);

  stroke(255);

  // 保留原来的粒子生成方式
  let i = 9;

  while (i > 0) {
    i--;

    let index = time % (CANVAS_WIDTH * 9);
    let px = (time * 99) % CANVAS_WIDTH;

    particles[index] = {
      x: px,
      y: 0,
      g: 0,
      s: 3
    };

    time += 1;
  }

  // 保留原来的粒子运动规律
  for (let idx = 0; idx < particles.length; idx++) {
    let p = particles[idx];

    p.s *= 0.997;
    strokeWeight(p.s);

    let n = noise(
      p.x / CANVAS_WIDTH,
      p.y / 9,
      time / CANVAS_WIDTH
    );

    if (n > 0.4) {
      p.g += 0.5;
      p.y += p.g;
    } else {
      if (n % 0.1 > 0.05) {
        p.x += 1;
      } else {
        p.x -= 1;
      }

      p.g = 0;
      p.y += 0.5;
    }

    point(p.x, p.y);
  }
}