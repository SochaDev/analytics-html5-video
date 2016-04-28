/**
 * Capture video events to Google Analytics 
 *
 * Source: https://gist.github.com/placeless/6067714
 *
 * Usage:
 *
 *   document.addEventListener('DOMContentLoaded', init, false)
 *   var videoId = document.getElementById('video-id')
 *   var videoTitle = videoId.getAttribute('title')
 */

function init () {
	videoId.addEventListener('ended', videoEnd, false)
	videoId.addEventListener('timeupdate', videoTimeUpdate, false)
	videoId.addEventListener('play', videoPlay, false)
	videoId.addEventListener('pause', videoPause, false)
}

function setKeyFrames (duration) {
	var quarter = (duration / 4).toFixed(1)
	sessionStorage.setItem('one', quarter)
	sessionStorage.setItem('two', (quarter * 2).toFixed(1))
	sessionStorage.setItem('three', (quarter * 3).toFixed(1))
}

function videoTimeUpdate () {
	var curTime = videoId.currentTime.toFixed(1)
	switch (curTime) {
		case sessionStorage.getItem('one'):
			ga('send', 'event', 'video', '25% video played', videoTitle)
			sessionStorage.setItem('one', null)
		case sessionStorage.getItem('two'):
			ga('send', 'event', 'video', '50% video played', videoTitle)
			sessionStorage.setItem('two', null)
		case sessionStorage.getItem('three'):
			ga('send', 'event', 'video', '75% video played', videoTitle)
			sessionStorage.setItem('three', null)
	}
}

function videoEnd () {
	ga('send', 'event', 'video', '100% video played', videoTitle)
}

function videoPlay () {
	ga('send', 'event', 'video', 'video played', videoTitle)
	setKeyFrames(this.duration)
}

function videoPause () {
	ga('send', 'event', 'video', 'video paused', videoTitle)
}