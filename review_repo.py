import os

def scan_repo(path):
    print(f"\nScanning repo at: {path}\n{'='*40}")
    for root, dirs, files in os.walk(path):
        level = root.replace(path, '').count(os.sep)
        indent = ' ' * 2 * level
        print(f"{indent}{os.path.basename(root)}/")
        subindent = ' ' * 2 * (level + 1)
        for f in files:
            print(f"{subindent}{f}")
        if level == 0:
            print('-' * 40)

    # Print README.md preview if exists
    readme_path = os.path.join(path, "README.md")
    if os.path.exists(readme_path):
        print("\nREADME.md Preview:\n-----------------")
        with open(readme_path, "r", encoding="utf-8") as f:
            print("".join(f.readlines()[:30]))  # Print first 30 lines

if __name__ == "__main__":
    scan_repo(".")
