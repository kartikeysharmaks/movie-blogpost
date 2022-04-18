import React from 'react'

const Header = () => {
    return ( <
        div >
        <
        header style = {
            { backgroundColor: 'grey', margin: 10, padding: 10, }
        } > <
        nav style = {
            {
                display: 'inline-block',
                justifyContent: "center"

            }
        } >
        <
        a href = 'https://lookmovie.world/'
        style = {
            { textDecoration: 'none', fontSize: 25, color: 'white', margin: 5, padding: 20 }
        } > Latest movies < /a>  <
        a href = 'https://lookmovie.world/'
        style = {
            { textDecoration: 'none', fontSize: 25, color: 'white', margin: 5, padding: 20 }
        } > Genres < /a> <
        a href = 'https://lookmovie.world/'
        style = {
            { textDecoration: 'none', fontSize: 25, color: 'white', margin: 5, padding: 20 }
        } > Movie of the Year < /a> <
        a href = 'https://lookmovie.world/'
        style = {
            { textDecoration: 'none', fontSize: 25, color: 'white', margin: 5, padding: 20 }
        } > Trending Movies < /a> <
        a href = 'https://lookmovie.world/'
        style = {
            { textDecoration: 'none', fontSize: 25, color: 'white', margin: 5, padding: 20 }
        } > Tv - Shows < /a> < /
        nav >
        <
        /
        header >
        <
        /
        div >
    )
};

export default Header