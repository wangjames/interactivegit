var text_object_1 = [`With this first tutorial, we can start looking at how people can collaborate with Git. 
As stated before in the introduction, collaboration with Git involves commits to a central repository.`,
`Everyone receives a copy of the entire project and in order for users to collaborate on this project,
they must send up a new version of the entire project with changes which will be meticulously tracked by Git.`]

var text_object_2 = [`When a repository is first created, we have to initialize a repository with our project.`,
`Type git init while in the root directory. Let’s do that now.`]

var text_object_3 = [`Make a file using the mkdir command. Make another file using the touch command. You can click on file to open up an editor for that file.`]
 
var text_object_4 = [`Now that you are ready to push up the initial commit or version of your project to the repository, you first have to prepare all of the files to be sent.
Similar to using the attach functionality when sending an email, you have to do the same with git.`,
`The function for this is git add. You can go file by file adding each file with each file’s name. 
For example, if you have a file called text.txt in your current working directory,
you can do git add text, and this will add the file to be prepared to be commited (this is also referred to as adding to the staging area).`]
 
var text_object_5  = [`A shortcut for this is the command git add . - when you type this in, all of the files and folders
and their files and folders to the staging area in the current working directory.`,
`Do this now.
Make sure you’re in the root directory and type git add .`, 
`If you type git status, you can see that you’ve staged these files for commit.`]
 
var text_object_6 = [`Now that you added the files to the staging area, we can make a commit that can be sent to the public repository.
With every commit, we need attach a message to it.`,
`For example, with a set of files in a commit, we can attach the message “Changed introduction of the essay.”
To do this, we can execute the command git commit -m “Changed introduction of the essay.”`,
`Do this now. Make a commit with your own commit message.`]
 
var text_object_7 = [`After doing this, you have now created a snapshot of your working directory that you can now push to a repository to share with others.
This will be discussed in the next section.`]

var text_array = [text_object_1, text_object_2, text_object_3,text_object_4,text_object_5, text_object_6, text_object_7];

export default text_array;