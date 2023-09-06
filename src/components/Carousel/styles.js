import styled from "styled-components";

export const CarouselContainer = styled.section`
    width: 100%;
    height: 100%;

    .slick-prev {
        left: 1rem !important;

        &:before {
            content: "‹";
        }
    }

    .slick-next {
        &:before {
            content: "›";
        }
    }

    .slick-initialized .slick-slide {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
    }
`;

export const LeftArrow = styled.button`
    width: 5% !important;
    transition: .3s !important;
    cursor: pointer !important;
    z-index: 1 !important;
    opacity: 0 !important;
    position: absolute !important;
    padding-bottom: 1rem !important;
    top: 57% !important;
    
    &:before {
        opacity: 1 !important;
        font-size: 6rem !important;
        background: url('https://i.makeagif.com/media/6-26-2022/Kcv935.gif') no-repeat center/cover !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
    }

    &:hover,
    &:hover:before {
        opacity: 1 !important;
    }
`;

export const RightArrow = styled(LeftArrow)`   
    right: 1rem !important;
`;