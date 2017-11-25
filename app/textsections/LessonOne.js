var text_object_1 = [`With this first section, we can start looking at how people collaborate on Git.`,
`Imagine that you’re working on an essay with a team where each team member is responsible for a section of the essay.`,
`Immediately, we can see that there are challenges on how to coordinate different versions and how to track all of the latest changes.`]

var text_object_2 = [`These challenges could be solved by using Git. Git uses the idea of a repository which is essentially the folder that holds your project’s files,
but it also tracks all changes made to that repository.`,
`Every group will have a single repository that acts as the single source of truth for their project. This is called a remote repository.`]

var text_object_3 = [`Once the remote repository is created, each team member downloads a copy of the remote repository to their computers.`, 
`This is called a local repository.
Team members work on their computer on their respective local repository and push all new changes and modifications to the remote repository.`]

var text_object_4 = [`In order to create a remote repository, a user first must create a local repository that will serve as the initial version of a remote repository. `]

var text_object_5 = [`First, we want to make a directory called essay. This tutorial simulates a Linux command line so the command for is mkdir essay.`]

var text_object_6 = [`Then create an initial file in the essay folder.`,
`First, change directory with the command cd essay. Then create the file using the command touch introduction.`,
`Return back to the root with the command cd ../`]

var text_object_7 = [`Now that we have these files created, we can create our Git repository.`]

var text_object_8 = [`Enter the command git init. This creates a repository to watch over the current directory.`,
`Next, we need to add these files to staging area.`]

var text_object_9 = [`The staging area is where you confirm what changes you want to push up into the remote repository.
We can add each file individually, but a shortcut is to just add each file through the git add . command`]

var text_object_10 = [`Once these files have been added, we can now make a commit. 
All commits need a message associated with them so we will use the message “initial version”.`]

var text_object_11 = [`Enter the command git commit -m “initial version”.`]

var text_object_12 = [`Now we have created a local repository that can serve as the remote repository.`, 
`We can see our first initial commit using the command git log.`]

var text_object_13 = [`In the next section, we will be repeating these steps and then make this local repository be our remote repository.`,
`Please hit the back button on your browser to go back to the menu.`]

var text_array = [text_object_1, text_object_2, text_object_3,text_object_4,text_object_5, text_object_6, text_object_7, text_object_8, text_object_9, text_object_10,text_object_11,text_object_12,text_object_13];

export default text_array;