TV-App

This project uses Angular version 7, type script

Purpose

An app built in Angular that allows the user to search for a show, select a show,
and see the episodes list sorted by seasons. This project use MVC model.

API

TV Maze

Style

Angular Material

How to build an App:

Here are some steps that used to implementation process:

1. Plan you layout and create 4 components:
   my-nav
   shows-list
   seasons
   episodes
   
2. Create service file to invoke backend services. Each service from the file will be called 
   from within appropriate component.
 
3. Create app-routing-module.ts file to set all routes.  

4. Create app.module which contains all necessary imports.


Main Pages:

Home - where the search bar is located
Shows-List Component - rendered after search. The List of shows. Each show contains details.  
Episode Page Component - season-by-season breakdown of a specific show. When navigate on a specific season causes the episodes from that season to appear.



  
   
   



