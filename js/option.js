$(document).ready(function(){
	chrome.storage.sync.get("zfirst",function(a){
		if(a.zfirst===true){
			$("#zg-first-switch").html("Zawgyi First is On");
		} else {
			chrome.storage.sync.set({"zfirst":false},function(){
				$("#zg-first-switch").html("Zawgyi First is Off");	
			});
		}
	});
	$("#zg-first-switch").click(function(){
		chrome.storage.sync.get("zfirst",function(a){
			if(a.zfirst===true){
				chrome.storage.sync.set({"zfirst":false},function(){
					$("#zg-first-switch").html("Zawgyi First is Off");
				});
			} else {
				chrome.storage.sync.set({"zfirst":true},function(){
					$("#zg-first-switch").html("Zawgyi First is On");
				});
			}
		});
	});
});