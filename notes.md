1. Created folder
2. ran in terminal: 
- <code> npm init -y</code>
- <code> install vue</code>
- <code> npm install -D webpack webpack-cli </code>
3. Within: package.json add to scripts:
- <code> "build": "webpack -w" </code>
4. Create directories and files:

<li>public
<ul> 
<li>css</li> 
<li>js</li> 
<li>index.html</li> 
</ul></li>
<li>src
<ul> 
<li>app.js</li> 
<li>.gitignore</li> 
<li>package.json</li> 


</ul></li>

5. In <code> src/ </code> touch webpack.config.js

6. Into webpack.config.js paste in: 
<pre>
const config = {
  entry: `${__dirname}/src/app.js`,
  output: {
    path: `${__dirname}/public/js/`,
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  mode: 'development'
};
module.exports = config; 

</pre>

7. In <code> src/ </code> edit/create the index.html, using the html5 generation
8. add:
- a div with ID 'app'.
- add script tag to head of HTML with with js/bundle.js as the src.
9. in src/app.js import VUE by typing <code>import VUE from 'vue'</code>
10. still in app.js add: <pre>document.addEventListener("DOMContentLoaded", () => { });

</pre>
11. inside { } add: 
<pre> new Vue({
        el:"#app"
    });</pre>
12. in the terminal of the main directory, run <code>npm run build</code>
13. open index.html to see if VUE dev tools are running.
14. Develop the homework app.