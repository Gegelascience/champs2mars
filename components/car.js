/**
 * Component d'une voiture'
 */

AFRAME.registerComponent('car', {
   
    schema: {
      teinte: {type: 'string', default:'red'},
      sens:{type:'boolean',default:false}
    },

    init: function () {
      var rotY=0
      var corpSens=0;
      var fenetreSens=0;
      var triangleSens=[0,0]
      var triangleSens2=triangleSens
      var avantSens=triangleSens
      if (this.data.sens) {
        rotY=180
        corpSens=0.5
        fenetreSens=3.5
        triangleSens=[0.5,2]
        triangleSens2=[6.5,2]
        avantSens=[6.5,2]
      }
    //fenetres
      var teintefenetre='black'; 
      var fenetre=document.createElement('a-box');
      fenetre.setAttribute('position', {
        x: -1+fenetreSens,
        y: 2,
        z: 0
      });
      fenetre.setAttribute('material', 'color', teintefenetre);
      fenetre.setAttribute('geometry', 'depth', 2);
      fenetre.setAttribute('geometry', 'width', 3);
      fenetre.setAttribute('geometry', 'height', 1);
      this.el.appendChild(fenetre);

      var triangle=document.createElement('a-entity');
      var sh= new THREE.Shape();
      sh.moveTo(1,0);
      sh.lineTo(0,0);
      sh.lineTo(0,2);
      sh.lineTo(1,0);

      var extrudeSettings = { bevelEnabled: false, steps: 1, amount: 2};
      var geometry=new THREE.ExtrudeGeometry(sh,extrudeSettings)

      var material = new THREE.MeshBasicMaterial({color: teintefenetre});
      var mesh = new THREE.Mesh(geometry, material);
      triangle.setObject3D(this.attrName,mesh);
      triangle.setAttribute('position', {
        x: 0.5+triangleSens[0],
        y: 1.5,
        z: 1-triangleSens[1]
      });
      triangle.setAttribute('rotation', {
        x: 180,
        y: rotY,
        z: -90
      });
      this.el.appendChild(triangle);

      var triangle2=document.createElement('a-entity');
      var sh= new THREE.Shape();
      sh.moveTo(1,0);
      sh.lineTo(0,0);
      sh.lineTo(0,0.5);
      sh.lineTo(1,0);

      var extrudeSettings = { bevelEnabled: false, steps: 1, amount: 2};
      var geometry=new THREE.ExtrudeGeometry(sh,extrudeSettings)

      var mesh = new THREE.Mesh(geometry, material);
      triangle2.setObject3D(this.attrName,mesh);
      triangle2.setAttribute('position', {
        x: -2.5+triangleSens2[0],
        y: 1.5,
        z: -1+triangleSens2[1]
      });
      triangle2.setAttribute('rotation', {
        x: 180,
        y: 180+rotY,
        z: -90
      });
      this.el.appendChild(triangle2);
      

    //corps
      var corps=document.createElement('a-box');
      corps.setAttribute('position', {
        x: 0.5+corpSens,
        y: 1,
        z: 0
      });
      corps.setAttribute('material', 'color', this.data.teinte);
      corps.setAttribute('geometry', 'depth', 2);
      corps.setAttribute('geometry', 'width', 7);
      corps.setAttribute('geometry', 'height', 1);
      this.el.appendChild(corps);

      //avant
      var avant=document.createElement('a-entity');
      var sh= new THREE.Shape();
      sh.moveTo(1,0);
      sh.lineTo(0,0);
      sh.lineTo(0,1.5);
      sh.lineTo(0.5,1.5);
      sh.lineTo(1,0);

      var extrudeSettings = { bevelEnabled: false, steps: 1, amount: 2};
      var geometry=new THREE.ExtrudeGeometry(sh,extrudeSettings)
      var material = new THREE.MeshBasicMaterial({color: this.data.teinte});
      var mesh = new THREE.Mesh(geometry, material);
      avant.setObject3D(this.attrName,mesh);
      avant.setAttribute('position', {
        x: 4-avantSens[0],
        y: 0.5,
        z: 1-avantSens[1]
      });
      avant.setAttribute('rotation', {
        x: 180,
        y: 0+rotY,
        z: -90
      });
      this.el.appendChild(avant);

      //roues
      var roues=[];
      for (let index = 0; index <4; index++) {
        var roue=document.createElement('a-circle');
        roue.setAttribute('position', {
          x: 4,
          y: 0.5,
          z: 1.05
        });
        roue.setAttribute('material', 'color', '#000000');
        roue.setAttribute('material', 'side', 'double');
        roue.setAttribute('geometry', 'radius', 0.5);
        roues.push(roue);
      }

      roues[1].setAttribute('position', {
        x: -2.5,
        y: 0.5,
        z: 1.05
      });
      roues[2].setAttribute('position', {
        x: 4,
        y: 0.5,
        z: -1.05
      });
      roues[3].setAttribute('position', {
        x: -2.5,
        y: 0.5,
        z: -1.05
      });
      

      for (let index = 0; index < roues.length; index++) {
        this.el.appendChild(roues[index]);
        
      }
      
    }
});