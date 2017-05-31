var text_array = []

var menu_item_1 = []
menu_item_1[0] = `Setting up email account -> Git Initialization`
menu_item_1[1] = `When sending email for the first time, you need to set up your email account with an email provider like Gmail or Yahoo! Mail. 
                  Similarily, in order to use git, you need to do some local setup and signup with a public Git repository host like Github or Bitbucket.
                  This tutorial will walk you through the steps of that process.`
text_array.push(menu_item_1);

var menu_item_2 = []
menu_item_2[0] = `Sending Email -> Making commits and pushing to remote`
menu_item_2[1] = `When coordinating with people on your team with email, you can send them email messages with your work for them to see and work with.
                  With Git, the way we share our work is through commits which is essentially a copy of all of the work we have done.
                  We then push this copy up to the public Git repository where others can see our work.`

text_array.push(menu_item_2)

var menu_item_3 = []
menu_item_3[0] = `Recieving Email -> Pulling commits from the online repository`
menu_item_3[1] = `When working with people through email, you simply recieve emails from your teammates and you inspect the files that they gave you.
                  With Git, the way you can do this is through pulling the most up to date changes from the public Git repository.`

text_array.push(menu_item_3)
var menu_item_4 = []
menu_item_4[0] = `Git Branching and Merging`
menu_item_4[1] = `One advantage of Git over email is the fact that you can have different versions of the same work.
                  With email, you would have to come up with different naming schemes for different versions which could easily become extremely difficult to keep track of.
                  Furthermore, it is not exactly clear how you would go about merging these versions into one final version. Git provides a powerful workflow for this.`
text_array.push(menu_item_4)

var menu_item_5 = []
menu_item_5[0] = `Resolving merge conflicts` 
menu_item_5[1] = `Occasionally with merging branches or simply pulling in recent changes, there is the possibility of a merge conflict.
                  This occurs when there are two versions of the same file and Git needs to know which version to keep.
                  This tutorial will show you how to resolve these conflicts.`
text_array.push(menu_item_5)

var menu_item_6 = []
menu_item_6[0] = `Reverting/Rolling back changes`
menu_item_6[1] = `One of the advantages of a source control system like Git is that it keeps track of all of the changes you have made overtime.
                  If you make a mistake, you can simply rollback or access changes from before.
                  This tutorial will show you different strategies for accessing the changes you've made in the past.`
text_array.push(menu_item_6)

export default text_array