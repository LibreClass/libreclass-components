(function($) {
    /**
     * Greek language package
     * Translated by @pRieStaKos
     */
    FormValidator.I18n = $.extend(true, FormValidator.I18n, {
        'gr_EL': {
            base64: {
                'default': 'Παρακαλώ εισάγετε μια έγκυρη κωδικοποίηση base 64'
            },
            between: {
                'default': 'Παρακαλώ εισάγετε μια τιμή μεταξύ %s και %s',
                notInclusive: 'Παρακαλώ εισάγετε μια τιμή μεταξύ %s και %s αυστηρά'
            },
            bic: {
                'default': 'Παρακαλώ εισάγετε έναν έγκυρο αριθμό BIC'
            },
            callback: {
                'default': 'Παρακαλώ εισάγετε μια έγκυρη τιμή'
            },
            choice: {
                'default': 'Παρακαλώ εισάγετε μια έγκυρη τιμή',
                less: 'Παρακαλώ επιλέξτε %s επιλογές στο ελάχιστο',
                more: 'Παρακαλώ επιλέξτε %s επιλογές στο μέγιστο',
                between: 'Παρακαλώ επιλέξτε %s - %s επιλογές'
            },
            color: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο χρώμα'
            },
            creditCard: {
                'default': 'Παρακαλώ εισάγετε έναν έγκυρο αριθμό πιστωτικής κάρτας'
            },
            cusip: {
                'default': 'Παρακαλώ εισάγετε έναν έγκυρο αριθμό CUSIP'
            },
            cvv: {
                'default': 'Παρακαλώ εισάγετε έναν έγκυρο αριθμό CVV'
            },
            date: {
                'default': 'Παρακαλώ εισάγετε μια έγκυρη ημερομηνία',
                min: 'Παρακαλώ εισάγετε ημερομηνία μετά από %s',
                max: 'Παρακαλώ εισάγετε ημερομηνία πριν από %s',
                range: 'Παρακαλώ εισάγετε ημερομηνία μεταξύ %s - %s'
            },
            different: {
                'default': 'Παρακαλώ εισάγετε μια διαφορετική τιμή'
            },
            digits: {
                'default': 'Παρακαλώ εισάγετε μόνο ψηφία'
            },
            ean: {
                'default': 'Παρακαλώ εισάγετε έναν έγκυρο αριθμό EAN'
            },
            ein: {
                'default': 'Παρακαλώ εισάγετε έναν έγκυρο αριθμό EIN'
            },
            emailAddress: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο email'
            },
            file: {
                'default': 'Παρακαλώ επιλέξτε ένα έγκυρο αρχείο'
            },
            greaterThan: {
                'default': 'Παρακαλώ εισάγετε μια τιμή μεγαλύτερη ή ίση με %s',
                notInclusive: 'Παρακαλώ εισάγετε μια τιμή μεγαλύτερη από %s'
            },
            grid: {
                'default': 'Παρακαλώ εισάγετε έναν έγκυρο αριθμό GRId'
            },
            hex: {
                'default': 'Παρακαλώ εισάγετε έναν έγκυρο δεκαεξαδικό αριθμό'
            },
            iban: {
                'default': 'Παρακαλώ εισάγετε έναν έγκυρο αριθμό IBAN',
                countryNotSupported: 'Ο κωδικός χώρας %s δεν υποστηρίζεται',
                country: 'Παρακαλώ εισάγετε έναν έγκυρο αριθμό IBAN στην %s',
                countries: {
                    AD: 'Ανδόρα',
                    AE: 'Ηνωμένα Αραβικά Εμιράτα',
                    AL: 'Αλβανία',
                    AO: 'Αγκόλα',
                    AT: 'Αυστρία',
                    AZ: 'Αζερμπαϊτζάν',
                    BA: 'Βοσνία και Ερζεγοβίνη',
                    BE: 'Βέλγιο',
                    BF: 'Μπουρκίνα Φάσο',
                    BG: 'Βουλγαρία',
                    BH: 'Μπαχρέιν',
                    BI: 'Μπουρούντι',
                    BJ: 'Μπενίν',
                    BR: 'Βραζιλία',
                    CH: 'Ελβετία',
                    CI: 'Ακτή Ελεφαντοστού',
                    CM: 'Καμερούν',
                    CR: 'Κόστα Ρίκα',
                    CV: 'Cape Verde',
                    CY: 'Κύπρος',
                    CZ: 'Δημοκρατία της Τσεχίας',
                    DE: 'Γερμανία',
                    DK: 'Δανία',
                    DO: 'Δομινικανή Δημοκρατία',
                    DZ: 'Αλγερία',
                    EE: 'Εσθονία',
                    ES: 'Ισπανία',
                    FI: 'Φινλανδία',
                    FO: 'Νησιά Φερόε',
                    FR: 'Γαλλία',
                    GB: 'Ηνωμένο Βασίλειο',
                    GE: 'Γεωργία',
                    GI: 'Γιβραλτάρ',
                    GL: 'Γροιλανδία',
                    GR: 'Ελλάδα',
                    GT: 'Γουατεμάλα',
                    HR: 'Κροατία',
                    HU: 'Ουγγαρία',
                    IE: 'Ιρλανδία',
                    IL: 'Ισραήλ',
                    IR: 'Ιράν',
                    IS: 'Ισλανδία',
                    IT: 'Ιταλία',
                    JO: 'Ιορδανία',
                    KW: 'Κουβέιτ',
                    KZ: 'Καζακστάν',
                    LB: 'Λίβανος',
                    LI: 'Λιχτενστάιν',
                    LT: 'Λιθουανία',
                    LU: 'Λουξεμβούργο',
                    LV: 'Λετονία',
                    MC: 'Μονακό',
                    MD: 'Μολδαβία',
                    ME: 'Μαυροβούνιο',
                    MG: 'Μαδαγασκάρη',
                    MK: 'πΓΔΜ',
                    ML: 'Μάλι',
                    MR: 'Μαυριτανία',
                    MT: 'Μάλτα',
                    MU: 'Μαυρίκιος',
                    MZ: 'Μοζαμβίκη',
                    NL: 'Ολλανδία',
                    NO: 'Νορβηγία',
                    PK: 'Πακιστάν',
                    PL: 'Πολωνία',
                    PS: 'Παλαιστίνη',
                    PT: 'Πορτογαλία',
                    QA: 'Κατάρ',
                    RO: 'Ρουμανία',
                    RS: 'Σερβία',
                    SA: 'Σαουδική Αραβία',
                    SE: 'Σουηδία',
                    SI: 'Σλοβενία',
                    SK: 'Σλοβακία',
                    SM: 'Σαν Μαρίνο',
                    SN: 'Σενεγάλη',
                    TN: 'Τυνησία',
                    TR: 'Τουρκία',
                    VG: 'Βρετανικές Παρθένοι Νήσοι'
                }
            },
            id: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό ταυτότητας',
                countryNotSupported: 'Ο κωδικός χώρας %s δεν υποστηρίζεται',
                country: 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό ταυτότητας στην %s',
                countries: {
                    BA: 'Βοσνία και Ερζεγοβίνη',
                    BG: 'Βουλγαρία',
                    BR: 'Βραζιλία',
                    CH: 'Ελβετία',
                    CL: 'Χιλή',
                    CN: 'Κίνα',
                    CZ: 'Δημοκρατία της Τσεχίας',
                    DK: 'Δανία',
                    EE: 'Εσθονία',
                    ES: 'Ισπανία',
                    FI: 'Φινλανδία',
                    HR: 'Κροατία',
                    IE: 'Ιρλανδία',
                    IS: 'Ισλανδία',
                    LT: 'Λιθουανία',
                    LV: 'Λετονία',
                    ME: 'Μαυροβούνιο',
                    MK: 'Μακεδονία',
                    NL: 'Ολλανδία',
                    RO: 'Ρουμανία',
                    RS: 'Σερβία',
                    SE: 'Σουηδία',
                    SI: 'Σλοβενία',
                    SK: 'Σλοβακία',
                    SM: 'Σαν Μαρίνο',
                    TH: 'Ταϊλάνδη',
                    ZA: 'Νότια Αφρική'
                }
            },
            identical: {
                'default': 'Παρακαλώ εισάγετε την ίδια τιμή'
            },
            imei: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό IMEI'
            },
            imo: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό IMO'
            },
            integer: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό'
            },
            ip: {
                'default': 'Παρακαλώ εισάγετε μία έγκυρη IP διεύθυνση',
                ipv4: 'Παρακαλώ εισάγετε μία έγκυρη διεύθυνση IPv4',
                ipv6: 'Παρακαλώ εισάγετε μία έγκυρη διεύθυνση IPv6'
            },
            isbn: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό ISBN'
            },
            isin: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό ISIN'
            },
            ismn: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό ISMN'
            },
            issn: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό ISSN'
            },
            lessThan: {
                'default': 'Παρακαλώ εισάγετε μια τιμή μικρότερη ή ίση με %s',
                notInclusive: 'Παρακαλώ εισάγετε μια τιμή μικρότερη από %s'
            },
            mac: {
                'default': 'Παρακαλώ εισάγετε μία έγκυρη MAC διεύθυνση'
            },
            meid: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό MEID'
            },
            notEmpty: {
                'default': 'Παρακαλώ εισάγετε μια τιμή'
            },
            numeric: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο δεκαδικό αριθμό'
            },
            phone: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό τηλεφώνου',
                countryNotSupported: 'Ο κωδικός χώρας %s δεν υποστηρίζεται',
                country: 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό τηλεφώνου στην %s',
                countries: {
                    AE: 'Ηνωμένα Αραβικά Εμιράτα',
                    BR: 'Βραζιλία',
                    CN: 'Κίνα',
                    CZ: 'Δημοκρατία της Τσεχίας',
                    DE: 'Γερμανία',
                    DK: 'Δανία',
                    ES: 'Ισπανία',
                    FR: 'Γαλλία',
                    GB: 'Ηνωμένο Βασίλειο',
                    MA: 'Μαρόκο',
                    PK: 'Πακιστάν',
                    RO: 'Ρουμανία',
                    RU: 'Ρωσία',
                    SK: 'Σλοβακία',
                    TH: 'Ταϊλάνδη',
                    US: 'ΗΠΑ',
                    VE: 'Βενεζουέλα'
                }
            },
            regexp: {
                'default': 'Παρακαλώ εισάγετε μια τιμή όπου ταιριάζει στο υπόδειγμα'
            },
            remote: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό'
            },
            rtn: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό RTN'
            },
            sedol: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό SEDOL'
            },
            siren: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό SIREN'
            },
            siret: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό SIRET'
            },
            step: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο βήμα από %s'
            },
            stringCase: {
                'default': 'Παρακαλώ εισάγετε μόνο πεζούς χαρακτήρες',
                upper: 'Παρακαλώ εισάγετε μόνο κεφαλαία γράμματα'
            },
            stringLength: {
                'default': 'Παρακαλώ εισάγετε μια τιμή με έγκυρο μήκος',
                less: 'Παρακαλούμε εισάγετε λιγότερο από %s χαρακτήρες',
                more: 'Παρακαλούμε εισάγετε περισσότερο από %s χαρακτήρες',
                between: 'Παρακαλούμε, εισάγετε τιμή μεταξύ %s και %s μήκος χαρακτήρων'
            },
            uri: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο URI'
            },
            uuid: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό UUID',
                version: 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό έκδοσης %s'
            },
            vat: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό ΦΠΑ',
                countryNotSupported: 'Ο κωδικός χώρας %s δεν υποστηρίζεται',
                country: 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό ΦΠΑ στην %s',
                countries: {
                    AT: 'Αυστρία',
                    BE: 'Βέλγιο',
                    BG: 'Βουλγαρία',
                    BR: 'Βραζιλία',
                    CH: 'Ελβετία',
                    CY: 'Κύπρος',
                    CZ: 'Δημοκρατία της Τσεχίας',
                    DE: 'Γερμανία',
                    DK: 'Δανία',
                    EE: 'Εσθονία',
                    ES: 'Ισπανία',
                    FI: 'Φινλανδία',
                    FR: 'Γαλλία',
                    GB: 'Ηνωμένο Βασίλειο',
                    GR: 'Ελλάδα',
                    EL: 'Ελλάδα',
                    HU: 'Ουγγαρία',
                    HR: 'Κροατία',
                    IE: 'Ιρλανδία',
                    IS: 'Ισλανδία',
                    IT: 'Ιταλία',
                    LT: 'Λιθουανία',
                    LU: 'Λουξεμβούργο',
                    LV: 'Λετονία',
                    MT: 'Μάλτα',
                    NL: 'Ολλανδία',
                    NO: 'Νορβηγία',
                    PL: 'Πολωνία',
                    PT: 'Πορτογαλία',
                    RO: 'Ρουμανία',
                    RU: 'Ρωσία',
                    RS: 'Σερβία',
                    SE: 'Σουηδία',
                    SI: 'Σλοβενία',
                    SK: 'Σλοβακία',
                    VE: 'Βενεζουέλα',
                    ZA: 'Νότια Αφρική'
                }
            },
            vin: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο αριθμό VIN'
            },
            zipCode: {
                'default': 'Παρακαλώ εισάγετε ένα έγκυρο ταχυδρομικό κώδικα',
                countryNotSupported: 'Ο κωδικός χώρας %s δεν υποστηρίζεται',
                country: 'Παρακαλώ εισάγετε ένα έγκυρο ταχυδρομικό κώδικα στην %s',
                countries: {
                    AT: 'Αυστρία',
                    BR: 'Βραζιλία',
                    CA: 'Καναδάς',
                    CH: 'Ελβετία',
                    CZ: 'Δημοκρατία της Τσεχίας',
                    DE: 'Γερμανία',
                    DK: 'Δανία',
                    FR: 'Γαλλία',
                    GB: 'Ηνωμένο Βασίλειο',
                    IE: 'Ιρλανδία',
                    IT: 'Ιταλία',
                    MA: 'Μαρόκο',
                    NL: 'Ολλανδία',
                    PT: 'Πορτογαλία',
                    RO: 'Ρουμανία',
                    RU: 'Ρωσία',
                    SE: 'Σουηδία',
                    SG: 'Σιγκαπούρη',
                    SK: 'Σλοβακία',
                    US: 'ΗΠΑ'
                }
            }
        }
    });
}(jQuery));
