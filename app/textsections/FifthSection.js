var text_object_1 = `At this point, it should be clear how to develop on a different branch and why you would develop on a different branch.
What isn’t clear yet, however, is how you would go about integrating your changes into the main branch.
One way we can do this is through the command git merge. 
With this command, all of the work from a different branch will be brought into the master branch.`
 
var text_object_2 = `Most of the time, this works out, but sometimes there are problems when trying to merge.
The problem comes from the scenario in which two commits change the same area and Git doesn’t know which one to accept.`
 
var text_object_3 = `For example, let us imagine that we are working on a story, and in the introduction file, the story takes place on December 28th, 2000.
At this point, you decide to make a new branch from the current branch to experiment with the story.
In the introduction file, you change it so the story ends up taking place on December 29th, 2001.
You go to work on this branch for a couple of days until your collaborator asks you to go back and work on the main master branch.
In this master branch, your collaborator asks you to change the date in the introduction file to December 27th, 2001.
Now with this change, when you go and try and merge the experiment branch into the main branch, you will get a merge conflict.`
 
var text_object_4 = `The reason why you get a merge conflict is Git ultimately doesn’t know which change should take precedence.
The experiment branch wants the story to start on the 29th, but it doesn’t know that the main branch had a recent change that wants to start the story on the 27th.
At this point, Git will asks the user which change he or she wants to keep.
(Note: Conflicts occur when a branch that has a commit that changes one file is merged into another branch that has a commit that changes the same file.
Furthermore, each branch should not have knowledge of the commit in the other branch.)`
 
var text_object_5 = `The way Git prompts the users about merge conflicts is by halting the merge process and stating that there is a merge conflict.
When you type git status, you will see that there are files that still need to be resolved.
When you open this file, you will see the following format.

>>>>> Commit on Feature Branch
This story takes place on December 29th, 2001.
=========================
This story takes place on December 27th, 2001.
<<<<< Commit on Master Branch.
 
This format is alerting you to the fact that there are two different commits all trying to change the same area, and it is asking you to decide on one.
To decide, you simply delete all of the extraneous text and symbols and the other commit’s text leaving only the section you want.`
 
var text_object_6 = `For example, if you want your story to take place on the 27th, you go from 
 
>>>>> Commit on Feature Branch
This story takes place on December 29th, 2001.
=========================
This story takes place on December 27th, 2001.
<<<<< Commit on Master Branch.
 
to 
 
This story takes place on December 27th, 2001.
`

var text_object_7 = `Similarily, if you want your story to take place on the 29th, you go from 
 
>>>>> Commit on Feature Branch
This story takes place on December 29th, 2001.
=========================
This story takes place on December 27th, 2001.
<<<<< Commit on Master Branch.
 
to 
 
This story takes place on December 29th, 2001.`

var text_object_8 = `After you do so, save the file, add it to the staging area, and then continue the merge by typing in git merge --continue.`
 
var text_object_9 = `I have provided here an example merge conflict you need to resolve. Select one, save it, and then continue the merge.`
 
var text_array = [text_object_1, text_object_2, text_object_3, text_object_4, text_object_5, text_object_6, text_object_7, text_object_8, text_object_9]

export default text_array;