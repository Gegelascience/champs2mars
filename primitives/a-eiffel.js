/**
 * Primitive de la tour Eiffel
 */
var colorEtage='#404040';
var colorSocle='#ded4d1';
var colorArche='grey';

AFRAME.registerPrimitive('a-eiffel', {
    // Attaches the `eiffel` component by default.
    // Defaults the eiffel to be parallel to the ground.
    defaultComponents: {
      eiffel: {},
      line:{start: {x:0, y:113, z:0}, end: {x:0, y:133, z:0}, color: colorEtage},

    },
  
    // Maps HTML attributes to the `eiffel` component's properties.
    mappings: {
    }
  });
AFRAME.registerComponent('eiffel', {
   
    init: function () {
      // Do something when component first attached.

      //socles
      var socles=[];
      for (let index = 0; index < 4; index++) {
        var socle=document.createElement('a-box');
        var pos=socle.getAttribute('position');
        pos.y=-1.5;
        if (index%2===0) {
          pos.x=-15;
        } else {
          pos.x=15;
        }
        if (index>1) {
          pos.z=-15;
        } else {
          pos.z=15;
        }
        socle.setAttribute('position',pos);
        socle.setAttribute('material', 'color', colorSocle);
        socle.setAttribute('geometry', 'depth', 12);
        socle.setAttribute('geometry', 'width', 12);
        socle.setAttribute('geometry', 'height', 2);
        socles.push(socle);
      }
      for (let index = 0; index < socles.length; index++) {
        this.el.appendChild(socles[index]); 
      }


      //etages
      var etage1=document.createElement('a-box');
      etage1.setAttribute('position', {
        x: 0,
        y: 30,
        z: 0
      });
      etage1.setAttribute('material', 'color', colorEtage);
      etage1.setAttribute('geometry', 'depth', 30);
      etage1.setAttribute('geometry', 'width', 30);
      etage1.setAttribute('geometry', 'height', 5);
      this.el.appendChild(etage1);

      var etage2=document.createElement('a-box');
      etage2.setAttribute('position', {
        x: 0,
        y: 52,
        z: 0
      });
      etage2.setAttribute('material', 'color', colorEtage);
      etage2.setAttribute('geometry', 'depth', 23);
      etage2.setAttribute('geometry', 'width', 23);
      etage2.setAttribute('geometry', 'height', 3);
      this.el.appendChild(etage2);

      var etage3=document.createElement('a-box');
      etage3.setAttribute('position', {
        x: 0,
        y: 111,
        z: 0
      });
      etage3.setAttribute('material', 'color', colorEtage);
      etage3.setAttribute('geometry', 'depth', 10);
      etage3.setAttribute('geometry', 'width', 10);
      etage3.setAttribute('geometry', 'height', 3);
      this.el.appendChild(etage3);

      //antenne et station radio
      var station=document.createElement('a-sphere');
      station.setAttribute('position', {
        x: 0,
        y: 112,
        z: 0
      });
      station.setAttribute('material', 'color', colorEtage);
      station.setAttribute('geometry', 'radius', 4);
      this.el.appendChild(station);

      //arche niveau 1
      var archn1s=[];
      for (let index = 0; index < 4; index++) {
        var arche=document.createElement('a-archn1');
        arche.setAttribute('rotx', -11.3);
        var roty=index*90;
        arche.setAttribute('roty', roty);
        var pos=arche.getAttribute('position');
        pos.y=0;
        if (index%2===0) {
          pos.x=-18;
        } else {
          pos.x=18;
        }
        if (index>1) {
          pos.z=-18;
        } else {
          pos.z=18;
        }
        arche.setAttribute('position',pos);
        archn1s.push(arche);
      }
      archn1s[2].setAttribute('roty', -90);
      archn1s[3].setAttribute('roty', 180);
      for (let index = 0; index < socles.length; index++) {
        this.el.appendChild(archn1s[index]); 
      }

      //arche niveau 2 et 3
      var archn2p1=document.createElement('a-archn2');
      archn2p1.setAttribute('position', {
        x: -9,
        y: 52,
        z: 0
      });
      archn2p1.setAttribute('rotation', {
        x: -6,
        y: -90,
        z: 90
      });
      this.el.appendChild(archn2p1);

      var archn2p2=document.createElement('a-archn2');
      archn2p2.setAttribute('position', {
        x: 9,
        y: 52,
        z: 0
      });
      archn2p2.setAttribute('rotation', {
        x: -6,
        y: 90,
        z: 90
      });
      this.el.appendChild(archn2p2);

      var archn2p3=document.createElement('a-archn2');
      archn2p3.setAttribute('position', {
        x: 0,
        y: 52,
        z: 9
      });
      archn2p3.setAttribute('rotation', {
        x: -6,
        y: 0,
        z: 90
      });
      this.el.appendChild(archn2p3);

      var archn2p4=document.createElement('a-archn2');
      archn2p4.setAttribute('position', {
        x: 0,
        y: 52,
        z: -9
      });
      archn2p4.setAttribute('rotation', {
        x: -6,
        y: 180,
        z: 90
      });
      this.el.appendChild(archn2p4);

    },
  });


/**
 * Primitive arche tour eiffel entre les socles et le niveau 1
 */
AFRAME.registerPrimitive('a-archn1', {
    // Attaches the `archn1` component by default.
    // Defaults the archn1 to be parallel to the ground.
    defaultComponents: {
      archn1:{},
      
    },
  
    // Maps HTML attributes to the `archn1` component's properties.
    mappings: {
      rotx: 'archn1.rotx',
      roty: 'archn1.roty',
      rotz: 'archn1.rotz',
      color: 'archn1.color',
    }
  });
AFRAME.registerComponent('archn1', {
     
      schema: {
          rotx: {type: 'number', default: 0},
          roty: {type: 'number', default: 0},
          rotz: {type: 'number', default: 0},
          color: {type: 'color', default: colorArche}
      },
    
      init: function () {
        // Do something when component first attached.
        var data=this.data;
        var el=this.el;
  
        var sh= new THREE.Shape();
        sh.moveTo(6,-1.5);
        sh.lineTo(0,-1.5);
        sh.lineTo(6,28.5);
        sh.lineTo(30,28.5);
        sh.lineTo(36,-1.5);
        sh.lineTo(30,-1.5);
        sh.lineTo(27,18.5);
        sh.bezierCurveTo(27,18.5,18,25,9,18.5);
        sh.lineTo(6,-1.5);
  
        var extrudeSettings = { bevelEnabled: false, steps: 1, amount: 1};
        this.geometry=new THREE.ExtrudeGeometry(sh,extrudeSettings)
  
        this.material = new THREE.MeshBasicMaterial({color: data.color});
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        el.setObject3D(this.attrName, this.mesh);
        el.setAttribute('rotation', {
          x: data.rotx,
          y: data.roty,
          z: data.rotz
        });
      },
    
      update: function () {
        // Do something when component's data is updated.
        var data=this.data;
        var el=this.el;
        el.setAttribute('rotation', {
          x: data.rotx,
          y: data.roty,
          z: data.rotz
        });
      },
    
      remove: function () {
        // Do something the component or its entity is detached.
        this.el.removeObject3D('mesh');
      },

    });

    
/**
 * Primitive arche tour eiffel entre le niveau 1 et le sommet 
 */
AFRAME.registerPrimitive('a-archn2', {
      // Attaches the `archn2` component by default.
      // Defaults the archn2 to be parallel to the ground.
      defaultComponents: {
        archn2:{},
        
      },
    
      // Maps HTML attributes to the `archn2` component's properties.
      mappings: {}
    });
AFRAME.registerComponent('archn2', {
        schema: { 
            color: {type: 'color', default: colorArche}
        },
      
        init: function () {
          // Do something when component first attached.
          var data=this.data;
          var el=this.el;
    
          var sh= new THREE.Shape();
          
            sh.moveTo(0,9);
            sh.lineTo(-20,12);
            sh.lineTo(-20,6);
            sh.lineTo(0,3);
            sh.lineTo(0,-3);
            sh.lineTo(-20,-6);
            sh.lineTo(-20,-12);
            sh.lineTo(0,-9);
            sh.lineTo(60,-3);
            sh.lineTo(60,3);
            sh.lineTo(0,9);
    
    
          var extrudeSettings = { bevelEnabled: false, steps: 1, amount: 1};
          this.geometry=new THREE.ExtrudeGeometry(sh,extrudeSettings)
    
          this.material = new THREE.MeshBasicMaterial({color: data.color});
          this.mesh = new THREE.Mesh(this.geometry, this.material);
          el.setObject3D(this.attrName, this.mesh);
        },
      
        remove: function () {
          // Do something the component or its entity is detached.
          this.el.removeObject3D('mesh');
        },
      
      });
