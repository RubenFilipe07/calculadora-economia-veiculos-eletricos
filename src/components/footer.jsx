import React, { Component } from "react";
import './footer.css'


class Footer extends Component {

    render() {
        return (
            <footer className="text-center text-lg-start footer">
                <div className="text-center p-2">
                    Desenvolvido com <a className="react" href="https://reactjs.org/">React.js</a> por: <a className="github" href="https://github.com/rubenfilipe07">Rúben Filipe</a>
                </div>
            </footer>
        )

    }

}
export default Footer