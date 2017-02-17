// 定义一个用于创建Ajax核心对象的函数
function getXHR(){
		// 定义一个变量xhr，表示核心对象
		var xhr;

		if(window.XMLHttpRequest){
			// 其他浏览器
			xhr = new XMLHttpRequest();
		}else{
			// IE
			xhr = new ActiveXObject('Microsoft.XMLHttp');
		}

		return xhr;
}

// 创建解析XML的解析器内容，返回可以解析的内容
function getXmlDoc(xml){
	var xmlDoc;
	if(window.DOMParser){
		// 其他浏览器
		var parser=new DOMParser();
		xmlDoc = parser.parseFromString(xml,"application/xml");
	}else{
		// IE浏览器
		var parser = new ActiveXObject("Microsoft.XMLDOM");
		parser.async = false;
		xmlDoc = parser.loadXML(xml);
	}
	return xmlDoc;
}