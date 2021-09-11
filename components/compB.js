

export default function CompB({ children }) {

    let dojstest = function() {
        console.log("CompB - function");
    }
    


    return (

        <div>
            <h2>Component B</h2>
            <button>Trigger CompA function</button>
        </div>
        
    )
}