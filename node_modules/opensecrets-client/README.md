OpenSecretsClient
=================

A node.js HTTP client wrapper for the Opensecrets.org API.

Opensecrets.org API documentation: www.opensecrets.org/action/api_doc.php

Installing
---------

```
npm install opensecrets-client
```

API
---

makeRequest(method, options)
------------------------------
Makes a ```GET``` request for the given Opensecrets.org API method with given options.

Example usage
-------------
The client constructor has two optional parameters: ```apiKey``` and ```format```. ```apiKey``` should be your API key for the Opensecrets.org API. ```format``` is one of 'xml' or 'json'.

You can also (for better security and portability) specify your api key via an environment variable. This library utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package. This means you can use a ```.env``` file in your project root and specify the API key like so:

```
OPEN_SECRETS_API_KEY=<your-key>
```

or via the command line like

```
OPEN_SECRETS_API_KEY=<your-key> node ...
```

Making a request is simple. Just use the ```makeRequest``` method, which returns a ```restler``` response object, which you can listen to events on. For more information see the [restler event documentation](https://github.com/danwrong/restler/blob/master/README.md#events).
```javascript
var OpenSecretsClient = require('open_secrets_client');
var client = new OpenSecretsClient('your_api_key');
client.makeRequest('getLegislators'{id: 'NY', output: 'xml'})
.on('complete', function(res) {
  if (res instanceof Error) console.log('Something went wrong');
  
  console.log(res);
});
```

Testing
------
This library utilizes ```mocha``` to run tests. Simply run

```
mocha
```

in the project directory.
