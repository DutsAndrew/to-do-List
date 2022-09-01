# to-do-List

<strong>Preview:</strong>

![To-do List](https://user-images.githubusercontent.com/94728848/187818873-bdcff9a8-c4b6-4b06-ab43-ebb78929db06.gif)

<strong>How to Use:</strong>

1. This Project is a minimalist and simplified design of a To-Do-List. The top bar has all the navigation needed to function. There's a menu bar with 3-lines that can open or hide the sidebar, which displays what projects are due that day, week, or month. It also has a dropdown list that can show all projects.

2. To add a project, you simply click the "+" icon at the top and fill in the necessary information, once that is done it will render to the screen and be saved locally to your computer, which means you can access it from whichever device you use even after exiting out.

3. You can view the project, edit, add a task to that project, or delete the project by clicking the checkbox button, which will display all of those icons/functions.

4. Tasks can be edited or deleted by viewing the corresponding project.

<strong>Things I'd change with what I learned:</strong>

1. I would've learned how to use and implement localStorage first, I created the app to use an array to store and create cards, which ended up with me still utilizing a pointless array as a 'helper-function' that doesn't help much. This would've decreased the amount of code I wrote by a good amount.

2. More planning, I though I planned well when building this project; however, I wasn't planning what needed to be tested. I was using simple tests to check if things were working, and didn't plan for the more complicated possibilities this app was incorporating.

3. The archive function that I wrote in the beginning, which changed to a more of a complete-it feature should've been scrapped from the beginning. It was a good learning experience to design something that I didn't end up creating, but had I thought it through more I would've been able to realize it wasn't going to be a good feature that was worthwhile to the application.

<strong>Things I learned:</strong>

1. Local Storage is an easy and nice feature for saving small sets of data. I was having a hard time getting the getItem and setItem functions to work correctly, this lead me to learn more about JSON.parse and JSON.stringify, since local storage uses JSON files to store this information as a string in a data structure. My thoughts going forward is that obviously local storage is small, 5MB is not enough storage to realistically store a whole user profile. But, going forward I can see myself using this feature to store user preferences, like when a user selects a color scheme, font, dark-mode, etc.

2. Webpack was a really steep learning curve on my last project "Restaurant-Page"; however, this project really helped solidify for me how to properly export/import functions and variables. I feel very confident in my ability to compartmentalize my code and attempting to clean it up as much as possible. I'm getting better at writing clear functions, but going forward I'd like to have less global variables in each JS file.

3. IDs and Classes. I thought I knew them really well, but I ended up writing code that allowed whitespaces to be introduced into IDS AND classes, which neither can have. When I was testing my code, I was creating projects & tasks that had single word titles, so the IDS and classes were running fine. However, as you can imagine upon writing a two word title it introduced a whole lot of problems, because my ENTIRE code base was utilizing these IDs and classes that were based on project titles. So, I had to go back and re-write regex code to remove white spaces and set those IDs correctly. This was a huge learning process, and although I was slightly bothered initially, I was glad to learn this hard lesson now rather than later.

4. Loops... I was not confident in my ability to write loops going into this. I had to look at my previous projects to get started writing them, even though I knew the format, I just didn't trust myself. This project changed that, the code is foll of for loops that check for things and modify the DOM based on what it finds. I feel extremely confident with loops after this project, whether it be forEach or a simple for () loop, I know I can write them.

5. Google Dev Tools, I've loved using it in the past for debugging. But, I had to use it so much more on this project. With the amount of DOM manipulation that a simple To-Do List requires, it was mandatory to see how/what was changing through Dev Tools and to set breakpoints as things run. At this point I have opted to write all of the HTML through JavaScript, which has made things so much easier than trying to incorporate HTML and JavaScript together. Working through the DOM has sped up my building process.

6. Depreciating features and technology changes. Up until this point I was taking lots of notes in my coding journey. This project stopped that. e.path is now or will be a deprecated feature in 2023~. This being my first time seeing that I had to learn how to use composedPath(), which is much easier to work with, but required me to go learn a new skill, which was fun. Going forward, I will not be taking as many notes as I know that things are going to change and I'm going to need to keep learning those changes.

7. Reinforced my knowledge of querySelectorAll requiring forEach loops to change things in the DOM

8. If you try to loop over an empty array (localStorage) it will throw an error. So, I had to continue or break loops based on that criteria

9. Setting clear IDs for JavaScript manipulation and as many classes as needed to modify CSS is important. I was able to simplify my ID and class naming more on this project, but still need some more work on this.

10. in order to change an item in local storage you have to retrieve it, then modify it, then set it back in storage in order to see those changes.

11. When splicing in a loop you have to i--; since the indexes change and the length of the list you are looping is no longer accurate

12. Got lots of practice with includes() and replace()

13. Using .checked on checkboxes to run code on true/false returns.

14. Preventative measures in not allowing duplicates to be created and or sorting for very specific items.
