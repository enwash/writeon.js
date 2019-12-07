# writeon.js
Simple javascript library to create a text writeon effect

To use, simply add the data attribute `writeon` to an empty element, then add a lsit of states, separated by double slashes, to the `states` data attribute:
```
<h1 data-writeon data-states='Hello there.//Hey there.//Bonjour.'"></h1>
```
Then at the bottom of your body, initialize the effect by running `writeon_init()`. The effect currently only functions if there is one instance in the html body.

Optionally, the `data-cursor` attribute can be set to 0 to disable the cursor effect when a text state is fully displayed:
```
<h1 data-writeon data-states='Hello there.//Hey there.//Bonjour.' data-cursor="0"></h1>
```
