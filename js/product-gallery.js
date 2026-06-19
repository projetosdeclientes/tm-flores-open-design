(function() {
  function initGallery() {
    var mainImage = document.getElementById('productMainImage');
    if (!mainImage) return;
    var img = mainImage.querySelector('img');
    if (!img) return;

    var images = [];
    document.querySelectorAll('.product-thumbnail').forEach(function(t) {
      var thumbImg = t.querySelector('img');
      if (thumbImg) images.push(thumbImg.src);
    });

    if (!images.length) {
      if (img.src) images = [img.src];
    }
    if (!images.length) return;

    var current = 0;

    function setImage(index) {
      current = (index + images.length) % images.length;
      if (img) img.src = images[current];

      document.querySelectorAll('.product-gallery-dot').forEach(function(d, i) {
        d.classList.toggle('active', i === current);
      });
      document.querySelectorAll('.product-thumbnail').forEach(function(t, i) {
        t.classList.toggle('active', i === current);
      });
    }

    // Thumbnails
    document.querySelectorAll('.product-thumbnail').forEach(function(thumb) {
      thumb.addEventListener('click', function() {
        setImage(parseInt(this.dataset.index));
      });
    });

    // Dots
    document.querySelectorAll('.product-gallery-dot').forEach(function(dot) {
      dot.addEventListener('click', function() {
        setImage(parseInt(this.dataset.index));
      });
    });

    // Prev/Next buttons
    var prevBtn = mainImage.querySelector('.product-gallery-nav--prev');
    var nextBtn = mainImage.querySelector('.product-gallery-nav--next');
    if (prevBtn) prevBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      setImage(current - 1);
    });
    if (nextBtn) nextBtn.addEventListener('click', function(e) {
      e.stopPropagation();
      setImage(current + 1);
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowLeft') setImage(current - 1);
      if (e.key === 'ArrowRight') setImage(current + 1);
    });

    // Touch swipe
    var startX = 0, endX = 0;
    mainImage.addEventListener('touchstart', function(e) {
      startX = e.changedTouches[0].screenX;
    }, { passive: true });
    mainImage.addEventListener('touchend', function(e) {
      endX = e.changedTouches[0].screenX;
      var diff = startX - endX;
      if (Math.abs(diff) > 50) {
        setImage(current + (diff > 0 ? 1 : -1));
      }
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initGallery);
  } else {
    initGallery();
  }
})();
