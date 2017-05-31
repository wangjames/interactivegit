var text_object_1 = `Finally, one important aspect of version control systems is the ability to rollback changes.
With Git, there are multiple ways of doing this and a lot of the dependent entirely on what you want.
Some ways are more suitable than others.` 
 
var text_object_2 = `One way is to use git reset --hard. Another way is to use git checkout <sha-name>.
One final way is using git revert <sha-name>.`
 
var text_object_3 = `Git revert is technically the safest way to rollback changes. 
When you use git revert and give a commit’s sha as parameter, it will create a revert commit which will undo the changes of that commit. 
The problem is that in some cases this may cause conflicts they will need to be resolved.`
 
var text_object_4 = `Git reset is another possible choice, but the main danger with this rollback is the fact that the history is altered.
This is a big problem if you’re collaborating with others is because if you revert too far then you run the risk of deleting history.
This is dangerous because if you are collaborating with others, it is possible to accidentally delete other people’s work.
A good rule of thumb is to never revert back farther than what is currently in the public repository.`
 
var text_object_5 = `Finally, there is the ability to do git checkout where you can checkout a former commit and work from there in a different branch.`
 
var text_object_6 = `In the end, these situations are very situational dependent. It would be best to look up guides and discussion to figure out what method would be best for you.
 
In this tutorial, we will only be showing git checkout and git reset.` 
 
var text_object_7 = `Here you are given a repository with a lengthy commit history. I would like you to checkout a branch that contains the commit that says “base version.”
 
To do this, do git status to find the SHA-value of that commit. Then do git checkout -b old <sha-value> to create a branch with that.`
 
var text_object_8 = `Now that we tried that, we can do git reset. 
 
One thing to note is that the most recent commit of the branch you are currently are on is considered the HEAD commit. 
This is important because of how git reset works. If you want to reset to a commit that is two commits away from the head, the syntax for that is git reset HEAD~2 --hard.
Notice that the number after the tilde is the number that designates how many commits back the repository should be set to. 
(Note: the --hard parameter deletes the work of the current commit from the working directory. Without the parameter, the work of the current commit is marked as an unstaged change.)
 
Here you are given a repository with a lengthy commit history. I would like you to reset to a commit that is two commits back from the head.
 
To do this, do the command git reset HEAD~2 --hard.`
 
var text_array = [text_object_1, text_object_2, text_object_3, text_object_4, text_object_5, text_object_6, text_object_7, text_object_8]

export default text_array;