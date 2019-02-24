AFRAME.registerComponent("cam_move", {
  init: function() {},

  tick: function(time, timeDelta) {
    // Do something on every scene tick or frame.
    var state = time % 62000;
    var pos = this.el.getAttribute("position");
    if (state <= 5250) {
      pos.x += (20 * timeDelta) / 5250;
      this.el.setAttribute("position", pos);
    } else if (state <= 25750) {
      pos.z -= (128 * timeDelta) / 20500;
      this.el.setAttribute("position", pos);
    } else if (state <= 36250) {
      pos.x -= (40 * timeDelta) / 10500;
      this.el.setAttribute("position", pos);
    } else if (state <= 56750) {
      pos.z += (128 * timeDelta) / 20500;
      this.el.setAttribute("position", pos);
    } else {
      pos.x += (20 * timeDelta) / 5250;
      this.el.setAttribute("position", pos);
    }
  }
});
