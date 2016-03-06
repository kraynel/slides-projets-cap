Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: true,

  transition: 'fade', // none/fade/slide/convex/concave/zoom
  backgroundTransition: 'none', // none/fade/slide/convex/concave/zoom

  // Optional reveal.js plugins
  dependencies: [
    { src: '/js/vendor/classList.js', condition: function() { return !document.body.classList; } },
    // { src: 'js/vendor/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
    { src: 'js/vendor/notes/notes.js', async: true }
  ]
});
