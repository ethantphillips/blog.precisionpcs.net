<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Netlify CMS</title>
  <script>
    if (sessionStorage.getItem('cmsPin') !== 'granted') {
      window.location.href = '/admin-auth/';
    }
  </script>
  <script src="https://unpkg.com/netlify-cms@^2.10.0/dist/netlify-cms.js"></script>
</head>
<body>
  <div id="nc-root"></div>
  <script>
    if (typeof CMS !== 'undefined') {
      CMS.init();
    } else {
      console.error('CMS failed to load.');
    }
  </script>
</body>
</html>
