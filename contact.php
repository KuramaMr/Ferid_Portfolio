<?php

mail("takenzmr@gmail.com", "Demande de contact", $_POST['message'], "From: " . $_POST['email']);
if($retour) {
    echo "Message envoyé !";
}