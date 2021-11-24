import React from 'react'

class Map extends React.component {

render(){

return(
// implementation script qui importe google maps dans le site
let mapImportScript = React.createElement('script',
{src:'https://maps.googleapis.com/maps/api/js?key=mihotel'}
)
ReactDOM.render(mapImportScript,document.getElementById('body'))
)
}
