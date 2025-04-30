import React from "react";

import * as S from "./styles";

import ImageAppStore from "../../assets/btn-apple-store.svg";
import ImageGooglePlay from "../../assets/btn-google-play.svg";
import Arrow from "../../assets/arrow-explorer.svg";
import WomanImage from "../../assets/woman.png"

export default function SectionHero (){

    return (
        <S.Section>    
            <S.Container>
                <S.DivLeft>
                    <S.H1> Tenha seu banco na palma da mão</S.H1>
                    <S.P> Todas as operaçôes que você precisa em um só lugar. Simples, completo e feito para você.</S.P>

                    <S.DivButtons>
                        <S.Button>
                            <img src={ImageAppStore} alt="Imagem AppStore" />
                        </S.Button>
                        <S.Button>
                            <img src={ImageGooglePlay} alt="Imagem Google Play" />
                        </S.Button>
                    </S.DivButtons>

                    <S.ButtonExplorer>
                        <img src={Arrow} alt="Arrow Down" />
                        <S.Span>Continue explorando</S.Span>
                    </S.ButtonExplorer>
                </S.DivLeft>

                <S.ImageWoman src={WomanImage} alt="Woman" />

            </S.Container>
        </S.Section>
    );
}