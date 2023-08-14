import Prompt from "@/models/prompt";
import { connectToDB } from "@/utils/db";

export const GET = async (request,{ params }) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findById(params.id).populate("creator");
        if (!prompt) {
            return new Response({ message: "Prompt not found" }, { status: 404 });
        }
        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        console.log(error);
        return new Response({ message: "Failed to fetch prompt!" }, { status: 500 })
    }
}

export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {
        await connectToDB();
        const exisstingPrompt = await Prompt.findById(params.id);

        if (!exisstingPrompt) {
            return new Response({ message: "Prompt not found" }, { status: 404 });
        }
        exisstingPrompt.prompt = prompt;
        exisstingPrompt.tag = tag;

        await exisstingPrompt.save();
        return new Response(JSON.stringify(exisstingPrompt), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response({ message: "Failed to update prompt" }, { status: 500 });
    }
}
export const DELETE = async (request,{ params }) => {

    try {
        await connectToDB();
        await Prompt.findByIdAndRemove(params.id);

        return new Response({ message: "Prompt Deleted! " },{ status: 200 });
    } catch (error) {
        console.log(error);
        return new Response({ message: "Failed to Delete prompt" }, { status: 500 });
    }
}

