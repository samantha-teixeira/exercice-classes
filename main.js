let stagiaire1 = new Stagiaire("Samantha", "Teixeira", "4 rue du coq");

let stagiaire2 = new Stagiaire("Yanis", "Herda", "2 rue lion");

let stagiaires = [stagiaire1, stagiaire2];

console.log(stagiaires[0].salutation());

console.log(stagiaires);

let formation1 = new Formation("DWWM", new Date(2022, 8, 20), new Date(2023, 3, 17));
formation1.ajouterStagiaire(stagiaire1);
formation1.ajouterStagiaire(stagiaire2);
formation1.ajouterStagiaire(new Stagiaire("Lucette", "Anderson", "2 rue du chat"));
formation1.ajouterStagiaire(new Stagiaire("Martin", "Luther", "1 rue du poney"));
console.log(formation1);


let boutonEnregistrer = document.querySelector("#btnenregistrer");
boutonEnregistrer.addEventListener('click', creerFormation);
var formation;

function creerFormation() 
{
    let intitule = document.querySelector("#nomformation").value;
    let dateDebut = document.querySelector("#datedebut").value;
    let dateFin = document.querySelector("#datefin").value;
    formation = new Formation(intitule, new Date(dateDebut), new Date(dateFin));
    console.log(formation)

    let formulaireStagiaire = document.querySelector("#formulaireStagiaire")
    formulaireStagiaire.style.display= "block";

    console.log(formation.intitule)
    let choixformation = document.querySelector("#formation");
    choixformation.innerHTML += `<option value="${formation.intitule}" id="${formation.intitule}">${formation.intitule}</option>`;
}

let boutonAjouter = document.querySelector("#btnajouter");
boutonAjouter.addEventListener('click', ajouterStagiaire);
let stagiaire;

function ajouterStagiaire()
{
    let nom = document.querySelector("#nom").value;
    let prenom = document.querySelector("#prenom").value;
    let adresse = document.querySelector("#adresse").value;
    stagiaire = new Stagiaire(nom,prenom,adresse);
    formation.ajouterStagiaire(new Stagiaire(nom,prenom,adresse));
}

let boutonAfficher = document.querySelector("#btnafficher");
boutonAfficher.addEventListener('click', afficherFormation);

function afficherFormation() 
{
    var affichage = document.querySelector(".affichage");
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    affichage.innerHTML = `la formation ${formation.intitule} 
    commencera le ${formation.dateDebut.toLocaleDateString('fr-FR', options)} 
    et se terminera le ${formation.dateFin.toLocaleDateString('fr-FR', options)}`; 
}
