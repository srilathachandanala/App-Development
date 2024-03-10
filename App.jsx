import './App.css';
import { Card } from '../card/card';
import imagel from 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepRXgxPg6dlSUpuxqhwq4OKB7Q14gFpYYu1LXvaCAfg&s'
import image2 from 'https://5.imimg.com/data5/ANDROID/Default/2021/1/VC/SF/FL/29603120/product-jpeg-500x500.jpg'
import image3 from 'https://images.meesho.com/images/products/311724786/pvoqo_512.jpg'
import image4 from 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcToSpjzxOTF798NQOnJ2BMxECi0C_KGDG9lW1CakEGn0EVCAVUeCBoLimIcFKftf6BxBg-T3EWucS_RgPYeuKikhsOcefeGHzgfzi42IfNbkLCS3mTvLI6oaA'
import images from 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRr_3uHi8TaSY3Y0r8CGHGrFmLVReDQxZpeQHAYa-i6nAgK31qG9jqiq417My4n2fXMn9Lcs8grGV6vNPmlFCo6K-KFJu77ToKhrmDNxrSo'
import images from 'https://4.imimg.com/data4/EX/QR/MY-25863481/deededed.jpeg'
function App() {
const cards = [
    {
        url:imagel,
        title: "cocktail dress",
        description: "The definition of a supercar describes an expensive car that's flashy,"

    },
    {
        url:image2,
        title: "Wrap around dress",
        description: "The definition of a supercar describes an expensive car that's flashy"
    },
    {
        url:image3,
        title: "Polo dress",
        description: "The definition of a supercar describes an expensive car that's flashy"

    },
    {
        url:image4,
        title: "Sheath dress",
        description: "The definition of a supercar describes an expensive car that's flashy"
    },
    {
        url:image5,
        title: "Trumpet dress",
        description: "The definition of a supercar describes an expensive car that's flashy"
    },
    {
        url:image6,
        title:"Tunic dres",
        description: "The definition of a supercar describes an expensive car that's flashy"
    },
]
return (
    <div className="app">
        {
            cards.map((card,index)=><Card key={index} card={card}/>)
        }
    </div>
);
    }

export default App;
    






