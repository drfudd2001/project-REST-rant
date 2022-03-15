const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: Page not found</h1>
                <div>
                    <p>Oops, sorry we can't find this page!</p>
                </div>
                <div>
                    <img src="../images/404-error.jpg" alt="Councelor from Soul" />
                </div>
                <div>
                    Image from <a href="https://d23.com/meet-the-characters-of-disney-and-pixars-soul/"> Disney and Pixar's Soul. </a>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404 