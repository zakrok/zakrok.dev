<script lang="ts">
    import Artt from "$lib/Artt.svelte";
    import Window from "$lib/Window.svelte";
    import {onMount} from "svelte";

    async function copy_88() {
        try {
            await navigator.clipboard.writeText(
                "<a href=\"https://zakrok.dev\" target=\"_blank\">\n" +
                "    <img src=\"https://zakrok.dev/88x31.gif\" alt=\"zakrok.dev personal website banner\" />\n" +
                "</a>\n"
            )
        } catch (e) {}
    }

    let audio: HTMLAudioElement;

    onMount(() => {
        audio.autoplay = true
        audio.volume = 0.3
    })
</script>

<Artt />

<div class="absolute flex flex-col gap-2" style="bottom: 2em; right: 2em;">
    <Window title="d3ds3c.ogg" bottom={8.5}>
        <audio bind:this={audio} src="/watch_dogs_2.ogg" type="audio/ogg" autoplay loop>
            browser cannot play audio
        </audio>
        <button on:click={() => audio.play()} class="cursor-pointer underline">play</button>
        <button on:click={() => audio.pause()} class="cursor-pointer underline">un/pause</button>
        <button on:click={() => audio.volume += 0.1} class="cursor-pointer text-2xl">+</button>
        <button on:click={() => audio.volume -= 0.1} class="cursor-pointer text-2xl">-</button>
        <span><i class="text-sm">keep in mind this song is not made by me and it is from Watch Dogs 2</i></span>
    </Window>
    <Window title="shmls_shill.txt" bottom={8.5}>
        <h3># mention me</h3>
        <button on:click={copy_88} class="cursor-pointer">
            <img src="/88x31.gif" alt="Click to copy me!" />
        </button>
    </Window>
    <Window title="my_friends.txt" bottom={2}>
        <h3>imagine having those</h3>
    </Window>
</div>

<main class="w-screen h-screen p-8 pb-20 flex flex-col-reverse">
    <div class="flex flex-col">
        <span class="text-gray-500 text-lg font-pixel">
             # intern @ jetbrains & computer science student @ TUDelft
        </span>
        <h1 class="text-gray-100 font-bold text-4xl font-pixel">
            // kiril panayotov
        </h1>
        <hr class="p-4">
        <div class="flex gap-4 flex-col lg:flex-row">
            <a href="projects" class="bg-white hover:bg-gray-300 px-2 self-start text-black font-pixel cursor-pointer">
                // explore my work
            </a>
            <a href="blog" class="text-white hover:text-gray-300 px-2 self-start font-pixel cursor-pointer">
                # browse my blog
            </a>
            <a href="about" class="text-white hover:text-gray-300 px-2 self-start font-pixel cursor-pointer">
                # learn more about me
            </a>
        </div>
        <div class="flex gap-4 mt-2">
            <a href="https://github.com/zakrok"
               class="text-white hover:text-gray-300 px-2 self-start font-pixel cursor-pointer underline"
               target="_blank">
                GitHub
            </a>
            <a href="https://www.linkedin.com/in/kiril-panayotov/"
               class="text-white hover:text-gray-300 px-2 self-start font-pixel cursor-pointer underline"
               target="_blank">
                LinkedIn
            </a>
        </div>
    </div>
</main>
