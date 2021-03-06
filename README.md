# wikintersection-web

> Web front-end and API wrappers for the wikintersection application

![](https://img.shields.io/badge/golang-1.11.5-orange.svg)
![](https://img.shields.io/badge/npm-6.4.1-orange.svg)

This is a web client application which adds a more useful UI to the http://www.github.com/dotloadmovie/wikintersection application. It exposes a JSON API for the application using the Echo web framework and a small React SPA using Create React App to deliver to the user.

## Installation

This builds the site as a developer-ready experience on two IPs (one for FE, one for platform)

Windows, OS X & Linux - API and wrappers

```sh
go get 
go build main.go -o wikintersection.go
./wikintersection
```

Windows, OS X and Linux - Front-end

```sh
cd ui/wikintersect
npm install
npm start
```

## Full build
This assembles the server as a static site, ready for deployment

OSX and Linux
```sh
go get
sh build.sh
```

## Usage example

CRA will start the front-end on a local IP address. Navigate here and then add some queries. Absolutely no guarantees of rightness are given here


## Release History

* 0.2
    * Redux support in UI
    * Exclusion of Wikipedia meta-articles
    * Proper config object use

* 0.1
    * Initial working version
    
    

## Meta

Dave Tickle – dave@shiftinteraction.com

Distributed under the Unlicense license. See ``UNLICENSE.txt`` for more information.

https://github.com/dotloadmovie

## Contributing

Feel free to fork and play around. This is really a learning application for me though so is subject to change on a whim. Could be a WASM version coming soon; who knows?
