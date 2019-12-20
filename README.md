# Speed Racer 2020

A React Native application.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Clone this repository to your local machine:

```
git clone https://github.com/andreamll/speedracer2020
```

### Installing

Access the directory of the project:

```
cd speedracer2020
```

Install all the dependencies on your local machine:

```
npm install
```

To fix the [error bellow](https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start):

```
error Invalid regular expression: /(.*\\__fixtures__\\.*|node_modules[\\\]react[\\\]dist[\\\].*|website\\node_modules\\.*|heapCapture\\bundle\.js|.*\\__tests__\\.*)$/: Unterminated character class. Run CLI with --verbose flag for more details.

Metro Bundler process exited with code 1
```

It appears in \node_modules\metro-config\src\defaults\blacklist.js, there is an invalid regular expression. Change the first expression under sharedBlacklist 

from:
```
var sharedBlacklist = [
  /node_modules[/\\]react[/\\]dist[/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```
to:
```
var sharedBlacklist = [
  /node_modules[\/\\]react[\/\\]dist[\/\\].*/,
  /website\/node_modules\/.*/,
  /heapCapture\/bundle\.js/,
  /.*\/__tests__\/.*/
];
```

### Running

Start the project:

```
npm run start
```

A web page should open in your default browser (e.g.: http://localhost:19002/).

- Change the connection mode to "Local"
- Click on your favorite simulator link (Android or IOS)
  *** If you choose Android, remember to open AVD manager

## Version

1.0.0


## Authors

* **Andrea Floriano** - [andreamll](https://github.com/andreamll)
* **Arthur Sales** - [arthurproducer](https://github.com/arthurproducer)
