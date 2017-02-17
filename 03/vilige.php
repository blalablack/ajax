<?php
	$city=$_REQUEST["city"];
	$viliges = "";
	if($city=="日照市"){
		$viliges = "五莲县,莒县,岚山县";
	}else if($city=="沈阳市"){
		$viliges = "沈阳1,沈阳2,沈阳3";
	}else if($city=="青岛市"){
		$viliges = "市南区,市北区,崂山区";
	}
	echo $viliges;
?>