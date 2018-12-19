/**
 * Component d'un arbre carre'
 */

  AFRAME.registerComponent('treecarre', {
   
    init: function () {
      // Do something when component first attached.

      //tronc
      var tronc=document.createElement('a-box');
      tronc.setAttribute('position', {
        x: 0,
        y: 3,
        z: 0
      });
      tronc.setAttribute('material', 'color', '#8b4513');
      tronc.setAttribute('geometry', 'depth', 2);
      tronc.setAttribute('geometry', 'width', 2);
      tronc.setAttribute('geometry', 'height', 6);
      this.el.appendChild(tronc);

      //feuillage
      var feuillage=document.createElement('a-box');
      feuillage.setAttribute('position', {
        x: 0,
        y: 5.5,
        z: 0
      });
      feuillage.setAttribute('material', 'color', 'green');
      feuillage.setAttribute('geometry', 'depth', 8);
      feuillage.setAttribute('geometry', 'width', 5);
      feuillage.setAttribute('geometry', 'height', 4.5);
      this.el.appendChild(feuillage);

    },
  });