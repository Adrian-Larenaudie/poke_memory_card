### En tant qu'utilisateur

| **je veux pouvoir:** | **Afin de si (besoin/necessaire):** |
|--|--|
|Accéder à l'accueil| Pour pouvoir lancer le jeu à l'aide d'un boutton|
|Voir les cartes du jeu face cachée|--|
|Avoir deux actions possible par tour de jeu:|--|  
|1ere action: Cliquer sur n'importe laquelle des cartes|pour la retourner|
|2eme action: Cliquer sur n'importe laquelle des autres cartes|pour la retourner|
|Si les deux cartes sont identiques:|--|  
|- Marquer un point|--|
|- Laisser les cartes identiques visibles|--|
|Si les deux cartes ne sont pas identiques:|--| 
|- Perdre un point|--|
|- Retourner face cachée les deux cartes|pour retenter ma chance|
|Lorsque toutes les combinaisons de carte sont révélées voir mon score dans une modal:|--|
|Si mon score est positif avoir une animation dédiée à ma victiore|--| 
|Si mon score est négatif avoir une animation d'encouragement à retenter une partie|--| 

**Descriptif du fonctionnemant de base du code:**
- Afficher l'accueil et son boutton démarrer le jeu
- Au click sur démarer une animation de chargement est affiché:
  - une barre de chargement
  - un petit avatar avec un texte dans une bulle qui défile 
- Une fois la chargement terminé afficher le plateau de jeu:
    - injection des cartes aléatoirement et face cachée
- Chacune des carte est cliquable: 
- Lors du click sur une des carte elle est révélée et n'est plus cliquable
- Lors du click sur une seconde carte elle est révélée et plus aucune carte n'est cliquable
- Si les deux cartes sont identique:
  - Le score augmente de 1 point
  - Les deux cartes restent révélées
  - Les autres cartes sont à nouveau cliquables
- Si les deux cartes ne sont pas identique:
  - Le score décrémente de 1 point
  - Les deux cartes sont retournées face cachée
  - Les cartes face cachée sont à nouveau cliquables
- Si toutes les cartes sont révélées:
  - le jeu s'arrête
  - Le score est affiché
    - Si le score est positif:
      - Une bte modale de succès apparait pour féliciter l'utilisateur
    - Si le score est négatif:
      - Une bte modale d'encouragement à retenter une partie apparait
Pendant la partie:
- le score est affiché à l'utilisateur
- si il y a eu une précédante partie le meilleure score parmis les précédentes parties est affiché


