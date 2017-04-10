Small Chrome extensions that for now shows the imdb rating (and link) in Plex Web 3.0.
Available at https://chrome.google.com/webstore/detail/plexius/cghenlijcboahfbcgiccpnmagdhihiho

This fork adds 2 buttons to the Plex interface that let you open video files using MPC-HC and open the folder in
explorer containing the video file. This works in conjunction with a locally run Python program that registers a new
URI Scheme to receive the request and then open the corresponding file.

The python program will be released as soon as I clean up the code a bit.

This feature only works when the computer you are on is on the same local network as your server.
The folders containing your video files needs to be shared on your network accessable on the client computer with
explorer.

As Plex stores the location of the files as an absolute path on the server, not the network path, either you need
to mount the drives that contain the video on the client computers using the same lettering or a map needs to be
created in the constants.js file. An example map is included below for reference.
This scheme will probably be change in later releases to be set in the extension settings.

driveMap = {
    "E":'\\\\'server ip address'\\shared folder name',
    "F":'\\\\'server ip address'\\shared folder name',
    "G":'\\\\'server ip address'\\shared folder name',
    "H":'\\\\'server ip address'\\shared folder name'
};


changelog:
1.4.0A
 - added ability to open video files using MPC-HC and Explorer

1.4.0
 - added movie trailers using Trakt api

1.3.0
 - fixed localhost / 127.0.0.1 (Salvationdk)
 - added Trakt ratings and links to movies and tv shows
 - added options to toggle the ratings (in the extensions page)

1.2.2
 - removed episodes rating for now since the ratings from the API  are not updated often

1.2.0
- improved the server discovery
- added imdb ratings to tv shows and episodes



Heavily inspired by Moussa's 'Transmogrify forPlex'
https://github.com/Transmogrify-for-Plex/
