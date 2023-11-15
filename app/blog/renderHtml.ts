import axios from "axios";
import cheerio from "cheerio";
import fs from "fs";

interface Renderer {
    render(el: any): Promise<string>; // Replace `any` with the actual type of `el` if known
}

const getNotionHTML = async (blocks: any[], renderer: Renderer, directory: String): Promise<string> => {
    let combinedHTML = '';

    for (let index = 0; index < blocks.length; index++) {
        const el = blocks[index];
        const html = await renderer.render(el);

        if (html.includes('<figure class="notion-image">')) {
            const $ = cheerio.load(html, { xmlMode: true });
            const imgSrc = $('figure.notion-image img').attr('src');

            if (imgSrc) {
                const path = `/${directory.split('/')[2]}`
                const newSrc = `/dataImg-${index}.jpg`; // Replace with your new URL
                console.log('path: ', path + newSrc)
                $('figure.notion-image img').attr('src', path + newSrc);

                try {
                    // Download the image
                    const response = await axios.get<ArrayBuffer>(imgSrc, { responseType: 'arraybuffer' });
                    const imageData = Buffer.from(response.data);

                    // Save the image to a file
                    fs.writeFileSync(directory + newSrc, imageData);
                } catch (error) {
                    console.log(error);
                }

                const modifiedHTML = $.html();
                combinedHTML += modifiedHTML;
            }
        } else {
            combinedHTML += html;
        }
    }

    return combinedHTML;
};

export default getNotionHTML;
