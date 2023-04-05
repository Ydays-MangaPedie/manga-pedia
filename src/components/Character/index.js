import { useState, useEffect } from "react";
import './Character.css'


function Character({personnage}) {


    if (true) {
        return(
            
            <>
                <div className="box">
                    <div className="nowrap">
                        <div className="nameCharacter">

                            <h1 className="prenom">NARUTO</h1>
                            <h1 className="nom">UZUMAKI</h1>
                        </div>
                        <div className="resumeCharacter">
                            <h4>Sous-titre</h4>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Consequuntur aspernatur dignissimos, consequatur soluta ratione officiis
                                repellendus veniam voluptate aut totam quasi minima, quod, illum
                                quos aperiam rerum temporibus nobis. Deleniti. Étant fans de Manga (Papier ou animation 2D),
                                nous nous sommes rendus compte d’une chose, au delà de lire ou regarder un manga et
                                d’apprécier son histoire, beaucoup de détails sont délaissés ou s’oublient facilement.
                            </p>
                        </div>
                        <div className="capacityCharacter">
                            <div className="parel">
                                <h3 className="capacityTitle">CAPACITÉS</h3>
                                <ul className="ulCapacity">
                                    <li>Multiclonage</li>
                                    <li>Rasengan</li>
                                    <li>Chakra de Kyuubi</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="imageContainer">
                    <img className="middle" src="https://www.pngplay.com/wp-content/uploads/12/Naruto-Transparent-Images-1.png">
                    </img>
                </div>
                </div>
                
               
               
            </>  
        )
    }
}

export default Character;