# Pipe Dream

A couple of apps, of no public interest, that I use to hack around with GoCD + pcf-dev + Docker integration.

----

**If you want to play with the client and server locally, then read on:**

## To Install

`cd` into the client and server sub-directories, runing `npm ci` in each.

## To run locally

Install `pm2`, then from the root directory on this repo:

` pm2 start ecosystem.config.js`

To stop:

` pm2 del ecosystem.config.js`

(Also `pm2` will watch the *client* app for changes.)

## To browse

- [Client](http://localhost:5400/)
- [Server](http://localhost:5401/)
