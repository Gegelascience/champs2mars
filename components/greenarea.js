/**
 * Component d'un espace vert'
 */

  AFRAME.registerComponent('greenarea', {
   
    init: function () {
      // Do something when component first attached.

      //planes
      var center=document.createElement('a-plane');
      center.setAttribute('rotation', {
        x: -90,
        y: 0,
        z: 0
      });
      center.setAttribute('material', 'color', '#458B00');
      center.setAttribute('geometry', 'width', 20);
      center.setAttribute('geometry', 'height', 50);
      this.el.appendChild(center);

      var greenleft=document.createElement('a-plane');
      greenleft.setAttribute('rotation', {
        x: -90,
        y: 0,
        z: 0
      });
      greenleft.setAttribute('position', {
        x: -13,
        y: 0,
        z: 0
      });
      greenleft.setAttribute('material', 'color', '#458B00');
      greenleft.setAttribute('geometry', 'width', 4);
      greenleft.setAttribute('geometry', 'height', 50);
      this.el.appendChild(greenleft);

      var greenright=document.createElement('a-plane');
      greenright.setAttribute('rotation', {
        x: -90,
        y: 0,
        z: 0
      });
      greenright.setAttribute('position', {
        x: 13,
        y: 0,
        z: 0
      });
      greenright.setAttribute('material', 'color', '#458B00');
      greenright.setAttribute('geometry', 'width', 4);
      greenright.setAttribute('geometry', 'height', 50);
      this.el.appendChild(greenright);

      var lineleft=document.createElement('a-plane');
      lineleft.setAttribute('rotation', {
        x: -90,
        y: 0,
        z: 0
      });
      lineleft.setAttribute('position', {
        x: -10.5,
        y: 0,
        z: 0
      });
      lineleft.setAttribute('material', 'color', '#FFF68F');
      lineleft.setAttribute('geometry', 'width', 1);
      lineleft.setAttribute('geometry', 'height', 50);
      this.el.appendChild(lineleft);

      var lineright=document.createElement('a-plane');
      lineright.setAttribute('rotation', {
        x: -90,
        y: 0,
        z: 0
      });
      lineright.setAttribute('position', {
        x: 10.5,
        y: 0,
        z: 0
      });
      lineright.setAttribute('material', 'color', '#FFF68F');
      lineright.setAttribute('geometry', 'width', 1);
      lineright.setAttribute('geometry', 'height', 50);
      this.el.appendChild(lineright);

      var roadleft=document.createElement('a-plane');
      roadleft.setAttribute('rotation', {
        x: -90,
        y: 0,
        z: 0
      });
      roadleft.setAttribute('position', {
        x: -22.5,
        y: 0,
        z: 0
      });
      roadleft.setAttribute('material', 'color', '#FFF68F');
      roadleft.setAttribute('geometry', 'width', 15);
      roadleft.setAttribute('geometry', 'height', 50);
      this.el.appendChild(roadleft);

      var roadright=document.createElement('a-plane');
      roadright.setAttribute('rotation', {
        x: -90,
        y: 0,
        z: 0
      });
      roadright.setAttribute('position', {
        x: 22.5,
        y: 0,
        z: 0
      });
      roadright.setAttribute('material', 'color', '#FFF68F');
      roadright.setAttribute('geometry', 'width', 15);
      roadright.setAttribute('geometry', 'height', 50);
      this.el.appendChild(roadright);

      //road end
      var roadEnd=document.createElement('a-plane');
      roadEnd.setAttribute('rotation', {
        x: -90,
        y: 0,
        z: 0
      });
      roadEnd.setAttribute('position', {
        x: 0,
        y: 0,
        z: 30
      });
      roadEnd.setAttribute('material', 'color', '#FFF68F');
      roadEnd.setAttribute('geometry', 'width', 60);
      roadEnd.setAttribute('geometry', 'height', 10);
      this.el.appendChild(roadEnd);

    },
  });