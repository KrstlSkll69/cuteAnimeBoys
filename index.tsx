/*
 * Vencord, a Discord client mod
 * Copyright (c) 2022 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import "./style.css";

import { ApplicationCommandOptionType } from "@api/Commands";
import { Link } from "@components/Link";
import definePlugin from "@utils/types";
import { Forms } from "@webpack/common";

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function fetchReddit(sub: string) {
    const res = await fetch(`https://www.reddit.com/r/${sub}/top.json?limit=100&t=all`);
    const resp = await res.json();
    try {
        const { children } = resp.data;
        const r = rand(0, children.length - 1);
        return children[r].data.url;
    } catch (err) {
        console.error(resp);
        console.error(err);
    }
    return "";
}

export default definePlugin({
    name: "CuteAnimeBoys",
    authors: [
        { name: "Shady Goat", id: 376079696489742338n, },
        { name: "krystalskullofficial", id: 929208515883569182n },
    ],
    description: "Add a command to send cute anime boys in the chat.",
    settingsAboutComponent: () => <>
        <Forms.FormText className="vc-plugin-reddit-notice">
            Enabling this plugin allows reddit.com &
            <Link className="vc-linkHref" href="https://www.reddit.com/r/help/comments/z4qwb8/what_is_ireddit/"> i.redd.it </Link>
            to bypass Vencord's CSP restrictions.
        </Forms.FormText>
    </>,

    dependencies: ["CommandsAPI"],

    commands: [{
        name: "anime-boys",
        description: "Send cute anime boys",
        options: [
            {
                name: "cat",
                description: "If set, this will send exclusively cute anime cat boys",
                type: ApplicationCommandOptionType.BOOLEAN,
                required: true,
            },
        ],

        async execute(args) {
            let sub = "cuteanimeboys";
            // console.log(args);
            if (args.length > 0) {
                const v = args[0].value as any as boolean;
                if (v) {
                    sub = "animecatboys";
                }
            }

            // console.log(sub);

            return {
                content: await fetchReddit(sub),
            };
        },
    }]
});
