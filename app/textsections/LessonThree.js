var text_object_1 = `Let us imagine that you accidentally spill water on your computer and you break it and you’ve lost all of the work you’ve done.
Let’s restore all of that work from your public repository into the working directory.`
 
var text_object_2 = `Go into GitBoat and select your repository. Copy the link to your clipboard.
When trying to bring a repository from a public repository into your computer for the first time, you will want to use the git clone functionality.
The way we use this is by getting the link of whatever repository that you want to copy and enter it as a parameter to your call.
For example, if the link of the repo I’m trying to copy is test.git, then I will enter the command git clone test.git.`
 
var text_object_3 = `Do this now. 
 
Use the git clone command with the link of your repository.
 
Now you will see that the repository has been cloned to your local directory.`
 
var text_object_4 = `If you go back to GitBoat, you will notice that someone has pushed some of their changes to the repository.
In order for you to push anything new to the repository, you will need to pull these changes into your repository. The command for this is git pull.
 
Use the git pull command.`
 
var text_object_5 = `Now you see that the changes have been pulled to your directory as well.`
 
var text_object_6 = `At this point, we have covered the basic workflow that enables anyone using email to collaborate to use Git.
Now we will move onto the special features that set Git apart from email as a collaboration tool.`

var text_array = [[0], [1], text_object_1, text_object_2, text_object_3, [2], text_object_4, text_object_5, text_object_6]

export default text_array;
