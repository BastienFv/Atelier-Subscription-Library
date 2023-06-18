# Atelier-Subscription-Library

# Objectifs:

- Créer des fonctions "constructeur"
- Utiliser les prototypes
- Configurer des propriétés
- Créer des proxy
 

# Sujet: 

Dans cet atelier, vous allez développer une bibliothèque permettant de gérer des abonnements.

 

# Constructeur, configuration et prototype: 

Pour commencer, développez un constructeur Subscription(), son prototype et ses configurations de propriétés, afin de créer des objets "abonnements" composés de la manière suivante:

- id (non modifiable, non énumérable, non configurable)
- nom de la formule
- prix annuel (non enumérable)
- prix mensuel (calculé automatiquement, modifier le prix mensuel entraine automatiquement la modification du prix annuel)
- date de début de l'abonnement (non modifiable, non configurable)
- durée de l'engagment (en mois, par défaut 12 mois)
- date de fin de l'engagement (calculée automatiquement, non modifiable directement)
- mentions légales de l'abonnement (identique pour tous les abonnements)
- statut de l'abonnement (actif ou expiré)
- date de fin effective (par défaut, 20/01/2100)

Pensez à tester vos objets avec des valeurs "en dur" puis à supprimer vos tests pour ne garder que le constructeur, le prototype et les configurations de propriétés.

 

# Proxy: 

Maintenant, créez un proxy permettant de vous assurer du respect des contraintes suivantes lors de la manipulation des objets "abonnement" :

- Les prix s'affichent toujours suivi du symbole € avec 2 décimales
- Si l'abonnement est inactif, seuls le nom et la date de fin doivent pouvoir être lus.
- Les mentions légales doivent être précédées de la mention "MENTIONS LEGALES SUJETTES A MODIFICATION: "
- Les prix doivent être positifs (à verifier lors de la modification des prix)
- Le prix annuel doit toujours être supérieur à 200€ (à verifier lors de la modification des prix)
- Le nom de la formule doit être composé de minimum 12 caractères. Lors de l'enregistrement, ajouter la mention "Offre : " devant le nom.

Pensez à tester vos proxy avec des valeurs "en dur" puis à supprimer vos tests pour ne garder que le proxy.

 

# Fonction de création: 

Vous pouvez maintenant intégrer votre code dans un fonction createSubscription() :

- prenant en paramètre toutes les valeurs nécessaires
- créeant un nouvel objet "abonnement" à l'aide du constructeur Subcription() précédement développer
- configurant ses propriétés à l'aide du code précédement écrit
- créant un proxy à partir de l'objet abonnement
- retournant ce proxy

Vous pouvez maintenant tester votre fonction en créant plusieurs abonnement et en testant leur fonctionnalités (modifiez, affichez, supprimez des valeurs).