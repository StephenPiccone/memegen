# Meme Generator
This project was used to learn how to make calls to an API in React using useEffect to handle API calls.


## Meme image API
On startup, a call to the meme image API is made (https://api.imgflip.com/get_memes), then the data is converted into a JSON file. This JSON file contains objects with information about each image, which is then saved to a React state array. This array can be accessed to provide new memes to the user.

## Generating Memes
The user is presented with input boxes "Top text" and "Bottom text" where they can input the text they want displayed on the meme. Pressing the button bellow the input box provides a random meme from the previously generated JSON file (using helper functions), and the text is fit accordingly to the new meme.

Example of a user generated meme
![meme](/public/meme.png)


