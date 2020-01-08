import React, { Component } from 'react'

import '../css/Who.css';


class Who extends Component {
    render() {
        return (
            this.props.page ?
                <div className="who">
                    <p>Δεν υπάρχουν πολλές λέξεις να περιγράψουν την πολυτέλεια του να έχεις κάποιον να σου μαγειρεύει ακριβώς ό,τι θες, ακριβώς όπως το θες και να στο φέρει εκεί ακριβώς που βρίσκεσαι. Εξαίσιο. Υπέροχο. Εξαιρετικό. Μάλλον υπάρχουν λέξεις τελικά. Είναι απλά απίστευτο. Αλήθεια είναι.</p>
                    <p>
                        Μπορεί να μην έχεις χρόνο να τρως κάθε μέρα σε φανταστικά εστιατόρια. Έχεις δουλειές, super market, ζωή. 
                        <strong>Εκεί κάπου έρχεται το efood και με τρεις μόνο κινήσεις μπορείς να έχεις στην πόρτα σου ό,τι ώρα θες το φαγητό που ονειρεύεσαι!</strong>
                    </p>
                    <p>Το να παραγγέλνεις από το τηλέφωνο δεν είναι και το καλύτερο σου και το καταλαβαίνουμε. Μπορεί να σου κόψει και την όρεξη αυτή η αναμονή. Το κακό σήμα στο κινητό. Ο άνθρωπος στην άλλη μεριά της γραμμής. Το φαγητό που θα έρθει και δεν θα είναι αυτό που ήθελες.</p>
                    <p>Με το efood αυτά μπορείς να τα ξεχάσεις. Εκατοντάδες εστιατόρια, χιλιάδες ευχαριστημένοι πελάτες και εκατοντάδες χιλιάδες παραγγελίες. Αλλά δεν μένουμε εκεί.</p>
                    <p>
                        Η συνεργασία μας με το «Μπορούμε»
                        <strong>(<a href="http://www.boroume.gr">www.boroume.gr</a>)</strong> 
                        και άλλους μη κερδοσκοπικούς οργανισμούς μας δίνει τη δυνατότητα να στηρίζουμε συμπολίτες μας που μας έχουν ανάγκη, παρέχοντας τους γεύματα καθημερινά.
                    </p>
                </div> 
            :  
                null        
        );
    }
}
export default Who;