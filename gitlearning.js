// GIT Learning
// git init
// In order to initialize new GIT Git Repository we have to use "git init" command in the bash ternimal and .git file will be created in the same directory which keep tracks of version of our project.

// git branch -m main
// By default the git creates the main branch as master using "git branch -m main" command we can change the name of the main branch as per your choice.

// git status
// By using "git status" command we can check the git branches status including main branch name

// git status -s
// By using "git status -s" command we can check the git branches status

// git add gitlearning.html
// By default all the files in git branch is untracted so we have to use "git add" to file in staging area
// git add gitlearning.html git.js.
// This command add multiple files in staging area
// git add.
// This command add all files to staging area

// git commit -m "This is Initial Commit"
// By using "git commit -m" command we can commit the files in staging area with a message decribing the changes done by us.

// git config --global --list
// By using "git config --global --list" command we can check the global git configuration details.

// git log
// Displays the commit history with detailed information.

// git log --oneline
// Shows a compact commit history with one commit per line.

// git log --oneline --graph
// Displays a visual representation of the commit history in a concise format.

// git log --oneline --graph --all
// Shows the commit history for all branches, including the current branch.

// git checkout c50cc28
// Switches to the commit with hash c50cc28(This is simple Commit ID that we have to use to switch between 2 commits), updating the working directory to that state.

// git checkout main(Main is the name of main/master branch)
// Switches to the main branch (older method, still works)

// git switch main(Main is the name of main/master branch)
// Switches to the main branch (recommended for newer Git versions)

// git restore --staged gitlearning.css
// Removes gitlearning.css from the staging area without discarding changes.(This Command should be used in combination with below command)

// git restore gitlearning.css
// Restores gitlearning.css to its last committed state, undoing uncommitted changes.

// git reset HEAD gitlearning.css
// Unstages gitlearning.css moving it from the staging area back to the working directory.(This Command should be used in combination with below command)

// git checkout -- gitlearning.css
// Restores gitlearning.css to its last committed state, discarding uncommitted changes.

// git branch
// "git branch" lists, creates, renames, and deletes branches, helping manage parallel development in a Git repository

// git branch about
// The command git branch about attempts to create a new branch named about. If a branch with that name already exists, it does nothing.

// git log –all
// "git log --all" displays the commit history of all branches, including those not currently checked out

// git log --all --oneline
// This command lists the commit history of all branches in a concise, single-line format.

// git log --all --oneline --graph
// This command shows the commit history of all branches in a compact, one-line format with an ASCII graph representing branch structures.

// git commit --amend -m "This is 2nd Commit in About Branch"
// This command modifies the most recent commit by replacing its message with "This is 2nd Commit in About Branch", without changing its content.

// git push --force
// Overwrites the remote branch with the amended commit, Use only if the commit has already been pushed, as force-pushing can rewrite history and affect collaborators(Inorder to change commited message before or after pushing we need to use it in combination with above command)

// git branch --delete contact
// This command deletes the local branch named contact, but only if it has been fully merged into the current branch.

// git branch -D contact
// This command forcefully deletes the local branch named contact, even if it has unmerged changes, potentially leading to data loss.
