(function() {
  var products = typeof ALL_PRODUCTS !== 'undefined' ? ALL_PRODUCTS : [];
  if (!products.length) return;

  var params = new URLSearchParams(window.location.search);
  var productId = params.get('id') || 'buque-1-rosa';
  var product = products.find(function(p) { return p.id === productId; }) || products[0];
  if (!product) return;

  function render() {
    // Set page title
    document.title = product.name + ' — TM Flores e Plantas';

    // Breadcrumb
    var breadcrumb = document.getElementById('productBreadcrumb');
    if (breadcrumb) {
      var categoryName = product.category === 'plantas' ? 'Plantas' : 'Buqu\u00eas';
      var categoryLink = product.category === 'plantas' ? 'plantas.html' : 'buques.html';
      breadcrumb.innerHTML =
        '<a href=\"index.html\">In\u00edcio</a><span>&gt;</span>' +
        '<a href=\"' + categoryLink + '\">' + categoryName + '</a><span>&gt;</span>' +
        '<span class=\"current\">' + product.name + '</span>';
    }

    // Badge
    var badge = document.getElementById('productBadge');
    if (badge) {
      if (product.badge) {
        badge.className = 'product-badge product-badge--premium';
        badge.textContent = product.badge;
      } else {
        badge.className = 'product-badge product-badge--default';
        badge.textContent = product.category === 'plantas' ? 'Planta Natural' : 'Buqu\u00ea Artesanal';
      }
    }

    // Name
    var nameEl = document.getElementById('productName');
    if (nameEl) nameEl.textContent = product.name;

    // Tagline
    var tagline = document.getElementById('productTagline');
    if (tagline) tagline.textContent = product.tagline || 'Flores colhidas com carinho para momentos \u00fanicos';

    // Price
    var price = document.getElementById('productPrice');
    if (price) price.textContent = product.price;

    // Description
    var desc = document.getElementById('productDesc');
    if (desc) desc.textContent = product.description;

    // Main image
    renderGallery(product.images);
    renderThumbnails(product.images);
    renderRelated(product);
    setupWhatsApp(product);

    // Scroll to top
    window.scrollTo(0, 0);
  }

  var currentImageIndex = 0;

  function renderGallery(images) {
    var container = document.getElementById('productMainImage');
    if (!container || !images.length) return;

    var img = container.querySelector('img');
    if (!img) {
      img = document.createElement('img');
      container.insertBefore(img, container.firstChild);
    }
    img.src = images[0];
    img.alt = product.name;

    var dotsContainer = container.querySelector('.product-gallery-dots');
    if (dotsContainer) {
      dotsContainer.innerHTML = images.map(function(_, i) {
        return '<button class=\"product-gallery-dot' + (i === 0 ? ' active' : '') + '\" data-index=\"' + i + '\"></button>';
      }).join('');
      dotsContainer.querySelectorAll('.product-gallery-dot').forEach(function(dot) {
        dot.addEventListener('click', function() {
          setImage(parseInt(this.dataset.index));
        });
      });
    }

    var prevBtn = container.querySelector('.product-gallery-nav--prev');
    var nextBtn = container.querySelector('.product-gallery-nav--next');
    if (prevBtn) prevBtn.addEventListener('click', function(e) { e.stopPropagation(); navigateImage(-1); });
    if (nextBtn) nextBtn.addEventListener('click', function(e) { e.stopPropagation(); navigateImage(1); });

    // Touch swipe
    setupSwipe(container);
  }

  function renderThumbnails(images) {
    var container = document.getElementById('productThumbnails');
    if (!container) return;

    container.innerHTML = images.map(function(src, i) {
      return '<button class=\"product-thumbnail' + (i === 0 ? ' active' : '') + '\" data-index=\"' + i + '\">' +
        '<img src=\"' + src + '\" alt=\"' + product.name + ' - Foto ' + (i + 1) + '\">' +
        '</button>';
    }).join('');

    container.querySelectorAll('.product-thumbnail').forEach(function(thumb) {
      thumb.addEventListener('click', function() {
        setImage(parseInt(this.dataset.index));
      });
    });
  }

  function setImage(index) {
    var images = product.images;
    if (!images.length) return;
    currentImageIndex = (index + images.length) % images.length;

    var container = document.getElementById('productMainImage');
    if (container) {
      var img = container.querySelector('img');
      if (img) img.src = images[currentImageIndex];

      container.querySelectorAll('.product-gallery-dot').forEach(function(d, i) {
        d.classList.toggle('active', i === currentImageIndex);
      });
    }

    document.querySelectorAll('.product-thumbnail').forEach(function(t, i) {
      t.classList.toggle('active', i === currentImageIndex);
    });
  }

  function navigateImage(dir) {
    setImage(currentImageIndex + dir);
  }

  function setupSwipe(container) {
    var startX = 0, endX = 0;
    container.addEventListener('touchstart', function(e) {
      startX = e.changedTouches[0].screenX;
    }, { passive: true });
    container.addEventListener('touchend', function(e) {
      endX = e.changedTouches[0].screenX;
      var diff = startX - endX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) navigateImage(1);
        else navigateImage(-1);
      }
    }, { passive: true });
  }

  function renderRelated(currentProduct) {
    var container = document.getElementById('relatedProductsGrid');
    if (!container) return;

    var related = products.filter(function(p) {
      return p.id !== currentProduct.id && p.category === currentProduct.category;
    }).slice(0, 4);

    if (!related.length) {
      document.getElementById('relatedProductsSection').style.display = 'none';
      return;
    }

    container.innerHTML = related.map(function(p) {
      var link = p.id + '.html';
      return '<article class=\"product-card\">' +
        '<a href=\"' + link + '\" class=\"product-card-images\">' +
        '<img src=\"' + p.images[0] + '\" alt=\"' + p.name + '\" class=\"product-card-image\" loading=\"lazy\">' +
        '</a>' +
        '<div class=\"product-card-body\">' +
        '<a href=\"' + link + '\"><h3 class=\"product-card-name\">' + p.name + '</h3></a>' +
        '<div class=\"product-card-price\">' + p.price + '</div>' +
        '<a href=\"' + link + '\" class=\"btn btn-outline product-card-cta\" style=\"margin-top:var(--space-3);width:100%;text-align:center;display:block;\">Ver produto →</a>' +
        '</div>' +
        '</article>';
    }).join('');
  }

  function setupWhatsApp(product) {
    var btn = document.getElementById('productWhatsAppBtn');
    if (!btn) return;
    var text = 'Ol\u00e1! Tenho interesse no ' + product.name + '. Poderia me ajudar?';
    btn.href = 'https://wa.me/5511918475136?text=' + encodeURIComponent(text);
  }

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (e.key === 'ArrowLeft') navigateImage(-1);
    if (e.key === 'ArrowRight') navigateImage(1);
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', render);
  } else {
    render();
  }
})();
