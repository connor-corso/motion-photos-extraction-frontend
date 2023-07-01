# Motion Photos Extraction Frontend

## How to use

sample docker compose script

`
version: '3'

services:
  MPE:
    image: connorcorso/MPE-frontend
    container_name: MPE-frontend
`
## What is the purpose of this?
I wanted to find some app to replace Google Photos because I ran out of storage and also decided that I should try to clean up the amount of stuff that Google can learn about me.
Unfortunately most solutions I found for Photos lacked the ability to handle the Motion Photos so I figured that if Google can separate the videos from the photos than theres probably some way that I can do the same thing
This app is just a basic implementation that takes a Motion Photo (MP) upload and sends back both the video and the picture allowing you to get the videos if you want them, and cut out ~1-2mb of data from the pictures
Eventually I plan on making a photoprism style app that has native support for both picture uploads via some service (maybe webdav or something) and has a convenient way to play the videos