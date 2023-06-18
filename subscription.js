// // Constructeur
// function Subscription(name, annualPrice, startDate, duration, endDate) {
//     this.name = name

//     if (duration !== undefined && duration !== null) {
//         if (typeof duration !== "number") {
//             throw Error("Duration must be a number");
//         };
//         this.duration = duration;
//     };

//     if (endDate !== undefined) {
        
//     }

//     Object.defineProperties(this, {
//         id: {
//             value: crypto.randomUUID()
//         },
//         annualPrice: {
//             configurable: true,
//             writable: true,
//             value: this.annualPrice = annualPrice
//         },
//         monthlyPrice: {
//             get() {
//                 this.annualPrice / 12;
//             },
//             set(value) {
//                 this.annualPrice = value * 12;
//             }
//         },
//         startDate: {
//             enumerable: true,
//             value: this.startDate = startDate
//         }
//     });
// }


// // Prototype
// Subscription.proptotype.duration = 12;
// Subscription.prototype.legalMention = "Subscription Library 2023";
// Subscription.prototype.endDate = new Date(20/01/2100);



// // Proxy
// const subscriptionProxy = new Proxy(this, {
//     get(obj, prop) {
//         if (prop === "annualPrice" || prop === "monthlyPrice") {
//             return obj[prop].toFixed(2) + " €";
//         };

//         if (prop === "legalMention") {
//             return "MENTIONS LEGALES SUJETTES A MODIFICATION: " + obj[prop];
//         };

//         if (prop === "name") {
//             if (obj[prop].length < 12) {
//                 throw Error(`${prop} must be 12 characters minimum`);
//             };
//             return "Offre : " + obj[prop];
//         };
//     },
//     set(obj, prop, val) {
//         if (prop === "annualPrice" || prop === "monthlyPrice") {
//             if (val < 0) {
//                 throw Error(`${prop} must be a positive number`);
//             };
//             return obj[prop];
//         };

//         if (prop === "annualPrice") {
//             if (val <= 200) {
//                 throw Error(`${prop} must be greater than 200.00 €`);
//             };
//             return obj[prop];
//         };
//     }
// });

const crypto = require('crypto');

/**
 * Fonction constructeur Subscription
 */

function Subscription (
    name, 
    duration,
    annualPrice, 
    startDate,
    endDate
) {
    this.name = String(name).trim();

    if (typeof duration !== "number") {
        throw new Error("Must be a positive number");
    };
    this.duration = duration;    

    // Descripteur de données
    Object.defineProperties(this, {
        id: {
            value: crypto.randomUUID()
        },
        annualPrice: {
            configurable: true,
            writable: true,
            value: this.annualPrice = annualPrice
        },
        monthlyPrice: {
            get () {
                return this.annualPrice / 12;
            },
            set (value) {
                this.annualPrice = value * 12;
            }
        },
        startDate: {
            enumerable: true,
            value: this.startDate = new Date(startDate)
        },
        endDate: {
            value: this.endDate = new Date(startDate)
        },
        status: {
            get () {
                return Date.now() < this.endDate;
            }
        }
    });
};

/**
 * Prototype 
 */

Subscription.prototype.duration = 12;
Subscription.prototype.legalMentions = "Tous droits réservés 2023";
Subscription.prototype.endDate = new Date('1995-12-17T03:24:00');

/**
 * Fonction pour créer une nouvelle souscription
 */

function createSubscription (name, status, duration, annualPrice, startDate, endDate) {

    const subscription = new Subscription(...arguments);

    /**
     * Création du proxy
     */

    return new Proxy(subscription, {
        get (obj, prop) {
            if (prop === "annualPrice" || prop === "monthlyPrice") {
                return obj[prop].toFixed(2) + " €";
            };

            if (prop === "legalMentions") {
                return `MENTIONS LEGALES SUJETTES A MODIFICATION: ${obj[prop]}`;
            };

            if (prop === "name" && obj[prop].length <= 12) {
                throw new Error(`${prop} must be 12 characters minimum`);
            };
            return `Offre : ${obj[prop]}`;
        },
        set (obj, prop, value) {
            if (prop === "annualPrice" | prop === "monthlyPrice") {
                if (value < 0) {
                    throw new Error(`${prop} must be a positive number`);
                };
            };

            if (prop === "annualPrice" && value < 200) {
                throw new Error(`${prop} must be greater than 200`);
            };

            Reflect.set(obj, prop, value);
        }
    });
};

const subscription1 = createSubscription ("ok", 10, 120, "2023-01-06", "2023-06-17");

/**
 * Tests
 */
console.log(subscription1);
subscription1.name = "Abonnement free";
console.log(subscription1.legalMentions);
console.log(subscription1.status);