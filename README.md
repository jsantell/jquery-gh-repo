# jquery-gh-repo

jQuery plugin for grabbing GitHub repo information (watchers, forks) and displaying them

[View demo](http://jsantell.github.com/jquery-gh-repo)

## Options
* `data`: Name of field from API to display, ex: `watchers`, `forks` [View API](http://developer.github.com/v3/repos/) 
* `repo`: Repository to query -- specify the whole GitHub url, ex: `http://github.com/jsantell/jquery-gh-repo`

The repository can be specified in the options, in a data attribute `[data-gh-repo=http://github.com/jsantell/jquery-gh-repo]`, or if the element is an anchor, or a child of an anchor, those hrefs will be checked. All of those are checked in order until a proper repository is found.

## Example

View `./example/index.html` in repo to see it in action or [jsantell.github.com/jquery-gh-repo](http://jsantell.github.com/jquery-gh-repo)

```javascript
    $('a').ghRepo({
      data : 'watchers',
      repo : 'http://github.com/jsantell/jquery-gh-repo'
    });
```

## Contributing

This project uses [smoosh](https://github.com/fat/smoosh) for compiling, linting.
