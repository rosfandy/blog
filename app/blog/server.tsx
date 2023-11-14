// import Navbar from "@/components/Navbar";
import { fetchPages } from "@/lib/notion";
import { NotionRenderer } from "@notion-render/client";
import { notFound } from "next/navigation";
import fs from 'fs';

export default async function ServerProjects() {
    const post = await fetchPages();
    if (!post) notFound();
    const jsonContent = {

        data: post.results
    }
    fs.writeFileSync('./public/projects.json', JSON.stringify(jsonContent, null, 2));

}