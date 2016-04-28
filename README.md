# html5-video-analytics
Captures HTML5 video events for Google Analytics

These events are supported:

* Play
* Paused
* Percentage of video viewed (25%, 50%, 75% or 100%)

## Requirements

* Google Analytics

## Installation

Install using Bower: `bower install html5-video-analytics`

Include `bower_components/html5-video-analytics.js` in your HTML file after your Google Analytics code.

Example:

```html
<!-- The actual video -->
<video id="my-video-id" title="My video" src="/path/to/video.mp4" controls></video>

<!-- Google Analytics -->
<script type="text/javascript">
    <!--//--><![CDATA[//><!--
    (function(i,s,o,g,r,a,m){i["GoogleAnalyticsObject"]=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create", "[YOUR_GA_CODE]", {"cookieDomain":"auto"});ga("send", "pageview");
    //--><!]]>
</script>

<!-- Tracking Support -->
<script type="text/javascript" src="bower_components/html5-video-analytics/html5-video-analytics.js"></script>
<script type="text/javascript">
	document.addEventListener('DOMContentLoaded', init, false)
	var videoId = document.getElementById('my-video-id')
	var videoTitle = videoId.getAttribute('title')
</script>

```

Alternatively, you can just drop the script from this repo into your project.

## Contributors

* Matt West <west.matt@sochadev.com>

## Acknowledgements

This project is mostly a wrapper for this gist from placeless:

https://gist.github.com/placeless/6067714
