
describe('event', function() {
  'use strict';

  var window, document, utils,
    PlainOverlay, pageDone,
    overlay, arrLog, returnValue, showListener, hideListener;

  beforeAll(function(beforeDone) {
    loadPage('spec/common/page.html', function(pageWindow, pageDocument, pageBody, done) {
      window = pageWindow;
      document = pageDocument;
      utils = window.utils;
      PlainOverlay = window.PlainOverlay;

      overlay = new PlainOverlay(document.getElementById('elm-plain'), {
        onShow: function() {
          arrLog.push({type: 'onShow', state: this.state});
          if (showListener) { showListener(); }
        },
        onHide: function() {
          arrLog.push({type: 'onHide', state: this.state});
          if (hideListener) { hideListener(); }
        },
        onBeforeShow: function() {
          arrLog.push({type: 'onBeforeShow', state: this.state});
          return returnValue;
        },
        onBeforeHide: function() {
          arrLog.push({type: 'onBeforeHide', state: this.state});
          return returnValue;
        },
        duration: 80
      });
      pageDone = done;

      beforeDone();
    });
  });

  afterAll(function() {
    pageDone();
  });

  it('Check Edition (to be LIMIT: ' + !!self.top.LIMIT + ')', function() {
    expect(!!window.PlainOverlay.limit).toBe(!!self.top.LIMIT);
  });

  it('Sequence', function(done) {
    utils.makeState(overlay,
      PlainOverlay.STATE_HIDDEN,
      function(overlay) { overlay.hide(true); },
      function() {
        arrLog = [];
        returnValue = true;
        showListener = function() {
          setTimeout(function() { overlay.hide(); }, 0);
        };
        hideListener = function() {
          expect(arrLog.length).toBe(6);
          expect(arrLog[0].type).toBe('onBeforeShow');
          expect(arrLog[0].state).toBe(PlainOverlay.STATE_HIDDEN);
          expect(arrLog[1].type).toBe('time-0');
          expect(arrLog[1].state).toBe(PlainOverlay.STATE_SHOWING);
          expect(arrLog[2].type).toBe('onShow');
          expect(arrLog[2].state).toBe(PlainOverlay.STATE_SHOWN);
          expect(arrLog[3].type).toBe('onBeforeHide');
          expect(arrLog[3].state).toBe(PlainOverlay.STATE_SHOWN);
          expect(arrLog[4].type).toBe('time-1');
          expect(arrLog[4].state).toBe(PlainOverlay.STATE_HIDING);
          expect(arrLog[5].type).toBe('onHide');
          expect(arrLog[5].state).toBe(PlainOverlay.STATE_HIDDEN);

          done();
        };

        setTimeout(function() { arrLog.push({type: 'time-0', state: overlay.state}); }, 40);
        setTimeout(function() { arrLog.push({type: 'time-1', state: overlay.state}); }, 120);

        overlay.show();
      }
    );
  });

  it('onBeforeShow cancels the showing', function(done) {
    utils.makeState(overlay,
      PlainOverlay.STATE_HIDDEN,
      function(overlay) { overlay.hide(true); },
      function() {
        arrLog = [];
        returnValue = false;
        showListener = function() {
          setTimeout(function() { overlay.hide(); }, 0);
        };
        hideListener = null;

        setTimeout(function() { arrLog.push({type: 'time-0', state: overlay.state}); }, 40);
        setTimeout(function() { arrLog.push({type: 'time-1', state: overlay.state}); }, 120);

        setTimeout(function() {
          expect(arrLog.length).toBe(3);
          expect(arrLog[0].type).toBe('onBeforeShow');
          expect(arrLog[0].state).toBe(PlainOverlay.STATE_HIDDEN);
          expect(arrLog[1].type).toBe('time-0');
          expect(arrLog[1].state).toBe(PlainOverlay.STATE_HIDDEN); // Not changed
          expect(arrLog[2].type).toBe('time-1');
          expect(arrLog[2].state).toBe(PlainOverlay.STATE_HIDDEN); // Not changed

          done();
        }, 160);

        overlay.show();
      }
    );
  });

  it('onBeforeHide cancels the hiding', function(done) {
    utils.makeState(overlay,
      PlainOverlay.STATE_HIDDEN,
      function(overlay) { overlay.hide(true); },
      function() {
        arrLog = [];
        returnValue = true;
        showListener = function() {
          returnValue = false;
          setTimeout(function() { overlay.hide(); }, 0);
        };
        hideListener = null;

        setTimeout(function() { arrLog.push({type: 'time-0', state: overlay.state}); }, 40);
        setTimeout(function() { arrLog.push({type: 'time-1', state: overlay.state}); }, 120);

        setTimeout(function() {
          expect(arrLog.length).toBe(5);
          expect(arrLog[0].type).toBe('onBeforeShow');
          expect(arrLog[0].state).toBe(PlainOverlay.STATE_HIDDEN);
          expect(arrLog[1].type).toBe('time-0');
          expect(arrLog[1].state).toBe(PlainOverlay.STATE_SHOWING);
          expect(arrLog[2].type).toBe('onShow');
          expect(arrLog[2].state).toBe(PlainOverlay.STATE_SHOWN);
          expect(arrLog[3].type).toBe('onBeforeHide');
          expect(arrLog[3].state).toBe(PlainOverlay.STATE_SHOWN);
          expect(arrLog[4].type).toBe('time-1');
          expect(arrLog[4].state).toBe(PlainOverlay.STATE_SHOWN); // Not changed

          done();
        }, 160);

        overlay.show();
      }
    );
  });

  it('onBeforeShow is called only once', function(done) {
    utils.makeState(overlay,
      PlainOverlay.STATE_HIDDEN,
      function(overlay) { overlay.hide(true); },
      function() {
        arrLog = [];
        returnValue = true;
        showListener = function() {
          setTimeout(function() { overlay.hide(); }, 0);
        };
        hideListener = function() {
          expect(arrLog.length).toBe(8);
          expect(arrLog[0].type).toBe('onBeforeShow');
          expect(arrLog[0].state).toBe(PlainOverlay.STATE_HIDDEN);
          expect(arrLog[1].type).toBe('time-0-a');
          expect(arrLog[1].state).toBe(PlainOverlay.STATE_SHOWING);
          expect(arrLog[2].type).toBe('time-0-b');
          expect(arrLog[2].state).toBe(PlainOverlay.STATE_SHOWING);
          expect(arrLog[3].type).toBe('time-0-c');
          expect(arrLog[3].state).toBe(PlainOverlay.STATE_SHOWING);
          expect(arrLog[4].type).toBe('onShow');
          expect(arrLog[4].state).toBe(PlainOverlay.STATE_SHOWN);
          expect(arrLog[5].type).toBe('onBeforeHide');
          expect(arrLog[5].state).toBe(PlainOverlay.STATE_SHOWN);
          expect(arrLog[6].type).toBe('time-1');
          expect(arrLog[6].state).toBe(PlainOverlay.STATE_HIDING);
          expect(arrLog[7].type).toBe('onHide');
          expect(arrLog[7].state).toBe(PlainOverlay.STATE_HIDDEN);

          done();
        };

        setTimeout(function() {
          arrLog.push({type: 'time-0-a', state: overlay.state});
          overlay.show();
        }, 40);
        setTimeout(function() {
          arrLog.push({type: 'time-0-b', state: overlay.state});
          overlay.show();
        }, 50);
        setTimeout(function() {
          arrLog.push({type: 'time-0-c', state: overlay.state});
          overlay.show();
        }, 60);
        setTimeout(function() { arrLog.push({type: 'time-1', state: overlay.state}); }, 120);

        overlay.show();
      }
    );
  });

  it('onBeforeHide is called only once', function(done) {
    utils.makeState(overlay,
      PlainOverlay.STATE_HIDDEN,
      function(overlay) { overlay.hide(true); },
      function() {
        arrLog = [];
        returnValue = true;
        showListener = function() {
          setTimeout(function() { overlay.hide(); }, 0);
        };
        hideListener = function() {
          expect(arrLog.length).toBe(8);
          expect(arrLog[0].type).toBe('onBeforeShow');
          expect(arrLog[0].state).toBe(PlainOverlay.STATE_HIDDEN);
          expect(arrLog[1].type).toBe('time-0');
          expect(arrLog[1].state).toBe(PlainOverlay.STATE_SHOWING);
          expect(arrLog[2].type).toBe('onShow');
          expect(arrLog[2].state).toBe(PlainOverlay.STATE_SHOWN);
          expect(arrLog[3].type).toBe('onBeforeHide');
          expect(arrLog[3].state).toBe(PlainOverlay.STATE_SHOWN);
          expect(arrLog[4].type).toBe('time-1-a');
          expect(arrLog[4].state).toBe(PlainOverlay.STATE_HIDING);
          expect(arrLog[5].type).toBe('time-1-b');
          expect(arrLog[5].state).toBe(PlainOverlay.STATE_HIDING);
          expect(arrLog[6].type).toBe('time-1-c');
          expect(arrLog[6].state).toBe(PlainOverlay.STATE_HIDING);
          expect(arrLog[7].type).toBe('onHide');
          expect(arrLog[7].state).toBe(PlainOverlay.STATE_HIDDEN);

          done();
        };

        setTimeout(function() { arrLog.push({type: 'time-0', state: overlay.state}); }, 40);
        setTimeout(function() {
          arrLog.push({type: 'time-1-a', state: overlay.state});
          overlay.hide();
        }, 120);
        setTimeout(function() {
          arrLog.push({type: 'time-1-b', state: overlay.state});
          overlay.hide();
        }, 130);
        setTimeout(function() {
          arrLog.push({type: 'time-1-c', state: overlay.state});
          overlay.hide();
        }, 140);

        overlay.show();
      }
    );
  });

  it('Sequence: show(force)', function(done) {
    utils.makeState(overlay,
      PlainOverlay.STATE_HIDDEN,
      function(overlay) { overlay.hide(true); },
      function() {
        arrLog = [];
        returnValue = true;
        showListener = hideListener = null;

        setTimeout(function() { arrLog.push({type: 'time-0', state: overlay.state}); }, 20);
        setTimeout(function() {
          expect(arrLog.length).toBe(3);
          expect(arrLog[0].type).toBe('onBeforeShow');
          expect(arrLog[0].state).toBe(PlainOverlay.STATE_HIDDEN);
          expect(arrLog[1].type).toBe('onShow');
          expect(arrLog[1].state).toBe(PlainOverlay.STATE_SHOWN);
          expect(arrLog[2].type).toBe('time-0');
          expect(arrLog[2].state).toBe(PlainOverlay.STATE_SHOWN);

          done();
        }, 40); // < duration

        overlay.show(true);
      }
    );
  });

  it('Sequence: hide(force)', function(done) {
    utils.makeState(overlay,
      PlainOverlay.STATE_SHOWN,
      function(overlay) {
        overlay.hide(true);
        setTimeout(function() { overlay.show(true); }, 10);
      },
      function() {
        arrLog = [];
        returnValue = true;
        showListener = hideListener = null;

        setTimeout(function() { arrLog.push({type: 'time-0', state: overlay.state}); }, 20);
        setTimeout(function() {
          expect(arrLog.length).toBe(3);
          expect(arrLog[0].type).toBe('onBeforeHide');
          expect(arrLog[0].state).toBe(PlainOverlay.STATE_SHOWN);
          expect(arrLog[1].type).toBe('onHide');
          expect(arrLog[1].state).toBe(PlainOverlay.STATE_HIDDEN);
          expect(arrLog[2].type).toBe('time-0');
          expect(arrLog[2].state).toBe(PlainOverlay.STATE_HIDDEN);

          done();
        }, 40); // < duration

        overlay.hide(true);
      }
    );
  });

  it('Sequence: show() -> show(force)', function(done) {
    utils.makeState(overlay,
      PlainOverlay.STATE_HIDDEN,
      function(overlay) { overlay.hide(true); },
      function() {
        arrLog = [];
        returnValue = true;
        showListener = hideListener = null;

        setTimeout(function() {
          arrLog.push({type: 'time-0', state: overlay.state});
          overlay.show(true);
        }, 20);
        setTimeout(function() {
          expect(arrLog.length).toBe(3);
          expect(arrLog[0].type).toBe('onBeforeShow');
          expect(arrLog[0].state).toBe(PlainOverlay.STATE_HIDDEN);
          expect(arrLog[1].type).toBe('time-0');
          expect(arrLog[1].state).toBe(PlainOverlay.STATE_SHOWING);
          expect(arrLog[2].type).toBe('onShow');
          expect(arrLog[2].state).toBe(PlainOverlay.STATE_SHOWN);

          done();
        }, 40); // < duration

        overlay.show();
      }
    );
  });

  it('Sequence: hide() -> hide(force)', function(done) {
    utils.makeState(overlay,
      PlainOverlay.STATE_SHOWN,
      function(overlay) {
        overlay.hide(true);
        setTimeout(function() { overlay.show(true); }, 10);
      },
      function() {
        arrLog = [];
        returnValue = true;
        showListener = hideListener = null;

        setTimeout(function() {
          arrLog.push({type: 'time-0', state: overlay.state});
          overlay.hide(true);
        }, 20);
        setTimeout(function() {
          expect(arrLog.length).toBe(3);
          expect(arrLog[0].type).toBe('onBeforeHide');
          expect(arrLog[0].state).toBe(PlainOverlay.STATE_SHOWN);
          expect(arrLog[1].type).toBe('time-0');
          expect(arrLog[1].state).toBe(PlainOverlay.STATE_HIDING);
          expect(arrLog[2].type).toBe('onHide');
          expect(arrLog[2].state).toBe(PlainOverlay.STATE_HIDDEN);

          done();
        }, 40); // < duration

        overlay.hide();
      }
    );
  });

});
