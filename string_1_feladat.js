'use strict'

const johndoe = 
{
Firstname: 'John',
lastname: 'Doe'
};
const janedoe = 
{
Firstname: 'Jane',
lastname: 'Doe'  
};
const nagyjozsi={
    Firstname: 'Józsi',
    lastname: 'Nagy'
}
const objecteredeti=[johndoe, janedoe, nagyjozsi ]
const egybe= objecteredeti.map((item, index)=> ({item}));
 console.log(egybe);