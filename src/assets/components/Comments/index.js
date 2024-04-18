import React from "react";

//Disqus
import { DiscussionEmbed } from "disqus-react";

//Styles
import * as S from "./styles";

export default function Comments({ id }) {
    const disqusConfig = {
        shortname: "cinemiauteca-1",
        config: { identifier: `${id}`, title: `Discussion`, language: "pt_BR", showMedia: true}
    };

    return (
        <S.CommentsWrapper>
            <div id="disqus_thread">
                <DiscussionEmbed {...disqusConfig} />
            </div>
        </S.CommentsWrapper>
    );
}
