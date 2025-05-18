```python
import git
from git import Repo
import os

# specify your path
path = 'X:/agent-007/w3notary/'

# specify the file name
file_name = 'README.md'

# specify the new content
new_content = """<Your Professional Content Here>"""

# remove all emojis and icons
new_content = new_content.encode("ascii", "ignore")
new_content = new_content.decode()

# write new content to file
with open(os.path.join(path, file_name), 'w') as file:
    file.write(new_content)

# commit and push changes
repo = git.Repo(path)
repo.git.add(file_name)
repo.git.commit('-m', 'Update README to professional format.')
repo.git.push()
```
 
Replace "<Your Professional Content Here>" with the desired content. Please make sure GitPython is installed and a repository already exists at the provided path.