import React from "react";
import { DiscussionEmbed } from "disqus-react";
import "./styles.scss";

export default function Comments() {
    const disqusConfig = {
        shortname: "cinemiauteca-1",
        config: { identifier: window.location.pathname }
    };

    return (
        <section>
            <div id="disqus_thread">
                <DiscussionEmbed {...disqusConfig} />
            </div>
        </section>
    );
}
