
import { NextRequest, NextResponse } from 'next/server';
import { Repos } from 'src/types/types.d';

function imagePath(repo: string, topics: string) {
    const absImagePaths = process.env.NEXT_PUBLIC_GH_ABS_IMAGE_PATHS || "";
    let parentFolder = process.env.NEXT_PUBLIC_GH_BRANCH!;

    try {
        const jsonObject = JSON.parse(absImagePaths);
        for (const [key, value] of Object.entries(jsonObject)) {
            if (topics.includes(key)) {
                parentFolder += value + "/";
                break;
            }
        }
    } catch (error) {
        console.error("Invalid JSON in environment variable:", error);
    }

    return (
        process.env.NEXT_PUBLIC_GH_BASE_IMAGE_PATH +
        repo +
        parentFolder +
        process.env.NEXT_PUBLIC_GH_RELATIVE_IMAGE_PATH
    );
}

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams
    const topics = searchParams.getAll('topic')

    const response = await fetch(process.env.NEXT_PUBLIC_GH_API!, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GH_TOKEN}`,
        },
    }).then((response) => response.json());

    const cleanedData: Repos[] = response.map(result => ({
        name: result.name,
        desc: result.description,
        topics: result.topics,
        forks: result.forks,
        stargazers_count: result.stargazers_count,
        image: imagePath(result.name, result.topics)
    }))

    const allTopics = cleanedData.filter(item => item.topics.length > 0)
    const filteredTopics = topics.length > 0 ? allTopics.filter(item => item.topics.some(topic => topics.includes(topic))) : allTopics;

    return NextResponse.json(filteredTopics);
}