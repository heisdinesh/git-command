const data =[
    {
        group:"Set Up",
        family:[
            {
                name:"username",
                command:"git config --global user.name 'firstname lastname'",
                explanation:"Set a name that is identifiable for credit when review version history"},
            {
                name:"email",
                command:"git config --global user.email 'valid-email'",
                explanation:"set an email address that will be associated with each history marker"
            },
            {
                name:"color",
                command:"git config --global color.ui auto",
                explanation:"set automatic command line coloring for git for easy reviewing"
            }
        ]
    },
    {
        group:"setup & init",
        family:[
            {
                name:"initialization",
                command:"git init",
                explanation:"intialize an exsisting directory as git repository"
            },
            {
                name:"clone repo",
                command:"git clone <url>",
                explanation:"retrieve an entire repository from a hosted location via URL"
            }
        ]
    },
    {
        group:"stage and snapshot",
        family:[
            {
                name:"status",
                command:"git status",
                explanation:"show modified files in working directory, staged for your next commit"
            },
            {
                name:"add",
                command:"git add [file]",
                explanation:"add a file as it looks now to your next commit (stage)"
            },
            {
                name:"reset",
                command:"git reset [file]",
                explanation:"unstage a file while retaining the changes in working directory"
            },
            {
                name:"difference",
                command:"git diff",
                explanation:"diff of what is changed but not staged"
            },
            {
                name:"diff of staged",
                command:"git diff --staged",
                explanation:"diff of what is staged but not yet commited"
            },
            {
                name:"commit",
                command:"git commit -m “[descriptive message]”",
                explanation:"commit your staged content as a new commit snapshot"
            },
        ]
    },
    {
        group:"branch & merge",
        family:[
            {
                name:'list all branches',
                command:'git branch',
                explanation:'list your branches. a * will appear next to the currently active branch'
            },
            {
                name:'create branch',
                command:'git branch [branch-name]',
                explanation:'create a new branch at the current commit'
            },
            {
                name:'switch branch',
                command:'git checkout',
                explanation:'switch to another branch and check it out into your working directory'
            },
            {
                name:'merge branch',
                command:'git merge [branch]',
                explanation:'merge the specified branch’s history into the current one'
            },
          
        ]
    },
    {
        group:"inspect & compare",
        family:[
            {
                name:'log branch',
                command:'git log',
                explanation:'show all commits in the current branch’s history'
            },
            {
                name:'commit diff',
                command:'git log branchB..branchA',
                explanation:'show the commits on branchA that are not on branchB'
            },
            {
                name:'commits changed file',
                command:'git log --follow [file]',
                explanation:'show the commits that changed file, even across renames'
            },
            {
                name:'git object',
                command:'git show [SHA]',
                explanation:'show any object in Git in human-readable format'
            },
            
        ]
    },
    {
        group:"share & update",
        family:[
            {
                name:'add url',
                command:'git remote add [alias] [url]',
                explanation:'add a git URL as an alias'
            },
            {
                name:'fetch',
                command:'git fetch [alias]',
                explanation:'fetch down all the branches from that Git remote'
            },
            {
                name:'merge',
                command:'git merge [alias]/[branch]',
                explanation:'merge a remote branch into your current branch to bring it up to date'
            },
            {
                name:'push',
                command:'git push [alias] [branch]',
                explanation:'Transmit local branch commits to the remote repository branch'
            },
            {
                name:'pull',
                command:'git pull',
                explanation:'fetch and merge any commits from the tracking remote branch'
            },
        ]
    },
    {
        group:"tracking path changes",
        family:[
            {
                name:'remove file',
                command:'git rm [file]',
                explanation:'delete the file from project and stage the removal for commit'
            },
            {
                name:'change path',
                command:'git mv [existing-path] [new-path]',
                explanation:'change an existing file path and stage the move'
            },
            {
                name:'log',
                command:'git log --stat -M',
                explanation:'show all commit logs with indication of any paths that moved'
            },
        ]
    },
    {
        group:"rewrite history",
        family:[
            {
                name:'rebase',
                command:'git rebase [branch]',
                explanation:'apply any commits of current branch ahead of specified one'
            },
            {
                name:'reset',
                command:'git reset --hard [commit]',
                explanation:'clear staging area, rewrite working tree from specified commit'
            },
        ]
    },
    {
        group:"temporary commits",
        family:[
            {
                name:'stash',
                command:'git stash',
                explanation:'Save modified and staged changes'
            },
            {
                name:'stash list',
                command:'git stash list',
                explanation:'list stack-order of stashed file changes'
            },
            {
                name:'stash pop',
                command:'git stash pop',
                explanation:'write working from top of stash stack'
            },
            {
                name:'stash drop',
                command:'git stash drop',
                explanation:'discard the changes from top of stash stack'
            },
        ]
    }
]

export default data
