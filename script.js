//BOUTON START//

const button = document.getElementById('start');
let flamme = document.querySelector('.flamme');
let tic = document.querySelector('.tic');
let tac = document.querySelector('.tac');
let debutclic = false;
let debutcompteur = false;

    //Recuperation de l'element html compteur//
    const affichagecompteur = document.querySelector('.compteur');

    //Fonction au clique sur bouton start animation flamme tic et tac//
        button.addEventListener('click', function(){
            if (!debutcompteur) {
            flamme.style.visibility = 'visible';
            tic.style.visibility = 'visible';
            tac.style.visibility = 'visible';
            affichagecompteur.style.visibility = 'visible';
            debutclic = true;
            console.log("bouton start cliqué");

//COMPTEUR DE 10S//

    let compteur = 10;//Declaration de la valeur du compteur//

    const interval = setInterval(function() {
        // Décrémenter le compteur
        compteur--;
        // Mettre à jour l'affichage du compteur
        affichagecompteur.textContent = compteur;
    
        // Si le compteur atteint 0, arrêter le compte à rebours
        if (compteur === 0) {
            clearInterval(interval);
            affichermodale();//appel de la fonction qui affiche la modale de fin de jeu//
            affichagecompteur.style.visibility = 'hidden';
        }
    }, 1000);

        debutcompteur = true;
        }
    });

//DETECTION AU CLIQUE SUR LA BOMBE//

        //Fonction qui detecte le nombre de clics sur la bombe//
            let clicssurbombe = document.querySelector('.bombe');
            let nombredeclics = 0
                clicssurbombe.addEventListener('click', function() {
                    if (debutclic) {
                    nombredeclics++;
                    console.log(nombredeclics, 'bombecliquee');
                    
                    //Condition au nombre de clics//
                        if (nombredeclics > 20) {
                            console.log('Bravo la bombe est eteinte');
                        } else {
                            console.log('BOOM !');
                        }
                    }else{
                        console.log('Cliquez sur le bouton start pour commencer le jeu');
                    }
                });

//MODALE FIN DE PARTIE//
let popmodale = document.querySelector('.explosion');
                //Fonction pour afficher la modale//
                function affichermodale() {
                    popmodale.style.visibility = 'visible';
                }




//Faire deux modale, une qui apparait lorsque la conduition des 20 clics n'est pas ok et une quand c'est gagné//
//lien entre compteur et nombre de clics comme condition de win//
//Ajout d'un son tic tac//
