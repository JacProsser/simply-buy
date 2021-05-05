<?php 
if(isset($_POST['submit'])){
    $to = "jacprxsser@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Contact Form Submission";
    $message = $name . "'s" . " " . "contact form contents:" . "\n\n" . "Message" . "\n" . $_POST['message'] . "\n\n" . "Email" . "\n" . $_POST['email'];
    $headers .= "From: Portfolio <contact@portfolio.com> \r\n";
    mail($to,$subject,$message,$headers);

}
header('Location: thankyou')


?>