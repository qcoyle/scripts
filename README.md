## Python Conventions
### From [PEP 8: Function and Variable Names](https://www.python.org/dev/peps/pep-0008/#function-and-variable-names)
- Function names should be lowercase, with words separated by underscores as necessary to improve readability.
- Variable names follow the same convention as function names.

### From [PEP 8: Package and Module Names](https://www.python.org/dev/peps/pep-0008/#package-and-module-names)
- Modules should have short, all-lowercase names. Underscores can be used in the module name if it improves readability.
- Python packages should also have short, all-lowercase names, although the use of underscores is discouraged

## To run python scripts in Visual Studio Code
- Download visual studio
- Update `settings.json`:
  - Set `"python": "python3 -u"` (if your system requires this - most MacOS do)
  - Add `"python.terminal.executeInFileDir": true,`
  - Add `"code-runner.fileDirectoryAsCwd": true` (if using code runner)
  - Save file
- Open `.py` file in visual studio
- Click play button on top bar
