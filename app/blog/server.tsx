import { fetchPages } from "@/lib/notion";
import { notFound } from "next/navigation";
import fs from 'fs';

export default async function ServerProjects() {
    const post = await fetchPages();
    if (!post) notFound();
    const jsonContent = {

        data: post.results
    }
    fs.writeFileSync('./tmp/projects.json', JSON.stringify(jsonContent, null, 2));
}