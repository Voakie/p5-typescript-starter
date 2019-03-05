var sketch = (p: p5) => {
  p.preload = () => {}

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
  }

  p.draw = () => {
    p.background(100)
  }
}

var sketchP = new p5(sketch)
