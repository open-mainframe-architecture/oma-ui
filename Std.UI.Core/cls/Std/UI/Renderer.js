'BaseObject+Role'.subclass(I => {
  "use strict";
  I.am({
    Service: true
  });
  I.play({
    // render virtual user interface and delegate interactions to controller
    render: function(view, controller) {

    }
  });
})