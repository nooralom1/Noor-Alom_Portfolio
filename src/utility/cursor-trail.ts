import { RefObject } from "react";

export type CursorTrail = {
  ref: RefObject<HTMLCanvasElement>;
  color?: string;
};

export function cursorTrail(props: CursorTrail) {
  const colorRaw = getComputedStyle(document.documentElement).getPropertyValue(
    "--accent",
  );
  const accentColor = `hsla(${
    colorRaw ? colorRaw.split(" ").join(",") : "0, 0%, 0%"
  }, 0.35)`;
  const { ref, color } = props;
  const ctx = ref.current?.getContext("2d")!;
  const AnimationFeature = {
    friction: 0.5,
    trails: 20,
    size: 40,
    dampening: 0.2,
    tension: 0.98,
  };
  const cursorPosition = { x: 0, y: 0 };
  let running = true;

  class NewNode {
    x = 0;
    y = 0;
    vy = 0;
    vx = 0;
  }

  class Line {
    spring: number;
    friction: number;
    nodes: NewNode[];

    constructor(spring: number) {
      this.spring = spring + 0.1 * Math.random() - 0.05;
      this.friction = AnimationFeature.friction + 0.01 * Math.random() - 0.005;
      this.nodes = Array.from({ length: AnimationFeature.size }, () => {
        const node = new NewNode();
        node.x = cursorPosition.x;
        node.y = cursorPosition.y;
        return node;
      });
    }

    update() {
      let spring = this.spring;
      let node = this.nodes[0];
      node.vx += (cursorPosition.x - node.x) * spring;
      node.vy += (cursorPosition.y - node.y) * spring;

      for (let index = 0; index < this.nodes.length; index++) {
        node = this.nodes[index];
        if (index > 0) {
          const previous = this.nodes[index - 1];
          node.vx += (previous.x - node.x) * spring;
          node.vy += (previous.y - node.y) * spring;
          node.vx += previous.vx * AnimationFeature.dampening;
          node.vy += previous.vy * AnimationFeature.dampening;
        }
        node.vx *= this.friction;
        node.vy *= this.friction;
        node.x += node.vx;
        node.y += node.vy;
        spring *= AnimationFeature.tension;
      }
    }

    draw() {
      let x = this.nodes[0].x;
      let y = this.nodes[0].y;
      ctx.beginPath();
      ctx.moveTo(x, y);
      for (let index = 1; index < this.nodes.length - 2; index++) {
        const node = this.nodes[index];
        const next = this.nodes[index + 1];
        x = 0.5 * (node.x + next.x);
        y = 0.5 * (node.y + next.y);
        ctx.quadraticCurveTo(node.x, node.y, x, y);
      }
      const beforeLast = this.nodes[this.nodes.length - 2];
      const last = this.nodes[this.nodes.length - 1];
      ctx.quadraticCurveTo(beforeLast.x, beforeLast.y, last.x, last.y);
      ctx.stroke();
      ctx.closePath();
    }
  }

  let lines: Line[] = [];

  function renderAnimation() {
    if (!running) return;
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = color || accentColor;
    ctx.lineWidth = 1;
    lines.forEach((line) => {
      line.update();
      line.draw();
    });
    window.requestAnimationFrame(renderAnimation);
  }

  function move(event: MouseEvent | TouchEvent) {
    if (event instanceof MouseEvent) {
      cursorPosition.x = event.clientX;
      cursorPosition.y = event.clientY;
    } else if (event.touches[0]) {
      cursorPosition.x = event.touches[0].pageX;
      cursorPosition.y = event.touches[0].pageY;
    }
  }

  function onFirstMove(event: MouseEvent | TouchEvent) {
    document.removeEventListener("mousemove", onFirstMove);
    document.removeEventListener("touchstart", onFirstMove);
    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move);
    document.addEventListener("touchstart", move);
    move(event);
    lines = Array.from(
      { length: AnimationFeature.trails },
      (_, index) => new Line(0.45 + (index / AnimationFeature.trails) * 0.025),
    );
    renderAnimation();
  }

  function resizeCanvas() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
  }

  function stopAnimation() {
    running = false;
  }

  function startAnimation() {
    if (!running) {
      running = true;
      renderAnimation();
    }
  }

  function renderTrailCursor() {
    document.addEventListener("mousemove", onFirstMove);
    document.addEventListener("touchstart", onFirstMove);
    window.addEventListener("orientationchange", resizeCanvas);
    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("focus", startAnimation);
    window.addEventListener("blur", stopAnimation);
    resizeCanvas();
  }

  function cleanUp() {
    document.removeEventListener("mousemove", move);
    document.removeEventListener("touchmove", move);
    document.removeEventListener("touchstart", move);
    document.removeEventListener("mousemove", onFirstMove);
    document.removeEventListener("touchstart", onFirstMove);
    window.removeEventListener("orientationchange", resizeCanvas);
    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("focus", startAnimation);
    window.removeEventListener("blur", stopAnimation);
    running = false;
  }

  return { cleanUp, renderTrailCursor, stopAnimation, startAnimation };
}
