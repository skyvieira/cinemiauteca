import React from "react";
import { DiscussionEmbed } from "disqus-react";

export default function Comments({ id }) {
    const disqusConfig = {
        shortname: "cinemiauteca-1",
        config: { identifier: `${id}`, title: `Discussion` }
    };

    return (
        <section>
            <div id="disqus_thread">
                <DiscussionEmbed {...disqusConfig} />
            </div>
        </section>
    );
}
