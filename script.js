function lire(){
    //recuperer le text de l'element textera
    let texte = document.getElementById("texte").value;
    //cree un objet de synthese vocal
    let syntheseVocale = window.speechSynthesis;
    let message = new SpeechSynthesisUtterance(texte);
    //selectionner la voix
    message.VoiceURI = 'native';
    message.lang='fr-FR';

    //lire le message
    syntheseVocale.speak(message);

}