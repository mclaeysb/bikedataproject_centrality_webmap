# Brussels Cycling Potential 🚲

In this map I try to find out which streets in Brussels are under- or over-used by cyclists. I do this by comparing the actual trip count on each road segment to a predicted count.

## Why I made this

I hope this map, or a similar exercise, could help city officials and traffic managers identify issues and/or usage potential: which potentially useful roads seem to be avoided, and why? Are there any unexpected routes taken? How could we improve our infrastructre along these routes? Etc.

## How I made this

I use the BikeDataProject ['bicycle count dataset'](https://wiki.bikedataproject.org/open-cycling-data/bicycle-counts) for the actual count. I must note that this dataset is still relatively small, and propbably skewed towards recreational, affluent bikers living in the richer part of town (center, South and East).

To estimate the predicted usefulness of each road segment, I use the so called [betweenness centrality](https://en.wikipedia.org/wiki/Betweenness_centrality) measure for graphs (like a street network in our example). The algorithm for this measure computes the shortest path between every pair of graph nodes (these nodes are our road crossing) and keeps count of how many times those paths pass through eacht node, to arrive at some measure for node imporance. I carried this resulting count over to the graph edges (our street segment) that are touching each node, and apply some local averaging to arrive at a predicted trip count.

## What I found
      
Some first observations include over-usage along the canal and in parks, on some of the main lanes and in the East of town. I also observe notable under-usage of some apparent shortcuts and unsafe or hilly main lanes.

*What do you observe?*

## Contact me

This map was made by Manuel Claeys Bouuaert in March 2021

I'm happy to talk about where this project could go! Feel free to send me an [email](mailto:manuel.claeys.b@gmail.com)

## Run it locally

To read up on making webmaps using Mapbox GL, take a look at [these examples](https://www.mapbox.com/mapbox-gl-js/example/).

To edit this webmap, open the `index.html`, `map.js` and `style.css` files in a text editor.

To view this webmap, start a local http server (for example at this directory and on port 8080) and open the `index.html` file in you browser on the corresponding port via `localhost:8080/index.html`

Using a local http server for the first time? If you're familiar with NodeJS, I can recommend [http-server](https://www.npmjs.com/package/http-server), but there are other options out there aswel, including MAMP, WAMP and XAMPP.

Happy mapping!
