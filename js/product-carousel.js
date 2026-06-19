function initProductCarousels() {
  document.querySelectorAll('.products-carousel').forEach(carousel => {
    let isDown = false;
    let didDrag = false;
    let startX, scrollLeft;

    function onPointerDown(e) {
      isDown = true;
      didDrag = false;
      carousel.style.cursor = 'grabbing';
      startX = e.pageX - carousel.offsetLeft;
      scrollLeft = carousel.scrollLeft;
      carousel.addEventListener('pointermove', onPointerMove);
      carousel.addEventListener('pointerup', onPointerUp);
      carousel.addEventListener('pointerleave', onPointerUp);
    }

    function onPointerMove(e) {
      if (!isDown) return;
      const x    = e.pageX - carousel.offsetLeft;
      const walk = (x - startX) * 1.5;
      if (Math.abs(walk) > 5) {
        didDrag = true;
        e.preventDefault();
      }
      carousel.scrollLeft = scrollLeft - walk;
    }

    function onPointerUp() {
      isDown = false;
      carousel.style.cursor = 'grab';
      carousel.removeEventListener('pointermove', onPointerMove);
      carousel.removeEventListener('pointerup', onPointerUp);
      carousel.removeEventListener('pointerleave', onPointerUp);
    }

    carousel.addEventListener('pointerdown', onPointerDown);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProductCarousels);
} else {
  initProductCarousels();
}
