<?php
	require_once('config.php');

	$dsn= "pgsql:host=db;port=5432;dbname=$db;";
	
	try {
		$pdo = new PDO($dsn, $user, $password, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

		if ($pdo) {
			echo "Connected to $db database";
		}
	}
	catch(PDOException $e) {
		die('db failed ' . $e->getMessage());
	}

?>
