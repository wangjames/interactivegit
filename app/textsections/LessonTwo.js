
var text_object_1 = [`One aspect about remote repositories is that these remote repositories must be hosted on an online service for other people to collaborate on. 
Companies around the world use services like Github, Gitlab, and Bitbucket to host their remote repositories.`]

var text_object_2 = [`When users want to push their commits to the remote repositories, they have to have an internet connection that will enable them to connect with these services`]
 
var text_object_3 = [`In our case, we will use a simulation of these services called GitBoat. 
This service will help us simulate the exact workflow needed to use these services.`]

var text_object_4 = [`Now, lets repeat the steps from the last section to create a local repository.`]

var text_object_5 = [`First, we want to make a directory called essay. This tutorial simulates a Linux command line so the command for this is mkdir essay. `]

var text_object_6 = [`We then want to create an introduction file in the essay folder. Do this by first changing into the directory with the command cd essay.`,
`Then create the file using the command touch introduction. Return back to the root with the command cd ../.`]

var text_object_7 = [`Now that we have these files created, we can create our repository.`]

var text_object_8 = [`Enter the command git init. This creates a repository to watch over the current directory.`]

var text_object_9 = [`Next, we need to add these files to staging area.`, 
`A shortcut is to just add each file through the git add . command.`]

var text_object_10 = [`Once these files have been added, we can now make a commit. 
All commits need a message associated with them so we will use the message “initial version”, 
Enter the command git commit -m “initial version”.`]

var text_object_11 = [`Now we have created a local repository that can serve as the remote repository.
We can see our first initial commit using the command git log. `]

var text_object_12 = [`Now that we have a local repository, we can now push these changes to GitBoat.`,
`Before we can do this however, we must first create a remote repository that we can push our local repository to. `]

var text_object_13 = [`Click the GitBoat button.`]

var text_object_14 = [`Click the create repository button.`]

var text_object_15 = [`Give it the name test.`]

var text_object_16 = [`Click on the test text to enter the repository.`]

var text_object_17 = [`Make a note that the remote repository link is called test.git`]

var text_object_18 = [`Return to your terminal.`]

var text_object_19 = [`Type git remote add origin test.git`]

var text_object_20 = [`Now you have configured your local repository to push to the remote repository.`]

var text_object_21 = [`Type git push origin master.`]

var text_object_22 = [`Now go back to the same repository in GitBoat, and you can notice your changes are now there.`]

var text_object_23 = [`With the section, you’ve learned how to create a remote repository from your local repository.`]

var text_object_24 = [`In the next section, we will talk about how to work with a remote repository that has already been 
created and how to bring in changes to the repository when someone has pushed a commit to the repository.
Please return to the menu, and go to the third section.`]


var text_array = [text_object_1, text_object_2, text_object_3, text_object_4, text_object_5, text_object_6, text_object_7, text_object_8, text_object_9,text_object_10, text_object_11,text_object_12, text_object_13,text_object_14, text_object_15,text_object_16, text_object_17,text_object_18, text_object_19, text_object_20, text_object_21, text_object_22, text_object_23,text_object_24]

export default text_array;