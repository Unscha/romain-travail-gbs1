const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-2497637-6');

var switchHandler = function(event) {
  event.preventDefault();
  
  var target = this.getAttribute('data-toggle'),
      images = document.querySelectorAll('.game--element-info-image'),
      btns = document.querySelectorAll('.game--element-info-image-toggle');
  
  for(var i = 0; i < images.length; ++i) { images[i].classList.add('hidden'); }
  for(var i = 0; i < btns.length; ++i) { btns[i].classList.add('button--secondary'); }
  document.getElementById('illustration_' + target).classList.remove('hidden');
  this.classList.remove('button--secondary');
  
  return false;
}

var isPhotoswipeLoaded = false;
			function initPhotoswipeGalleries() {
				var galleryItems = document.querySelectorAll('[data-gallery]:not([data-pswp-uid])');
				if (galleryItems.length) {
					if(!isPhotoswipeLoaded) {
						var photoswipeScript = document.createElement('script');
						photoswipeScript.type = 'text/javascript';
						photoswipeScript.src = '/js/compiled/frontoffice/photoswipe.js';
						photoswipeScript.addEventListener('load', function() {
							// Wait for the script to be loaded so that the initialization function can be called
							PhotoswipeHelper.initialize(document.querySelectorAll('[data-gallery]:not([data-pswp-uid])'));
						});
						document.body.appendChild(photoswipeScript);
						
						var photoswipeStylesheet = document.createElement('link');
						photoswipeStylesheet.setAttribute('rel', 'stylesheet');
						photoswipeStylesheet.setAttribute('href', '/js/frontoffice/photoswipe/photoswipe_with_skin.min.css');
						headTag.appendChild(photoswipeStylesheet);
						
						isPhotoswipeLoaded = true;
					}
					else {                    
						// No need to wait for the script loading, call the initialization right away
						PhotoswipeHelper.initialize(galleryItems);
					}
				}
			}
			initPhotoswipeGalleries();