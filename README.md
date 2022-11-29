## SPA for viewing e-games news

The project is ~20% done. Used stack - Node.js, React. Additional libraries: puppeteer, absolutify.

### Part 1. Proxy Server
* To run the server locally, clone the project using ssh or html links
```
$ git clone https://github.com/max-kravchenko/proxySPA.git

OR

$ git clone git@github.com:max-kravchenko/proxySPA.git
```

* Open the project with your fav IDE and install all dependencies
```js
$ npm i
```

* Run the proxy-server
```javascript
$ npm run server
```

* Open the default port and enter the site url as a query 
```
http://localhost:3001/?url=egw.news
```

* The proxy is running and you can browse it as an original site.
