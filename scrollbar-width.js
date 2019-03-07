window.addEventListener('load', function() {

    function getScrollbarWidth() {
        var outer = document.createElement("div");
        outer.style.visibility = "hidden";
        outer.style.width = "100px";
        document.body.appendChild(outer);

        var widthNoScroll = outer.offsetWidth;
        // force scrollbars
        outer.style.overflow = "scroll";

        // add innerdiv
        var inner = document.createElement("div");
        inner.style.width = "100%";
        outer.appendChild(inner);

        var widthWithScroll = inner.offsetWidth;

        // remove divs
        outer.parentNode.removeChild(outer);

        return widthNoScroll - widthWithScroll;
    }

    function setScrollbarVar(value) {
        document.body.style.setProperty('--scrollbarWidth', value);
    }

    function addScrollObserver() {

        var config = {
          threshold: 1.0
        }

        var handleIntersect = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.intersectionRatio < 1) {
                    setScrollbarVar(getScrollbarWidth() + 'px');
                } else {
                    setScrollbarVar('0px');
                }
            });
        }

        var bodyScrollObserver = new IntersectionObserver(handleIntersect, config);

        bodyScrollObserver.observe(document.body);
    }

    addScrollObserver();

    window.addEventListener('resize', () => {
        addScrollObserver();
    });

});
