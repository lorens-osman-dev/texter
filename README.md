![texter_cover](https://github.com/lorens-osman-dev/texter/blob/assets/logo/texterCover_blue_larkColor.png?raw=true)

# texter()

  

This tool fixes the text paragraphs by merging the lines, fixing list lines, removing empty lines, and trimming the lines. It also removes white spaces from the text and merges the lines with respect to punctuation marks such as periods (.), colons (:), and question marks (?).


## What texter do
-  Remove all white spaces from the text. This means combining lines together.
- If a line starts with a special character like '-', '*', '_', '•', it's considered a list item and won't be merged with the previous line.
-  If a line starts with a number or a number followed by one of these special characters: '-', '*', '•', '.', '_', it's considered a numbered list item and won't merge with the previous line.
-  If a line starts with a '#' symbol, it remains unchanged. You can replace '#' with any prefix you need.
-  The `texter()` function takes a variable that refers to a special chunk of text you want to keep as is, like a product name or company name.
-  Lines that end with '.', ':',';', or '?' will have a line break added after the ending symbol, preventing them from merging with the next line.
-  Remove every empty line.
-  Remove unnecessary spaces.
-  Trim every line.
-  Detect if the line Starts with Private Use Area Character and replace it with '-'
  ## Install
  ```sh
npm i @lorens/texter
```

## Usage

```js
import { texter } from '@lorens/texter';
const inputText = `Lorem       ipsum        dolor
 sit
      amet          ,                         adipiscing.
- elit, 
sed .`
console.log(texter(inputText));
```
```
the output is :
Lorem ipsum dolor sit amet , adipiscing .
- elit, sed .
```


## Try your text 
İn this [page example](https://lorens-osman-dev.github.io/texter/) we used texter to handle the input text, Copy your text and see see what Texter results.

## Who need texter 
-   When you're copying text from PDF files.
-   If you're scraping text from a website.
-   If you're translating text from a foreign language...

## Texter function

`texter()` function accept 3 parameters

- İnput text variable .

- Line Keeper Symbol, default is ‘#’, If a line starts with a ‘#’ symbol, it remains unchanged.
- unchangeable Strings parameter ,variable that refers to a special chunk of text you want to keep as is.

`texter(inputText, lineKeeperSymbol, unchangeableStringsVariable)`



## Test
If you've made any changes to the 'texter()' files and want to check if it still works correctly, we have over 50 tests available. After finishing your modifications, you can 'run the tests' to make sure nothing got broken in the process.
#### run the tests
-  İf you cloned the project from githup, To run the test.

```sh
npm run test
```

  

-  İf you installed the texter from npm, And want to the run test.

```sh
npm explore @lorens/texter -- npm run test
```



  

- Or.

```js
//yourJsFileName.js
import { testResult } from '@lorens/texter';
testResult();
```

> node yourJsFileName.js


  


