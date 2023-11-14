import { fetchPageBlocks, fetchPageBySlug, notion } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import fs from 'fs';
import axios from "axios";
import cheerio from 'cheerio';
import getNotionHTML from "../../renderHtml";

export default async function ServerComponent() {
    const post = await fetchPageBySlug("mysqlServer");
    if (!post) notFound();

    const imgUrl = post.properties.thumbnail.files[0].file.url;

    // Specify the directory path
    const directory = './public/mysqlServer/';

    try {
        // Check if the directory exists, create it if not
        if (!fs.existsSync(directory)) {
            fs.mkdirSync(directory, { recursive: true });
        }

        // Download the image
        const response = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        const imageData = Buffer.from(response.data, 'binary');

        // Save the image to a file
        fs.writeFileSync(directory + 'mysqlServer-thumbnail.jpg', imageData);
    } catch (error) {
        console.log(error);
    }

    const blocks = await fetchPageBlocks(post.id);
    const renderer = new NotionRenderer({
        client: notion,
    });

    const html = await renderer.render(...blocks);
    let combinedHTML = await getNotionHTML(blocks, renderer, directory);

    const jsonContent = [
        {
            content: combinedHTML,
            properties: post.properties
        }
    ];

    fs.writeFileSync(directory + 'mysqlServer.json', JSON.stringify(jsonContent, null, 2));
}
