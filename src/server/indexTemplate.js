export const indexTemplate = (content, token, client_id, redirect_uri) => `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Reddit</title>
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1.0">
    <script src="/static/client.js" type="application/javascript"></script>
    <script>
      window.__token__ = '${token}';
      window.__client_id__ = '${client_id}';
      window.__redirect_uri__ = '${redirect_uri}';
    </script>
  </head>
  <body>
    <div id="react-root">${content}</div>
    <div id="modal-root"></div>
    <div id="dropdown-root"></div>
  </body>
</html>
`;