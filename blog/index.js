(function() {
  function meta(name) {
    return (document.querySelector('meta[name='+name+']') || {content:''}).content;
  }

  window.onload = function() {
    const date   = meta('date') ? new Date(meta('date')).toLocaleDateString() : '';
    const author = meta('author');
    const image  = meta('image') || "https://gogs.com.br/images/banner.jpg";

    document.body.innerHTML = `
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        @import url('http://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&amp;lang=en');

        body {
          margin: 0;
          font-family: "Open Sans", Arial, sans-serif;
          font-size: 13px;
          color: #444;
        }
        a[href] {
          color: #444;
        }
        a[href]:hover {
          text-decoration: underline;
          font-weight: bold;
        }
        blockquote {
          margin: 0;
          padding: 0 0 0 1.75em;
          font-style: italic;
          border: solid #888;
          border-width: 0 0 0 3px;
        }
        hr {
          border: none;
          border-bottom: 2px solid #DDD;
        }

        nav {
          width: 100%;
          text-align: center;
          background: #FFF;
          border-bottom: 1px solid #EEE;
        }
        nav a {
          display: inline-block;
          padding: 0 10px;
          line-height: 44px;
          text-decoration: none;
          text-transform: uppercase;
          outline: 0;
        }

        body > header {
          padding: 50px 0;
          text-align: center;
          background: #ABC url(${image}) center no-repeat;
          background-size: cover;
        }
        body > header * {
          position: relative;
          margin: 0 auto;
          padding: 0 20px;
          max-width: 800px;
          font-weight: normal;
          text-align: center;
          text-shadow: 0 1px 3px #000000BB;
          color: #fff;
        }
        body > header h1 {
          font-size: 4em;
        }

        article {
          margin: 0 auto;
          padding: 20px;
          max-width: 800px;
          font-size: 1.5em;
          font-weight: 300;
          line-height: 2em;
        }
        article h1 {
          margin-bottom: 0;
          font-weight: 100;
          font-size: 3em;
        }
        article > i {
          font-size: 0.8em;
        }
        article > img {
          display: block;
          margin: 0 auto;
          max-width: 100%;
        }
        article > div { white-space: pre-line }

        @media (max-width: 600px) {
          article > img {
            display: none;
          }
        }
      </style>
      <nav>
        <a href="/">Home</a>
        <a href="./">Posts</a>
        <a href="http://google.com?q=site:gogs.com.br">Search</a>
        <a href="mailto:henriquegogo@gmail.com">Contact</a>
      </nav>
      <header>
        <h1>${document.title}</h1>
      </header>
      <article>
        ${author ? '<i>Published '+date+' by '+author+'</i>' : ''}
        ${meta('image') ? '<img src="'+image+'" />' : ''}
        <div>
          ${document.body.innerHTML}
        </div>
      </article>
    `;

    document.title = document.title + " | Henrique Gogs";
  }
})();
