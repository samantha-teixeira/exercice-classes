class Stagiaire
{
    nom;
    prenom;
    adresse;

    salutation()
{
    return `Je m'appelle ${this.nom} ${this.prenom}`;
}
constructor(prenom,nom,adresse)
{
    this.prenom = prenom;
    this.nom = nom.toUpperCase();
    this.adresse = adresse;
}
}

