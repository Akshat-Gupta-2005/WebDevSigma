# Git Commands Cheat Sheet (VS Code Terminal)

## Repository Setup
- `git init` - Initialize a new Git repo  
- `git clone <url>` - Clone a repo from GitHub or elsewhere  

## Basic Workflow
- `git status` - Check repo status  
- `git add <file>` - Stage specific file  
- `git add .` - Stage all changes  
- `git commit -m "message"` - Commit staged changes  
- `git log` - Full commit history  
- `git log --oneline` - Short commit history  

## Branching
- `git branch` - List branches  
- `git branch <name>` - Create a new branch  
- `git checkout <name>` - Switch to a branch  
- `git checkout -b <name>` - Create and switch to branch  
- `git merge <branch>` - Merge into current branch  
- `git branch -d <name>` - Delete a branch  

## Remote Repositories
- `git remote add origin <url>` - Connect to remote  
- `git remote -v` - View remotes
- `git remote remove <name>` - Remove a remote
- `git push -u origin <branch>` - Push branch & set upstream  
- `git push` - Push commits  
- `git pull` - Fetch and merge from remote  

## Stashing
- `git stash` - Save uncommitted changes  
- `git stash list` - View stashes  
- `git stash apply` - Reapply last stash  

## Diff & Undo
- `git diff` - View unstaged changes  
- `git diff --staged` - View staged changes  
- `git reset` - Unstage changes  
- `git checkout -- <file>` - Discard file changes  
