// 重要：BlackHospital.isBlackHospital 需要用户自己实现，用于判断是否为莆田医院。
// android可以通过addJavascriptInterface提供一个接口，供调用。
// 纯js版本版本可以通过把莆田医院列表放在js中，通过js判断。

__deal_with_baidu_mobile();

// 添加莆田标记
// @param container 需要添加莆田标记的容器.
// @param count 把container的最后count个子元素(一般为评价标记)替换成莆田标记.
function __addPuTianTag(container, count) {
	// 不用重复添加
	var putian = container.getElementsByClassName("putian");
	if (putian.length > 0) return;
	// 倒序删除count个节点
	while (container.childNodes.length > 1 && count > 0) {
		container.removeChild(container.childNodes[container.childNodes.length-1]);
		count--;
	}
	// 添加莆田img元素
	var img = document.createElement("img");
	img.setAttribute("style", "height:14px; width:auto; margin-left:8px; vertical-align:middle;");
	img.setAttribute("class", "putian");
	img.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAAhCAMAAABqZpwPAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAS1BMVEXySj7ySj7ySj7ySj7ySj7ySj7ySj7ySj7ySj7ySj70bGT2lZDzXFL2iIL5ubb////4rqr82df7zsz84+H+9vX97Oz3op36xMH1e3RlwXBDAAAACXRSTlMDfuiAguXnf+kql3NWAAAAAWJLR0QPGLoA2QAAAAd0SU1FB+AFAxAfGMLVpAQAAAHhSURBVEjH3ZbbtuIgDEA59wMBAgWE///SCRCVtnhZa+zDTB5KRdnCTgoV4u1dvjzeP4R4ez22xqf4Ogb8LY7hSvk/gRXUqwb9l2BDsWJYrB8B4RmM1hoAnLVmB0YK7gVbw2O9Lri0T0qasAlX/936ehuRI53ugV0bl7A1/RoMzb3fRW7R0k+XerfYGC1NWOlhySuw2qhQoElFdn0dLCU0RVI3cM9GwNz6TrfAK21giQ3KFhv9XbCLqX+T0d8HX2yyjZRCuAmGEC2PwmU2Y38FK8vhOXMUN8BAwzKluDqPJynvgwfNQ61NwYVGxbY21jwFp0tvXqnolQU8/YR9DV0F1EqgefsiXb4FvqoPOKpY+qpxE+fkFcJCz51+DNaDCmCwgxoBWwMMNkvH0sPnMKg9OK/BKxUMnjh2qTtulqvvsgO7xyomYMPcJp42C4xqC1bGlAE8UzGrY6WV5s6axmsC59vm0zOmNgTdO0MaN8L5I/20Y1kiOu40EfNj8EzFZHdzMcJlgPZDWTwC0w5OZeQG8DkIrDOGQoeMKSlyaUXYgj3FBKxaESm5O0uqCh3qttOeHJbgLs/IPHk5tAbo4OjHh9yffkC93fZ4Iu0dvzr+QfBh724/x4A/hfg54P3490P8AYNPeuD5tMFUAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE2LTA1LTAzVDE2OjMxOjI0KzA4OjAwJ94EEgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNi0wNS0wM1QxNjozMToyNCswODowMFaDvK4AAAAZdEVYdFNvZnR3YXJlAEFkb2JlIEltYWdlUmVhZHlxyWU8AAAAAElFTkSuQmCC";
	container.appendChild(img);
}

// 检测是否为莆田医院
// @param url 可以为字符串，如"湖北省荣军医院"，也可以为url，如"hbsrjyy.com".
function __isBlackHospital(url) {
	url = url.trim();
	//var ret = BlackHospital.isBlackHospital(url);
	var ret = true;
	if (ret) {
		console.log(url + " is black hospital!!");
	} else {
		console.log(url);
	}
	return ret;
}

// 处理桌面版百度搜索
function __deal_with_baidu_mobile() {
	if (document.domain != "www.baidu.com") return;
	var results_container = document.getElementById("content_left");
	if (results_container != null) {
		var results = results_container.getElementsByClassName("c-container");
		for (var i=0; i<results.length; i++) {
			var showurl_anchors = results[i].getElementsByClassName("c-showurl");
			if (showurl_anchors.length > 0) {
				var url = showurl_anchors[0].innerText;
				if (url != null && __isBlackHospital(url)) {
					__addPuTianTag(showurl_anchors[0].parentElement, 0);
				}
			}
		}
	}
}

