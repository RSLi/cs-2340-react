# CS 2340 Crowd-Sourced Water Report App Alternative Implementation for Extra Credit

Dependency:
- React (create-react-app)
- Onsen UI
- see package.json for more information

View:
- root component is the navigator
- the navigator controls pages in a back-stack
- pages each contain a toolbar, and subsequently their own contents
- PermissionButton checks if the current user has the specifies permission or will not display

Model:
- accounts
- reports
- session with persistence
- default strategy using localStorage
