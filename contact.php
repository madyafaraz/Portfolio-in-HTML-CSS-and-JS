<?php
//if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['subject']) && isset($_POST['message'])) {
	
	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$msg = nl2br($_POST['message']);
	
	$to = "madyafaraz@gmail.com";
	$from = $email;
	
	$message = '<b>Name: </b>'.$name. '<br><b>Email: </b>'.$email.'<p>'.$msg.'</p>';
	$headers ="From: $from\n";
	$headers .="MIME-Version: 1.0\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\n";
	
	if(mail($to, $subject, $message, $headers)){
		echo "success";
	} else {
		echo "The server failed to send the message. Please try again later.";
	}
	
//}

//else {
	
	//echo "can not check fields";
//}

?>