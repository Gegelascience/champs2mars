AFRAME.registerComponent("cam_move", {
  schema: {
    evol: { type: "number", default: 0 },
    x_animation_time: { type: "number", default: 12000 },
    z_animation_time: { type: "number", default: 25000 }
  },
  init: function () {
    this.lapTime = 2 * this.data.x_animation_time + 2 * this.data.z_animation_time;
    this.p1 = this.data.x_animation_time / 2;
    this.p2 = this.p1 + this.data.z_animation_time;
    this.p3 = this.p2 + this.data.x_animation_time;
    this.p4 = this.p3 + this.data.z_animation_time;
  },

  tick: function (time, timeDelta) {
    this.data.evol += timeDelta;
    var state = this.data.evol % this.lapTime;
    var pos = this.el.getAttribute("position");
    if (state <= this.p1) {
      pos.x += (20 * timeDelta) / (this.data.x_animation_time / 2);
      if (pos.x > 20) {
        pos.x = 20;
        this.data.evol = this.p1 + 1;
      }
      this.el.setAttribute("position", pos);
    } else if (state <= this.p2) {
      pos.z -= (128 * timeDelta) / this.data.z_animation_time;
      if (pos.z < 10) {
        pos.z = 10;
        this.data.evol = this.p2 + 1;
      }
      this.el.setAttribute("position", pos);
    } else if (state <= this.p3) {
      pos.x -= (40 * timeDelta) / this.data.x_animation_time;
      if (pos.x < -20) {
        pos.x = -20;
        this.data.evol = this.p3 + 1;
      }
      this.el.setAttribute("position", pos);
    } else if (state <= this.p4) {
      pos.z += (128 * timeDelta) / this.data.z_animation_time;
      if (pos.z > 138) {
        pos.z = 138;
        this.data.evol = this.p4 + 1;
      }
      this.el.setAttribute("position", pos);
    } else {
      pos.x += (20 * timeDelta) / (this.data.x_animation_time / 2);
      if (pos.x > 0) {
        pos.x = 0;
        this.data.evol = 0;
      }
      this.el.setAttribute("position", pos);
    }


  }
});
