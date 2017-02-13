(function($){
	$.fn.loading=function(options){
		var settings=$.extend({
			imgs:[],
			onload:function(){},
			complete:function(){}
		},options)
		var total = settings.imgs.length;//总共需要读取的图片
		var process = 0;//读取进度
		var loaded = 0;//已读取
		settings.imgs.forEach(function(url){
		    var img = document.createElement('img');
		    img.src = url;
		    img.onload = function(){
		        process = parseInt(++loaded/total*100);
		        settings.onload(process);
		        if(process == 100) {
		            settings.complete()
		        }
		    }
		})
	}
})(jQuery)