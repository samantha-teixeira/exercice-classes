class Formation
{
    intitule;
    listeStagiaires= new Array();
    dateDebut;
    dateFin;


constructor(intitule,dateDebut,dateFin)
{
    this.intitule = intitule;
    this.dateDebut = dateDebut;
    this.dateFin = dateFin;
}

ajouterStagiaire(stagiaire)
{
    this.listeStagiaires.push(stagiaire);
}
}

