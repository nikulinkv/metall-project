export function isWebp() {
   function testWebP(callback) {

      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   testWebP(function (support) {
      let className = support === true ? 'webp' : 'no-webp';
      document.documentElement.classList.add(className);
   });
}

export function tabs() {

   var jsTriggers = document.querySelectorAll('.tab-trigger');
   var jsContents = document.querySelectorAll('.tab-content');

   jsTriggers.forEach(function (trigger) {
      trigger.addEventListener('click', function () {
         let id = this.getAttribute('data-tab');
         let content = document.querySelector('.tab-content[data-tab="' + id + '"]');
         if (content) {
            let activeTrigger = document.querySelector('.tab-trigger.active');
            let activeContent = document.querySelector('.tab-content.active');

            activeTrigger.classList.remove('active');
            trigger.classList.add('active');

            activeContent.classList.remove('active');
            content.classList.add('active');
         }

      });
   });
}

export function accordeon() {
   document.querySelectorAll('.acc-trigger').forEach(function (accTrigger) {
      var nextElement = accTrigger.nextElementSibling;

      accTrigger.addEventListener('click', function (e) {
         if (nextElement.classList.contains('active')) {
            nextElement.classList.remove('active');
         }
         else {
            document.querySelectorAll('.submenu__list').forEach(function (item) {
               item.classList.remove('active');
            });
            nextElement.classList.add('active');
         }
      })
   });
}