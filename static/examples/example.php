<?php
	$flash_version = !empty($flash_version) ? $flash_version : "19.0.0";
	$swf_width = !empty($swf_width) ? $swf_width : 960;
	$swf_height = !empty($swf_height) ? $swf_height : 640;
	$swf_wmode = !empty($swf_wmode) ? $swf_wmode : "direct";
	$swf_bgcolor = !empty($swf_bgcolor) ? $swf_bgcolor : "#4a4137";
?><!doctype html>
<html>
<head>
	<meta charset="UTF-8">
	<title><?php echo $example_name; ?> - Examples - Feathers UI Components for Starling Framework</title>
	<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE10">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description" content="">
	<meta name="author" content="Josh Tynjala">
	<link rel="stylesheet" type="text/css" href="../css/examples.css">
	<script type="text/javascript" src="/examples/swfobject.js"></script>
	<!-- <script type="text/javascript" src="/examples/ruffle/ruffle.js"></script> -->
	<script type="text/javascript">
		swfobject.registerObject("example", "<?php echo $flash_version; ?>", "/examples/expressInstall.swf");
	</script>
</head>
<body>
	<div>	
		<object id="example" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="<?php echo $swf_width; ?>" height="<?php echo $swf_height; ?>">
			<param name="movie" value="<?php echo $swf_url; ?>" />
			<param name="wmode" value="<?php echo $swf_wmode; ?>" />
			<param name="bgcolor" value="<?php echo $swf_bgcolor; ?>" />
			<!--[if !IE]>-->
			<object type="application/x-shockwave-flash" data="<?php echo $swf_url; ?>" wmode="<?php echo $swf_wmode; ?>" bgcolor="<?php echo $swf_bgcolor; ?>" width="<?php echo $swf_width; ?>" height="<?php echo $swf_height; ?>">
			<!--<![endif]-->
			<div>
				<h1><?php echo $example_name; ?> Example for Feathers</h1>
				<p>Please <a href="http://www.adobe.com/go/getflashplayer">activate Adobe Flash Player</a> to view this Feathers example.</p>
			</div>
			<!--[if !IE]>-->
			</object>
			<!--<![endif]-->
		</object>
		<p>Built with <a href="/">Feathers</a>, a UI component library for <a href="http://starling-framework.org/">Starling Framework</a>.</p>
	</div>
</body>
</html>