AFRAME.registerComponent("cam_move", {
  schema: {
    evol: { type: "number", default: 0 }
  },
  init: function () {
    document.addEventListener("blur", event => {
      this.data.evol = 0;
      var pos = {
        x: 0,
        y: 1.5,
        z: 138
      };
      this.el.setAttribute("position", pos);
    });
  },

  tick: function (time, timeDelta) {
    this.data.evol += timeDelta;
    var state = this.data.evol % 62000;
    var pos = this.el.getAttribute("position");
    if (state <= 5250) {
      pos.x += (20 * timeDelta) / 5250;
      if (pos.x > 20) {
        pos.x = 20;
      }
      this.el.setAttribute("position", pos);
    } else if (state <= 25750) {
      pos.z -= (128 * timeDelta) / 20500;
      if (pos.z < 10) {
        pos.z = 10;
      }
      this.el.setAttribute("position", pos);
    } else if (state <= 36250) {
      pos.x -= (40 * timeDelta) / 10500;
      if (pos.x < -20) {
        pos.x = -20;
      }
      this.el.setAttribute("position", pos);
    } else if (state <= 56750) {
      pos.z += (128 * timeDelta) / 20500;
      if (pos.z > 138) {
        pos.z = 138;
      }
      this.el.setAttribute("position", pos);
    } else {
      pos.x += (20 * timeDelta) / 5250;
      if (pos.x > 0) {
        pos.x = 0;
      }
      this.el.setAttribute("position", pos);
    }


  }
});
