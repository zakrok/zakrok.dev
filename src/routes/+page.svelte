<script>
    import Artt from "$lib/Artt.svelte";
</script>

<Artt />

<main class="w-screen h-screen p-8 pb-20 flex flex-col-reverse">
    <div class="flex flex-col">
        <span class="text-gray-500 text-lg font-pixel">
             # intern @ jetbrains & computer science student @ TUDelft
        </span>
        <h1 class="text-gray-100 font-bold text-4xl font-pixel">
            // kiril panayotov
        </h1>
        <hr class="p-4">
        <div class="flex gap-4">
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
