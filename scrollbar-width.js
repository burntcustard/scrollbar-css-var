
window.addEventListener('load', () => {

  function getScrollbarWidth() {
      var outer = document.createElement('div');
      outer.style.visibility = 'hidden';
      outer.style.width = '100px';
      document.body.append(outer);

      var widthNoScroll = outer.offsetWidth;

      // Force scrollbars
      outer.style.overflow = 'scroll';

      // Add innerdiv
      var inner = document.createElement('div');
      inner.style.width = '100%';
      outer.append(inner);

      var widthWithScroll = inner.offsetWidth;

      // Remove divs
      outer.remove();

      return widthNoScroll - widthWithScroll;
  }

  function setScrollbarVar(value) {
      document.body.style.setProperty('--scrollbar-width', value + 'px');
  }

  function addScrollObserver() {

      var config = {
          threshold: 1.0
      }

      var handleIntersect = (entries, observer) => {
          entries.forEach(entry => {
              if (entry.intersectionRatio < 1) {
                  setScrollbarVar(getScrollbarWidth());
              } else {
                  setScrollbarVar(0);
              }
          });
      }

      var bodyScrollObserver = new IntersectionObserver(handleIntersect, config);

      bodyScrollObserver.observe(document.body);
  }

  addScrollObserver();

});
