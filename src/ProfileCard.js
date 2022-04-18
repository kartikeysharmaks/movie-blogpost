import React from 'react'

const ProfileCard = ({ image, Title, Description, Rating }) => {
    return ( <
        div style = {
            { backgroundColor: 'white', margin: 30, borderRadius: 30 }
        } >
        <
        div style = {
            { display: 'flex', justifyContent: 'center', }
        } >
        <
        img src = { image }
        alt = ''
        style = {
            { height: 150, borderRadius: 30, padding: 10, }
        }
        / > <
        div > <
        h1 style = {
            { margin: 20 }
        } > { Title } < /h1>

        <
        h3 style = {
            { margin: 20 }
        } > { Rating } < /h3>  < /
        div >
        <
        /div> 

        <
        div style = {
            {
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center'
            }
        } > <
        h3 > { Description } < /h3> < /
        div > <
        /
        div >
    )
}

export default ProfileCard