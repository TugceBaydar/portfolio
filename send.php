<?php

	if($_SERVER["REQUEST_METHOD"] == "POST") {

		$name = strip_tags(trim($_POST["name"]));
		$name = str_replace(array("\r", "\n"), array(" ", " "), $name);

		$email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);

		$message = trim($_POST["message"]);

		if(empty($inputname) OR empty($inputmessage) OR !filter_var($inputemail, FILTER_VALIDATE_EMAIL)) {
			header("HTTP/1.1 400 Bad Request");
			echo "Oops! There was a problem with your submission. Please complete the form and try again.";
			exit;
		}

		$recipient = "baydartech@gmail.com"; // this is my address for receiving emails

		$subject = "comtact Info";

		$email_content = "Name: $inputname\n";
		$email_content .= "Email: $inputemail\n\n";
		$email_content .= "Message: \n$inputmessage\n";

		$email_headers = "From: $inputname <$inputemail>";

		if(mail($recipient, $subject, $email_content, $email_headers)) {
			header("HTTP/1.1 200 OK");
			echo "Your message was sent successfully!";
		} else {
			header("HTTP/1.0 500 Internal Server Error");
			echo "Your message wasn\'t sent, please try again.";
		}

	} else {
		header("HTTP/1.1 403 Forbidden");
		echo "There was a ploblem with your submission, please try again.";
	}

?>
