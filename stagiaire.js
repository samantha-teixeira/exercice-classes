class Stagiaire
{
    nom;
    prenom;
    adresse;

    salutation()
{
    return `Je m'appelle ${this.nom} ${this.prenom}`;
}
constructor(nom,prenom,adresse)
{
    this.nom = nom;
    this.prenom = prenom;
    this.adresse = adresse;
}
}

