<meta name='keywords' content='Recoil, Recoil.js, Recoil Dev Tool, Recoilize, Chrome Dev Tool, Recoil Chrome'>

<p align='center'>
<img src='./src/extension/build/assets/Recoilize.png' width=170rem>
</p>

<h1 align='center'>
Recoilize
</h1>

# [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/oslabs-beta/Recoilize/blob/staging/LICENSE) [![npm version](https://img.shields.io/npm/v/react.svg?style=flat)](https://www.npmjs.com/package/react) ![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

<p>
Recoilize is a Chrome Dev Tool meant for debugging applications built with the new Recoil.js state management library!
(LINK OUR CHROME EXTENSION IN THE STORE AND THE NPM MODULE)
</p>

<h1 align='center'>
** NOTE: STILL IN BETA **
</h1>

<h1 align='center'>
Installation
</h1>

#### Install Recoilize Module

```js
npm install recoilize
```

### ** IMPORTANT **

#### Import RecoilizeDebugger from the Recoilize module

```js
import RecoilizeDebugger from 'recoilize';
```

#### Recoilize requires you to create a variable that grabs the HTML element where you inject your React application

```js
const root = document.getElementById('root');
```

#### You must import all Atoms and Selectors and pass them into the Recoilize component as shown above

```js
import * as nodes from './store';

<RecoilizeDebugger nodes={nodes} root={root} />;
```

#### Example:

```js
import RecoilizeDebugger from 'recoilize';
import RecoilRoot from 'recoil';
import * as nodes from './store';

const root = document.getElementById('root');

ReactDOM.render(
  <RecoilRoot>
    <RecoilizeDebugger nodes={nodes} root={root} />
    <App />
  </RecoilRoot>,
  root,
);
```

#### Get Recoilize from the Chrome Store!

#### Open your application on the Chrome Browser and start debugging with Recoilize!

##### (Only supported with React applications using Recoil as state management)

<h2 align='center'> 
We will continue updating Recoilize alongside Recoil's updates!
</h2>

<h1>
 Contributors
</h1>

<h4><a href='https://github.com/brenyama'>Bren Yamaguchi</a></h4>

<h4><a href='https://github.com/skang1004'>Saejin Kang</a></h4>

<h4><a href='https://github.com/jonescamilla'>Jonathan Escamilla</a> </h4>

<h4><a href='https://github.com/SmithSean17'>Sean Smith</a> </h4>
