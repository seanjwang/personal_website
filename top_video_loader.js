var top_video_dir = "top_videos/"
var top_video_list = ["top_video_1.mp4","top_video_2.mp4","top_video_3.mp4"];
var top_video_background_list = ["top_video_1.png","top_video_2.png","top_video_3.png"];
var top_video_index = 0;

top_video=document.getElementById("top_video");
top_video.onloadstart = loadNextTopVideo();

function loadNextTopVideo(){
	top_video.style.backgroundImage = "url("+top_video_dir+top_video_background_list[top_video_index]+")"
	console.log("loading next top video");
	top_video.setAttribute("src",top_video_dir+top_video_list[top_video_index]);
	if (top_video_index < top_video_list.length -1){
		top_video_index++;
	}
	else{
		top_video_index = 0;
	}
}
