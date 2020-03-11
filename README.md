Report Site Issues 
==================

This repository includes "Prototype an in-browser mechanism to report web compatibility issues.

Brief Desciption 
================

Mozilla's Web Compatibility team collects reports about sites that work in one browser but don't correctly work in other browsers. Across browsers, the webform at `webcompat.com` is the primary source of web compatibility reports, but we also maintain a `"web compatibility reporter"` module for Firefox. The in-browser reporter is easier to access and allows Mozilla's Web Compatibility team to allow gathering more details about the issue, so it's an essential component.

The web report form is currently undergoing lots of changes to make the reporting process easier to understand, as well as to increase the quality of reported bugs to make it easier for Mozilla's team to work on resolving the issues. These changes, as well as the UI and UX concepts created while exploring improvements to the web reporter, can also be adapted to the in-browser reporting component.

As part of this Outreachy round, I am working on prototyping the next version of our in-browser reporting component. The reporter is implemented as a standalone WebExtension, that leverages both standard WebExtension APIs as well as some Firefox-specific APIs that allows gathering more information, like taking a screenshot and collecting error messages from the JavaScript error console. This task includes adopting the existing UX/UI concepts for the new web reporting form to fit the in-browser reporter, coming up with solutions for interactions exclusive to the reporter component, and implementing these ideas as a WebExtension to be possibly embedded into Firefox.
