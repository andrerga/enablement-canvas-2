import Head from "next/head";
import styles from "../styles/Home.module.css";
// LESSON 7 - ACTIVITY 4 - START
import {CANVAS_DRAFT_STATE, CANVAS_PUBLISHED_STATE, CanvasClient,} from "@uniformdev/canvas";
// LESSON 7 - ACTIVITY 4 - END
import {Composition, Slot} from "@uniformdev/canvas-react";
import resolveRenderer from "../lib/resolveRenderer";

import { useLivePreviewNextStaticProps } from "../hooks/useLivePreviewNextStaticProps";
import getConfig from "next/config";

// LESSON 7 - ACTIVITY 4 - START
export async function getStaticProps({preview}) {
    // LESSON 7 - ACTIVITY 4 - END
    const client = new CanvasClient({
        apiKey: process.env.UNIFORM_API_KEY,
        projectId: process.env.UNIFORM_PROJECT_ID,
    });
    const {composition} = await client.getCompositionBySlug({
        slug: "/",
        // LESSON 7 - ACTIVITY 4 - START
        state: preview ? CANVAS_DRAFT_STATE : CANVAS_PUBLISHED_STATE,
        // LESSON 7 - ACTIVITY 4 - END
    });

    console.log(JSON.stringify(composition, null, 4));

    return {
        props: {
            composition,
        },
    };
}

const { publicRuntimeConfig } = getConfig();
const { uniform } = publicRuntimeConfig;

export default function Home({composition}) {
    useLivePreviewNextStaticProps({
        compositionId: composition?._id,
        projectId: uniform.projectId,
    });

    return (
        <Composition data={composition} resolveRenderer={resolveRenderer}>
            <div className={styles.container}>
                <Head>
                    <title>{composition.parameters.title?.value}</title>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>

                <main className={styles.main}>
                    <Slot name="header"/>

                    <Slot name="body"/>
                </main>

                <footer className={styles.footer}>
                    <Slot name="footer"/>
                </footer>
            </div>
        </Composition>
    );
}