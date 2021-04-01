#!/bin/bash
set -e

mongo <<EOF
db = db.getSiblingDB('$MONGO_INITDB_DATABASE');
db.createUser({
    user: '$MONGO_INITDB_USERNAME',
    pwd: '$MONGO_INITDB_PASSWORD',
    roles: [{
        role: "readWrite",
        db: '$MONGO_INITDB_DATABASE'
    }]
});

db.createCollection('developer');
db.developer.insert([
    {
      "id": 23,
      "name": "AresGalaxy",
      "url": "https://aresgalaxy.io/"
    },
    {
      "id": 241,
      "name": "Nero AG",
      "url": "http://www.nero.com/"
    },
    {
      "id": 801,
      "name": "VideoLan",
      "url": "http://www.videolan.org/"
    }
  ]);

db.createCollection('program');
db.program.insert([
    {
      "id": "21824",
      "developer_id": "23",
      "title": "Ares",
      "version": "2.4.0",
      "url": "http://ares.en.softonic.com",
      "short_description": "Fast and unlimited P2P file sharing",
      "license": "Free (GPL)",
      "thumbnail": "https://screenshots.en.sftcdn.net/en/scrn/21000/21824/ares-14-100x100.png",
      "rating": 8,
      "total_downloads": "4741260",
      "compatible": [
        "Windows 2000",
        "Windows XP",
        "Windows Vista",
        "Windows 7",
        "Windows 8"
      ]
    },
    {
      "id": 62465,
      "developer_id": 241,
      "title": "Nero",
      "version": "10.4.3",
      "url": "http://nero.en.softonic.com",
      "short_description": "The ultimate PC multimedia suite",
      "license": "Trial",
      "thumbnail": "https://screenshots.en.sftcdn.net/en/scrn/7000/7595/thumbnail_1444824132-100x100.png",
      "rating": 8,
      "total_downloads": "6239531",
      "compatible": [
        "Windows 8",
        "Windows 10"
      ]
    },
    {
      "id": 3075333,
      "developer_id": 801,
      "title": "VLC",
      "version": "2.4.0",
      "url": "http://vlc.en.softonic.com",
      "short_description": "Simply the best multi-format media player",
      "license": "Free (GPL)",
      "thumbnail": "https://screenshots.en.sftcdn.net/en/scrn/25000/25339/vlc-media-player-11-100x100.png",
      "rating": 8,
      "total_downloads": "5784268",
      "compatible": [
        "Windows 10"
      ]
    }
  ]);
EOF