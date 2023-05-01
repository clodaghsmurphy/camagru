<?php $var = 5;
	$hostname = $_ENV['HOSTNAME'];
	$password = $_ENV['POSTGRES_PASSWORD'];
	$user = $_ENV['POSTGRES_USER'];
	$db = $_ENV['POSTGRES_DB'];
	var_dump($hostname);
	var_dump($password);
	var_dump($db);
	var_dump($user);
?>