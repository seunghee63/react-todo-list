//import React from 'react';
import React, { Component } from 'react';
import './Palette.css';

class Palette extends Component {
    render(){
        const {colors, textColor} = this.props;
        const colorList = colors.map((colors) => (
            <div className='color' style={{background:colors.color}} key={colors.id} 
            onClick={() => textColor(colors.color)}></div>))

        return(
            <div className = "palette">
                {colorList}
            </div>
        );
    };
};

// const Palette = ({colors})=> {

//     //const {colors} = this.props;
//     const colorList = colors.map((color) => (
//         <div className='color' style={{background:color}} ></div>))

//     return(
//         <div className = "palette">
//             {colorList}
//         </div>
//     );
// }

export default Palette;