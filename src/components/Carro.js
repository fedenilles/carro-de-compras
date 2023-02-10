import { Component } from "react";
import BubbleAlert from "./BubbleAlert";

const styles = {
    carro : {
        backgroundColor: '#359A2C',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
        fontWeight: '700',
        fontSize: '2rem',
    },
    bubble: {
        position: 'relative',
        left: 12,
        top: 20,
    }
}

class Carro extends Component {
    render() {
        return(
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert value = {11}/>
                </span>
                <button style={styles.carro}>
                    Carro
                </button>
            </div>
        )
    }
}

export default Carro